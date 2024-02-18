import type { Metadata } from 'next';
import { ReactNode } from 'react';
import RootLayout from '@/components/layouts/RootLayout';
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import initTranslations from '@/app/i18n';

export const metadata: Metadata = {
    title: 'Core Next',
    description: 'Generated core next by jin'
};

export default async function Layout({
    children,
    params: { locale }
}: {
    children: ReactNode;
    params: { locale: string };
}) {

    const i18nNamespaces = ['navigation']
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <RootLayout>
                {children}
            </RootLayout>
        </TranslationsProvider>
    );
}