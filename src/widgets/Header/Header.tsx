// 'use client';

import { Bell, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Profile } from '@/components';
import { LocaleSelect } from '@/components/features';
import { Button, Flex, Input } from '@/shared/ui';

export const Header: FC = () => {
  // const [time, date] = useNowDate();

  return (
    <header className='grid grid-cols-[350px_1fr] gap-4 items-center mb-4 pt-4 px-6'>
      <Link className='justify-self-center' href='/'>
        <Image src={'/logo.svg'} alt='Funding Stax' width={149} height={63} />
      </Link>
      <Flex justify='between'>
        <div>
          <h3 className='text-2xl'>Good morning, John!</h3>
          <p className='text-base text-muted-foreground'>
            {/* {`${time} • ${date}`} */}
          </p>
        </div>
        <Input variant='dark' className='max-w-md' placeholder='Search...' />
        <Button size='icon'>
          <Bell />
        </Button>
        <Profile
          avatarUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7veP7WNzW-9UA4KJLXesrdwyp1GVURweg&sF'
          name='John Doe'
          email='johndoe@gmail.com'
        />
        <div className='flex gap-6'>
          <LocaleSelect />
          <Button size='icon'>
            <LogOut />
          </Button>
        </div>
      </Flex>
    </header>
  );
};
