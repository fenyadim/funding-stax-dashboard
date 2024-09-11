'use server';

import { isRedirectError } from 'next/dist/client/components/redirect';

import { auth } from '@/shared/config/authConfig';

interface CreateUserBody {
	email: string;
	refId: string | null;
}

export async function createUser({ email, refId }: CreateUserBody) {
	try {
		// const test = await signIn(
		// 	'nodemailer',
		// 	{
		// 		email: email,
		// 		callbackUrl: '/',
		// 	},
		// 	{},
		// );

		const session = await auth();

		console.log(session);

		// promise.then((res) =>
		// 	console.log(prisma.user.findFirst({ where: { email } })),
		// );
		// console.log(await prisma.user.findFirst({ where: { email } }));

		// if (refId) {
		// 	const refUser = await prisma.user.findFirst({
		// 		where: {
		// 			id: refId,
		// 		},
		// 	});
		// }

		// if (user) {
		// 	if (!user.emailVerified) {
		// 		throw new Error('Почта не подтверждена');
		// 	}
		// 	throw new Error('Такой пользователь уже существует');
		// }
		//
		// const createUser = await prisma.user.create({
		// 	data: {
		// 		email: body.email,
		// 		name: body.name,
		// 		password: bcrypt.hashSync(body.password as string, 10),
		// 	},
		// });
		//
		// const code = Math.floor(1000000 + Math.random() * 9000000).toString();
		//
		// await prisma.verificationCode.create({
		// 	data: {
		// 		code,
		// 		userId: createUser.id,
		// 	},
		// });

		// await sendEmail(
		// 	createUser.email,
		// 	'Подтверждение почты',
		// 	VerificationUserTemplate({
		// 		code,
		// 	}),
		// );
	} catch (e) {
		if (isRedirectError(e)) {
			throw e;
		}
	}
}
