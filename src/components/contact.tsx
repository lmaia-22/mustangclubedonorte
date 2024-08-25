'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react'; // Import useState to manage loading state
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { CoolMode } from './magicui/cool-mode';
import emailjs from 'emailjs-com';

const typeOfContacts = [
  { label: 'Dúvidas', value: 'doubt' },
  { label: 'Pedido de Inscrição no Clube', value: 'participate' },
] as const;

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: 'Nome deve ter mais que 1 caracter.',
    }),
    email: z.string().email().includes('@', {
      message: 'O email não é válido.',
    }),
    message: z.string().min(1, {
      message: 'Mensagem não pode estar vazia.',
    }),
    typeOfContact: z.string({
      required_error: 'Por favor escolha uma das razões de contacto.',
    }),
    city: z.string().optional(),
    picture: z.any().optional(),
    licensePlate: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.typeOfContact === 'participate') {
        return data.city && data.licensePlate;
      }
      return true;
    },
    {
      message: 'Cidade e Matrícula são necessárias para participação.',
      path: ['city'],
    }
  );

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeOfContact: '',
      username: '',
      email: '',
      message: '',
      city: '',
      licensePlate: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const allFieldsFilled = () => {
    const { username, email, message, typeOfContact, city, licensePlate } =
      form.watch();
    if (typeOfContact === 'participate') {
      return username && email && message && city && licensePlate;
    }
    return username && email && message && typeOfContact;
  };

  async function sendEmail(
    data: z.infer<typeof formSchema>,
    resetForm: () => void
  ) {
    setIsLoading(true); // Set loading state to true when email is being sent
    let emailBody = `
      <p>Olá ${data.username},</p>
      <p>O ${data.username} mandou mensagem pela seguinte razão: ${data.typeOfContact}</p>
      <p>O seu email é o seguinte: ${data.email}</p>
      <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
        ${data.message}
      </p>
    `;

    // Conditionally add city and license plate if provided
    if (data.typeOfContact === 'participate') {
      emailBody += `
        <p><strong>Cidade:</strong> ${data.city}</p>
        <p><strong>Matrícula do Veículo:</strong> ${data.licensePlate}</p>
      `;
    }

    // Closing statement
    emailBody += `
      <p>Best wishes,<br>EmailJS team</p>
    `;

    try {
      const response = await emailjs.send(
        'service_c30i8fh', // Replace with your EmailJS service ID
        'template_6gyq1r9', // Replace with your EmailJS template ID
        {
          username: data.username,
          email: data.email,
          message: emailBody, // Pass the constructed email body here
        },
        '10he7_G2aMn2UhVuV' // Replace with your EmailJS user ID (public key)
      );

      if (response.status === 200) {
        toast({
          title: 'Email enviado com sucesso!',
          description:
            'Sua mensagem foi enviada. Entraremos em contato em breve.',
          duration: 5000, // 5 seconds duration for the toast to disappear
        });

        // Clear the form after successful submission
        resetForm();
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Falha ao enviar o email:', error);
      toast({
        title: 'Falha ao enviar o email',
        description:
          'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.',
        variant: 'destructive', // Use the correct variant if required by shadcn/ui
        duration: 5000, // 5 seconds duration for the toast to disappear
      });
    } finally {
      setIsLoading(false); // Reset loading state when email is done sending
    }
  }

  function onSubmit(data: z.infer<typeof formSchema>) {
    sendEmail(data, form.reset);
  }

  const { toast } = useToast();

  return (
    <div className='mx-auto max-w-md rounded-lg bg-white p-8 shadow-md'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-8'>
          <FormField
            control={form.control}
            name='typeOfContact'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Razão de Contacto
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        role='combobox'
                        className={cn(
                          'w-[100%] justify-between text-black dark:bg-foreground',
                          !field.value
                        )}
                      >
                        {field.value
                          ? typeOfContacts.find(
                              (typeOfContact) =>
                                typeOfContact.value === field.value
                            )?.label
                          : 'Selecione a razão'}
                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-[100%] p-0'>
                    <Command>
                      <CommandInput
                        placeholder='Escolha a razão de contacto'
                        className='h-9'
                      />
                      <CommandList>
                        <CommandEmpty>
                          Nenhuma opção válida encontrada.
                        </CommandEmpty>
                        <CommandGroup>
                          {typeOfContacts.map((typeOfContact) => (
                            <CommandItem
                              value={typeOfContact.label}
                              key={typeOfContact.value}
                              onSelect={() => {
                                form.setValue(
                                  'typeOfContact',
                                  typeOfContact.value
                                );
                              }}
                            >
                              {typeOfContact.label}
                              <CheckIcon
                                className={cn(
                                  'ml-auto h-4 w-4',
                                  typeOfContact.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Nome
                </FormLabel>
                <FormControl>
                  <Input placeholder='Fábio Santos' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder='mustang@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch('typeOfContact') === 'participate' && (
            <>
              <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel className='mx-auto text-center text-black'>
                      Cidade
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='Porto' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='licensePlate'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel className='mx-auto text-center text-black'>
                      Matrícula do Veículo
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='AB-11-BA' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='picture'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel className='mx-auto text-center text-black'>
                      Foto do Veículo
                    </FormLabel>
                    <FormControl>
                      <Input id='picture' type='file' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Mensagem
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Olá, tudo bem?'
                    className='resize-none text-black'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CoolMode
            options={{
              particle: '/logo_no_bk.png',
            }}
          >
            <Button
              type='submit'
              className='w-full rounded-md bg-primary px-4 py-2 font-bold focus:text-gray-200 focus:outline-none focus:ring-2 dark:bg-background dark:text-foreground'
              disabled={isLoading || !allFieldsFilled()} // Disable button during loading or if fields are not filled
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </Button>
          </CoolMode>
        </form>
      </Form>
    </div>
  );
}
