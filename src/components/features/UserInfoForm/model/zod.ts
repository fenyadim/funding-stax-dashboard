import { string, z } from 'zod';

const passwordSchema = string({ required_error: 'Введите пароль' })
	.min(1, { message: 'Введите пароль' })
	.min(6, { message: 'Пароль не может быть меньше 6 символов' })
	.regex(/[a-zA-Z]/, {
		message: 'Должен содержать хотя бы одну латинскую букву.',
	})
	.regex(/[0-9]/, { message: 'Должен содержать хотя бы одну цифру.' });

export const updateInfoFormSchema = z.object({
	firstName: z
		.string({ required_error: 'Введите имя' })
		.min(2, { message: 'Должно быть длиннее 2 символов' })
		.max(50, { message: 'Должно быть не больше 50 символов' }),
	lastName: z
		.string({ required_error: 'Введите имя' })
		.min(2, { message: 'Должно быть длиннее 2 символов' })
		.max(50, { message: 'Должно быть не больше 50 символов' }),
	email: string({ required_error: 'Введите почту' })
		.min(1, { message: 'Введите почту' })
		.email({ message: 'Введите корректную почту' }),
	phone: z
		.string({ required_error: 'Введите телефон' })
		.min(1)
		.regex(
			/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
			{
				message: 'Введите корректный телефон',
			},
		),
});

export const changePasswordFormSchema = z
	.object({
		currentPassword: passwordSchema,
		newPassword: passwordSchema,
		confirmPassword: passwordSchema,
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Пароль не совпадают',
		path: ['confirmPassword'],
	});
