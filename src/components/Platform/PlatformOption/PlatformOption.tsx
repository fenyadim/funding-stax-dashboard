import { TooltipButton } from '@/components/features';
import { Locale } from '@/shared/config/localeConfig';
import { Flex } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';
import { cn } from '@/shared/utils/utils';

export type PlatformItemType<T> = {
	id: T;
	name: T;
};

interface PlatformOptionType<T> {
	title: string;
	items: Array<PlatformItemType<T>>;
	idActive: T;
	setIdActive: (id: T) => void;
	locale?: Locale;
	info?: string;
	className?: string;
}

export const PlatformOption = <T extends string | number>({
	title,
	items,
	idActive,
	setIdActive,
	locale,
	info,
	className,
}: PlatformOptionType<T>) => {
	const onChangeHandler = (id: T) => () => {
		setIdActive(id);
	};

	return (
		<Flex
			className={cn('w-1/2 h-min', className)}
			gap={4}
			align='start'
			direction='column'
		>
			<Flex className='mb-3' gap={16} max>
				<h3 className='text-xl'>{title}</h3>
				{info && <TooltipButton text={info} />}
			</Flex>
			<div className='grid grid-cols-3 gap-3 w-full'>
				{items.map((item) => (
					<Button
						id={String(item.id)}
						key={item.id}
						onClick={onChangeHandler(item.id)}
						size='lg'
						variant={item.id === idActive ? 'secondary' : 'default'}
					>
						{typeof item.name === 'string' || !locale ? (
							item.name
						) : (
							<>
								<span className='mr-1'>$</span>
								{formatLocaleNumber(locale, item.name)}
							</>
						)}
					</Button>
				))}
			</div>
		</Flex>
	);
};
