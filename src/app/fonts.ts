import { Manrope, Roboto } from 'next/font/google';

export const manrope = Manrope({
	weight: ['400', '500', '600', '700'],
	variable: '--font-manrope',
	subsets: ['latin'],
});

export const roboto = Roboto({
	weight: ['500', '700'],
	variable: '--font-roboto',
	subsets: ['latin'],
});
