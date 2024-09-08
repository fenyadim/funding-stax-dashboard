import { z } from 'zod';

export const supportFormSchema = z.object({
	firstName: z
		.string({ required_error: 'Введите имя' })
		.min(2, { message: 'Должно быть длиннее 2 символов' })
		.max(50, { message: 'Должно быть не больше 50 символов' }),
	lastName: z
		.string({ required_error: 'Введите имя' })
		.min(2, { message: 'Должно быть длиннее 2 символов' })
		.max(50, { message: 'Должно быть не больше 50 символов' }),
	email: z
		.string({ required_error: 'Введите почту' })
		.min(1, { message: 'Введите почту' })
		.email({ message: 'Введите корректную почту' }),
	text: z.string({ required_error: 'Введите текст' }).min(1, {
		message: 'Введите текст',
	}),
});
