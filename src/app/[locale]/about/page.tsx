import Link from 'next/link';
import HomePageComponent from '@/components/pages/HomePage.component';
import TranslationsProvider from '@/components/provider/TranslationsProvider';
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
            <main>
                <h1>{t('header')}</h1>
                <HomePageComponent />
                <Link href="/">{t('home')}</Link>
                <LanguageChanger />
            </main>
        </TranslationsProvider>
    );
}

export default Home;