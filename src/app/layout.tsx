// app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'R2R Cleaning Services| Professional Cleaning Services',
  description: 'Professional cleaning services in Rochdale and Greater Manchester. From Rochdale to the Region - Spotless Results Every Time.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}