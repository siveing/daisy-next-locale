'use client';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function HomePageComponent() {
    const { t } = useTranslation();

    const setTheme = useCallback((theme: string) => {
        const body = document.body;
        body.setAttribute("data-theme", theme);
    }, []);

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a onClick={() => setTheme('dark')}>Dark</a></li>
                        <li><a onClick={() => setTheme('light')}>Light</a></li>
                        <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <h3>{t('greeting')}</h3>
        </>
    );
}
