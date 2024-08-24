'use server';

import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/prisma/prisma-client';

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get('code');

	if (!code) {
		return NextResponse.json({ error: 'Неверный код' }, { status: 400 });
	}

	try {
		const verificationCode = await prisma.verificationCode.findFirst({
			where: {
				code,
			},
		});

		if (!verificationCode) {
			return NextResponse.json(
				{ error: 'Неверный код' },
				{ status: 400 },
			);
		}

		await prisma.user.update({
			where: {
				id: verificationCode.userId,
			},
			data: {
				emailVerified: new Date(),
			},
		});

		await prisma.verificationCode.delete({
			where: {
				id: verificationCode.id,
			},
		});

		NextResponse.redirect(new URL('/?verified', req.url));

		return NextResponse.json({});
	} catch (e) {
		console.error(e);
		console.log('[VERIFY_GET] Server error', e);
	}
}
