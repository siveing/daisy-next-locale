import Link from 'next/link';
import HomePageComponent from '@/components/pages/HomePage.component';
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import LanguageChanger from '@/components/shared/LanguageChanger';
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['home'];

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main className='about-screen'>
                <h1>{t('header')}</h1>
                <Link href="/">{t('home')}</Link>
            </main>
        </TranslationsProvider>
    );
}

export default Home;