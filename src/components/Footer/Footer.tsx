import { SocialButtons } from '@/components/features';
import { ALink } from '@/components/ui';
import { Flex } from '@/shared/ui';

import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<Flex className={styles.wrapper} gap={32}>
			<p>© 2022. All rights reserved.</p>
			<SocialButtons gap={16} size='sm' />
			<p>
				For detailed Terms & Conditions and other relevant information, please
				visit our <ALink href='#'>website</ALink>
			</p>
		</Flex>
	);
};

export default Footer;
