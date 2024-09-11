// import EmailProvider from "next-auth/providers/email";
import Nodemailer from '@auth/core/providers/nodemailer';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';

import { prisma } from '@/prisma/prisma-client';

export const authOption: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Nodemailer({
			server: {
				host: process.env.EMAIL_HOST,
				port: Number(process.env.EMAIL_PORT),
				auth: {
					user: process.env.EMAIL_USER,
					pass: process.env.EMAIL_PASS,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
		// Credentials({
		//   credentials: {
		//     email: {
		//       type: 'email',
		//       label: 'email',
		//     },
		//     password: {
		//       type: 'password',
		//       label: 'password',
		//     },
		//   },
		//   authorize: async (credentials) => {
		//     if (!credentials) return null;
		//
		//     const { email, password } = await loginSchema.parseAsync(credentials);
		//
		//     const findUser = await prisma.user.findFirst({
		//       where: { email },
		//     });
		//
		//     if (!findUser) return null;
		//
		//     const isPasswordValid = await bcrypt.compare(
		//       password,
		//       findUser.password as string,
		//     );
		//
		//     if (!isPasswordValid) return null;
		//
		//     return {
		//       id: findUser.id,
		//       email: findUser.email,
		//       name: findUser.name,
		//       role: findUser.role,
		//     };
		//   },
		// }),
	],
	// events: {
	//   linkAccount: async ({ user }) => {
	//     await prisma.user.update({
	//       where: { id: user.id },
	//       data: {
	//         emailVerified: new Date(),
	//         role: 'USER',
	//       },
	//     });
	//   },
	// },
	secret: process.env.AUTH_SECRET,
	// callbacks: {
	//   jwt: async ({ token, user }) => {
	//     if (user) {
	//       token.id = user.id;
	//       token.name = user.name;
	//       token.email = user.email;
	//       token.role = user.role;
	//     }
	//     return token;
	//   },
	// },
	pages: {
		signIn: '/login',
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOption);
