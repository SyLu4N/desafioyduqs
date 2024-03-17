import { ReactNode } from 'react';

import { Footer } from '@/content/footer';
import { Header } from '@/content/header';
import { queryClient } from '@/services/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'EMPRESA.com.br',
  description: 'Descrição do site da empresa',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />

          {children}

          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
