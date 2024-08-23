import Credentials from '@auth/core/providers/credentials';
import Google from '@auth/core/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcrypt';
import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';

import { prisma } from '@/prisma/prisma-client';
import { loginSchema } from '@/shared/lib/zod';

export const authOption: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Credentials({
			credentials: {
				email: {
					type: 'email',
					label: 'email',
				},
				password: {
					type: 'password',
					label: 'password',
				},
			},
			authorize: async (credentials) => {
				if (!credentials) return null;

				const { email, password } =
					await loginSchema.parseAsync(credentials);

				const findUser = await prisma.user.findFirst({
					where: { email },
				});

				if (!findUser) return null;

				console.log(await bcrypt.hash(password, 10));

				// const isPasswordValid = await compare(
				// 	credentials.password as string,
				// 	findUser.password as string,
				// );

				// if (!isPasswordValid) return null;

				return {
					id: findUser.id,
					email: findUser.email,
					name: findUser.name,
					role: findUser.role,
				};
			},
		}),
	],
	secret: process.env.AUTH_SECRET,
	callbacks: {
		jwt: ({ token, user }) => {
			if (user) {
				token.id = user.id;
				token.name = user.name;
				token.email = user.email;
				token.role = user.role;
			}
			return token;
		},
		session: ({ session, user }) => {
			session.user.id = user.id;
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOption);
