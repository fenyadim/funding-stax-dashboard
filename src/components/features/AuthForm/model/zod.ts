import { z } from 'zod';

export const authFormSchema = z.object({
	email: z
		.string({ required_error: 'Введите почту' })
		.min(1, { message: 'Введите почту' })
		.email({ message: 'Введите корректную почту' }),
});
