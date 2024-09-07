// 'use client';
//
// import { zodResolver } from '@hookform/resolvers/zod';
// import { FC } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import type { SubmitHandler } from 'react-hook-form'
//
// import { FormInput } from '@/components/features/FormInput/FormInput';
// import { Button } from '@/components/ui';
// import { registerUser } from '@/shared/actions/auth';
// import { TFormRegisterValues, registerSchema } from '@/shared/lib/zod';
// import { Flex } from '@/shared/ui';
//
// interface RegisterFormProps {
//     className?: string;
// }
//
// export const RegisterForm: FC<RegisterFormProps> = ({ }) => {
//     const form = useForm<TFormRegisterValues>({
//         resolver: zodResolver(registerSchema),
//         defaultValues: {
//             email: '',
//             password: '',
//             name: '',
//             confirmPassword: '',
//         },
//     });
//
//     const onSubmit: SubmitHandler<TFormRegisterValues> = async (data) => {
//         try {
//             await registerUser({
//                 email: data.email,
//                 name: data.name,
//                 password: data.password,
//             });
//         } catch (e: any) {
//             throw Error('Что-то пошло не так', e);
//         }
//     };
//
//     return (
//         <FormProvider {...form}>
//             <form style={{ width: '100%' }} onSubmit={form.handleSubmit(onSubmit)}>
//                 <Flex max direction='column' gap={32} align='stretch'>
//                     <FormInput name='name' theme='dark' placeholder='Полное имя' />
//                     <FormInput
//                         name='email'
//                         theme='dark'
//                         type='email'
//                         placeholder='Email'
//                     />
//                     <FormInput
//                         name='password'
//                         theme='dark'
//                         type='password'
//                         placeholder='Пароль'
//                     />
//                     <FormInput
//                         name='confirmPassword'
//                         theme='dark'
//                         type='password'
//                         placeholder='Повердить пароль'
//                     />
//                     <Button theme='accent' type='submit'>
//                         {form.formState.isSubmitting ? 'Регистрирую...' : 'Регистрация'}
//                     </Button>
//                 </Flex>
//             </form>
//         </FormProvider>
//     );
// };
