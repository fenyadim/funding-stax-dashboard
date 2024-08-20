import cn from 'classnames';
import {
	type DetailedHTMLProps,
	type HTMLAttributes,
	type ReactNode,
} from 'react';

import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';
type FlexWrap = 'wrap' | 'nowrap';

type DivProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

export interface FlexProps extends DivProps {
	className?: string;
	children: ReactNode;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction?: FlexDirection;
	gap?: FlexGap;
	wrap?: FlexWrap;
	max?: boolean;
	heightMax?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
	center: styles.justifyCenter,
	end: styles.justifyEnd,
	between: styles.justifyBetween,
	start: styles.justifyStart,
};

const alignClasses: Record<FlexAlign, string> = {
	center: styles.alignCenter,
	end: styles.alignEnd,
	start: styles.alignStart,
};

const directionClasses: Record<FlexDirection, string> = {
	row: styles.directionRow,
	column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
	4: styles.gap4,
	8: styles.gap8,
	16: styles.gap16,
	32: styles.gap32,
};

const wrapClasses: Record<FlexWrap, string> = {
	wrap: styles.wrap,
	nowrap: styles.nowrap,
};

export const Flex = (props: FlexProps) => {
	const {
		className,
		children,
		justify = 'start',
		align = 'center',
		direction = 'row',
		gap,
		max,
		heightMax,
		wrap = 'nowrap',
		...otherProps
	} = props;

	const additional = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap],
		wrap && wrapClasses[wrap],
	];

	const mods = {
		[styles.max]: max,
		[styles.heightMax]: heightMax,
	};

	return (
		<div className={cn(styles.Flex, mods, additional)} {...otherProps}>
			{children}
		</div>
	);
};
