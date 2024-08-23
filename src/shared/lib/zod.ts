import { object, string, z } from 'zod';

export const passwordSchema = string({ required_error: 'Введите пароль' })
	.min(1, { message: 'Введите пароль' })
	.min(6, { message: 'Пароль не может быть меньше 6 символов' })
	.regex(/[a-zA-Z]/, {
		message: 'Должен содержать хотя бы одну латинскую букву.',
	})
	.regex(/[0-9]/, { message: 'Должен содержать хотя бы одну цифру.' });

export const loginSchema = object({
	email: string({ required_error: 'Введите почту' })
		.min(1, { message: 'Введите почту' })
		.email({ message: 'Введите корректную почту' }),
	password: passwordSchema,
});

export const registerSchema = loginSchema
	.merge(
		object({
			name: string({ message: 'Введите имя' }).min(1, {
				message: 'Введите имя',
			}),
			confirmPassword: passwordSchema,
		}),
	)
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароль не совпадают',
		path: ['confirmPassword'],
	});

export type TFormLoginValues = z.infer<typeof loginSchema>;
export type TFormRegisterValues = z.infer<typeof registerSchema>;
