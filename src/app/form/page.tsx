'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FormPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page with contact section
    router.push('/contact#');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecionando...</h1>
        <p className="text-muted-foreground">
          A redirecionar para a secção de contacto...
        </p>
      </div>
    </div>
  );
}
