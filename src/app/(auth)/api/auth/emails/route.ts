import { sendEmail } from '@/shared/lib/sendEmail';

export async function POST() {
	try {
		const result = await sendEmail({
			to: 'dimos9813@gmail.com',
			subject: 'Подтверждение почты',
		});

		return Response.json({
			accepted: result.accepted,
		});
	} catch (e) {
		return Response.json({ message: e });
	}
}
