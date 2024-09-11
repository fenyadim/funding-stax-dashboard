import { createTransport } from 'nodemailer';

const transport = createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({
  to,
  subject,
}: {
  to: string;
  subject: string;
}) => {
  return await transport.sendMail({
    from: process.env.EMAIL_FROM,
    to: to,
    subject: subject,
    text: 'SEX',
  });
};
