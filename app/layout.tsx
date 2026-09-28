import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NuptialVibe | Wedding Organizer & Interactive Floor Plan Suite',
  description: 'Aplikasi Wedding Organizer interaktif dengan denah layout gedung, manajemen meja tamu, koordinasi rundown, dan integrasi cloud database Supabase.',
  openGraph: {
    title: 'NuptialVibe | Wedding Organizer & Floor Plan Suite',
    description: 'Aplikasi Wedding Organizer interaktif dengan denah layout gedung & Supabase cloud sync.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..700&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF7F2] dark:bg-[#121013] text-[#2D2422] dark:text-[#F8F3ED] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
