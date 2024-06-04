import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../styles/globals.css';
import Background from '@/components/Background';
import { FormProvider } from '@/context/FormContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prompt Generator',
  description: 'Generate a prompt based on the form data you provide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FormProvider>
        <body className={inter.className}>
          {children}
          <Background />
        </body>
      </FormProvider>
    </html>
  );
}
