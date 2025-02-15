'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CoolMode } from './magicui/cool-mode';
import { createClient } from '@/lib/supabase/client'
import { Database } from '@/lib/database.types';
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'Nome deve ter mais que 1 caracter.',
    }),
    lastName: z.string().min(2, {
        message: 'Nome deve ter mais que 1 caracter.',
    }),
    birthdate: z.date(),
    email: z.string().email().includes('@', {
        message: 'O email não é válido.',
    }),
    phone: z.string().min(9, {
        message: 'Número de telefone deve ter mais que 8 caracteres.',
    }),
    brand: z.string().min(2, {
        message: 'Marca deve ter mais que 1 caracter.',
    }),
    model: z.string().min(2, {
        message: 'Modelo deve ter mais que 1 caracter.',
    }),
    year: z.string().min(4, {
      message: 'Ano deve ter mais que 4 caracter.',
  }),
    licensePlate: z.string(),
    city: z.string(),
    picture: z.any().optional(),
  })

export function ProfileForm() {
  const supabase = createClient()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      brand: '',
      model: '',
      year: '',
      licensePlate: '',
      city: '',
      picture: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    if (e.target.files) {
      field.onChange(e.target.files);
    }
  };

  const allFieldsFilled = () => {
    const { firstName, lastName, birthdate, email, phone, brand, model, year, city, licensePlate } = form.watch();
    return firstName && lastName && birthdate && email && phone && brand && model && year && city && licensePlate;
  };

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      
      let imageUrl = null;
      if (data.picture && data.picture[0]) {
        const file = data.picture[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('vehicle-images')
          .upload(fileName, file, {
            upsert: false
          });

        if (uploadError) {
          throw new Error('Erro ao carregar imagem: ' + uploadError.message);
        }

        const { data: { publicUrl } } = supabase.storage
          .from('vehicle-images')
          .getPublicUrl(fileName);

        imageUrl = publicUrl;
      }

      const { error: insertError } = await supabase
        .from('members')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          birthdate: data.birthdate,
          email: data.email,
          phone: data.phone,
          brand: data.brand,
          model: data.model,
          year: data.year,
          license_plate: data.licensePlate,
          city: data.city,
          picture_url: imageUrl
        });

      if (insertError) {
        throw new Error('Erro ao salvar dados: ' + insertError.message);
      }

      form.reset();
      alert('Membro adicionado com sucesso!');
      
    } catch (error: any) {
      console.error('Error details:', error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='mx-auto max-w-md rounded-lg bg-white p-8 shadow-md'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-8'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Primeiro Nome
                </FormLabel>
                <FormControl>
                  <Input placeholder='Fábio' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Último Nome
                </FormLabel>
                <FormControl>
                  <Input placeholder='Santos' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="mx-auto text-center text-black">Data de Nascimento(min 18 anos)</FormLabel>
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal bg-white text-black",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          <span className="text-black">{format(field.value, "dd/MM/yyyy")}</span>
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                      mode="single"
                      captionLayout="dropdown"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        setIsOpen(false);
                      }}
                      disabled={(date) => {
                        const today = new Date();
                        const minAge = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
                        return date > minAge || date < new Date("1900-01-01");
                      }}
                      fromYear={1900}
                      toYear={new Date().getFullYear() - 18}
                      defaultMonth={new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Telefone
                </FormLabel>
                <FormControl>
                  <Input placeholder='912345678' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='brand'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Marca
                </FormLabel>
                <FormControl>
                  <Input placeholder='Ford' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='model'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Modelo
                </FormLabel>
                <FormControl>
                  <Input placeholder='Mustang GT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='year'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Ano
                </FormLabel>
                <FormControl>
                  <Input placeholder='2025' {...field} />
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
                  Matrícula
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
            name='picture'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='mx-auto text-center text-black'>
                  Foto do Veículo
                </FormLabel>
                <FormControl>
                  <Input 
                    id='picture' 
                    type='file' 
                    accept='image/*'
                    onChange={(e) => handleFileChange(e, field)}
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
              disabled={isLoading || !allFieldsFilled()}
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </Button>
          </CoolMode>
        </form>
      </Form>
    </div>
  );
}
