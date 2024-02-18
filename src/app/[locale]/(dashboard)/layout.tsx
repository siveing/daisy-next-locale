import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Dashboard Core Next',
    description: 'Dashboard Generated core next by jin'
};

export default function DashboardLayout({
    children,
    params: { locale }
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    return (
        <main id='dashboard-layout'>
            {children}
        </main>
    );
}