'use client';

import { PrimeReactProvider } from 'primereact/api';

// CSS imports
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppToolbar from '@/components/Toolbar/Toolbar';
import Blog from '@/components/Blog/Blog';
import { blogPosts } from '@/components/Blog/Blog.mockdata';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <PrimeReactProvider>
                <div className='mih-h-screen flex flex-col'>
                    <AppToolbar />
                    <main className='flex-1 px-64 py-12'>
                        <Blog blogPosts={blogPosts} /> 
                        {children}
                    </main>
                </div>
            </PrimeReactProvider>
        </body>
    </html>
  );
}
