'use client'

import { ReactNode } from 'react';
import Navigation from './Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({ children }: { children: ReactNode }) {

    // Theme Registry
    const queryClient = new QueryClient();
    
    return (
        <QueryClientProvider client={queryClient}>
            <Navigation />
            <main className='container py-4'>
                {children}
            </main>
        </QueryClientProvider>
    )
}
