import i18nConfig from '@/i18nConfig';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { dir } from 'i18next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Core Next',
    description: 'Generated core next by jin'
};

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}

export default function Layout({
    children,
    params: { locale }
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}