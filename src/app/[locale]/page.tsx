
'use client'

import styles from './page.module.css';
import Link from 'next/link';
import initTranslations from '../i18n';
import HomePageComponent from '@/components/pages/HomePage.component';
import TranslationsProvider from '@/components/provider/TranslationsProvider';
import LanguageChanger from '@/components/shared/LanguageChanger';

const i18nNamespaces = ['home'];

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main className={styles.main}>
                <h1>{t('header')}</h1>
                <HomePageComponent />
                <Link className='inline-block cursor-pointer rounded-md px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-secondary bg-primary' href="/about">{t('page2')}</Link>
                <LanguageChanger />
            </main>
        </TranslationsProvider>
    );
}

export default Home;