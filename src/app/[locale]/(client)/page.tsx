
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/providers/TranslationsProvider';

const i18nNamespaces = ['home'];

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    const articles: any = []

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main className='home-screen'>


            </main>
        </TranslationsProvider>
    );
}

export default Home;