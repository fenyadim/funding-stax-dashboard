'use server';

import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';

import { VerificationUserTemplate } from '@/components/ui/EmailTemplates/VerificationUserTemplate';
import { prisma } from '@/prisma/prisma-client';
import { sendEmail } from '@/shared/lib/sendEmail';

export async function registerUser(body: Prisma.UserCreateInput) {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		});

		if (user) {
			if (!user.emailVerified) {
				throw new Error('Почта не подтверждена');
			}
			throw new Error('Такой пользователь уже существует');
		}

		const createUser = await prisma.user.create({
			data: {
				email: body.email,
				name: body.name,
				password: bcrypt.hashSync(body.password as string, 10),
			},
		});

		const code = Math.floor(1000000 + Math.random() * 9000000).toString();

		await prisma.verificationCode.create({
			data: {
				code,
				userId: createUser.id,
			},
		});

		await sendEmail(
			createUser.email,
			'Подтверждение почты',
			VerificationUserTemplate({
				code,
			}),
		);
	} catch (e) {
		console.log('Error [CREATE_USER]', e);
		throw e;
	}
}
