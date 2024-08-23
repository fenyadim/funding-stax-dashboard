import styles from './layoutAuth.module.scss';

export default function SignInLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className={styles.main}>{children}</main>;
}
