import { ReactNode } from 'react';

import { Footer } from '@/content/footer';
import { Header } from '@/content/header';
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
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
