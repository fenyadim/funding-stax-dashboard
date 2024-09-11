import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/prisma/prisma-client';
import { auth } from '@/shared/config/authConfig';

export async function GET(req: NextRequest) {
	const refId = req.nextUrl.searchParams.get('ref');
	const session = await auth();

	try {
		const parentRef = await prisma.referral.findFirst({
			where: {
				userId: refId as string,
			},
		});

		await prisma.referral.create({
			data: {
				userId: session?.user?.id as string,
				procent: 20.3,
				userParentId: refId,
				userReferralId: refId,
			},
		});

		if (parentRef) {
			await prisma.referral.update({
				where: {
					userId: session?.user?.id as string,
				},
				data: {
					userChildId: parentRef.userParentId,
				},
			});
		}

		NextResponse.redirect(new URL('/', req.url));
	} catch (e) {
		console.log('[REGISTER_REF_GET] Server error', e);
		console.error(e);
		return NextResponse.json({ message: e, ok: false }, { status: 503 });
	}
}
