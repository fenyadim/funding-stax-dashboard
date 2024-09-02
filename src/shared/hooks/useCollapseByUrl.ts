import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useCollapseByUrl = (url: string) => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	useEffect(() => setOpen(pathname.includes(url)), [url, pathname]);

	return {
		open,
		setOpen,
	};
};
