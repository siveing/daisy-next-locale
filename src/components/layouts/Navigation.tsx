'use client'

import Link from "next/link";
import LanguageChanger from "../shared/LanguageChanger";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { INavigationItem } from "@/models/navigation/navigation.model";
import { isEmpty } from "lodash";

function Navigation() {
    // STATE
    const [menus, setMenus] = useState<INavigationItem[]>(JSON.parse(localStorage.getItem('menus') as any) || [])

    // TRANSLATE
    const { t } = useTranslation();

    useEffect(() => {
       
    }, [])

    return (
        <div className="sticky top-0">
            <div className="navbar p-0  bg-white">
                <div className="container">
                    <div className="flex-1">
                        <Link href='/'>
                            <h1 className="font-bold text-black">JIN HUY</h1>
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 gap-3 dark:text-black">
                            <li>
                                <Link href={'/about'}>{t('about')}</Link>
                            </li>
                            <li>
                                <Link href={'/dashboard'}>{t('dashboard')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[100px]">
                        <LanguageChanger />
                    </div>
                </div>
            </div>

            {!isEmpty(menus) &&
                <div className="bg-red-100 dark:bg-gray-400">
                    <div className="container">
                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1 gap-3">
                                {menus?.map((res: INavigationItem) => (
                                    <li className="dark:text-white" key={res.id}>
                                        <Link href={res.url}>{t(res.title)}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}

export default Navigation;