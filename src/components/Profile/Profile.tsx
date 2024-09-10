import Link from 'next/link';
import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

interface ProfileProps {
  avatarUrl: string;
  name: string;
  email: string;
}

const getData = async () => {
  return {
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7veP7WNzW-9UA4KJLXesrdwyp1GVURweg&sF',
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  }
}

const Profile: FC<ProfileProps> = async () => {
  const data = await getData()

  const firstLetters = data.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Link href='#' className='flex gap-3 items-center'>
      <Avatar>
        <AvatarImage src={data.avatarUrl} />
        <AvatarFallback>{firstLetters}</AvatarFallback>
      </Avatar>
      <div>
        <h2 className='text-lg'>{data.name}</h2>
        <p className='text-sm text-muted-foreground'>{data.email}</p>
      </div>
    </Link>
  );
};

export default Profile;
