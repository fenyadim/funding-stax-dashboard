'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Banner } from '@/components/Banner/Banner';
import { SocialButtons } from '@/components/features';
import { Locale } from '@/shared/config/localeConfig';
import { Card } from '@/shared/ui/card';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

import { menuConfig } from '../../config';
import { SidebarCollapse } from '../SidebarCollapse/SidebarCollapse';
import { SidebarLink } from '../SidebarLink/SidebarLink';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ }) => {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <Card className='flex flex-col items-center gap-5 p-8 h-min'>
      <h2 className='text-3xl font-roboto'>
        <span className='text-accent mr-1'>$</span>
        {formatLocaleNumber(locale, 5665.67)}
      </h2>
      <nav className='w-full'>
        <ul className='flex flex-col gap-3'>
          {menuConfig.map(({ path, name, submenu }) =>
            path ? (
              <li key={path}>
                <SidebarLink
                  key={path}
                  path={path}
                  name={name}
                  isActive={pathname === path}
                />
              </li>
            ) : submenu ? (
              <li key={name}>
                <SidebarCollapse
                  pathname={pathname}
                  name={name}
                  submenu={submenu}
                />
              </li>
            ) : (
              ''
            ),
          )}
        </ul>
      </nav>
      <SocialButtons gap={32} />
      <Banner />
    </Card>
  );
};
