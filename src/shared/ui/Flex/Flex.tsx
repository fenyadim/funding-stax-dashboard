import { type VariantProps, cva } from 'class-variance-authority';
import {
    type DetailedHTMLProps,
    type HTMLAttributes,
    type ReactNode,
} from 'react';

import { cn } from '@/shared/utils/utils';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps, VariantProps<typeof flexVariants> {
    className?: string;
    children: ReactNode;
    max?: boolean;
}

const flexVariants = cva('flex', {
    variants: {
        justify: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            stretch: 'justify-stretch',
        },
        align: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
        },
        direction: {
            row: 'flex-row',
            column: 'flex-col',
        },
        gap: {
            4: 'gap-1',
            8: 'gap-2',
            16: 'gap-4',
            32: 'gap-8',
        },
        wrap: {
            wrap: 'flex-wrap',
            nowrap: 'flex-nowrap',
        },
    },
    defaultVariants: {
        justify: 'start',
        align: 'center',
        direction: 'row',
        wrap: 'nowrap',
    },
});

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify,
        align,
        direction,
        gap,
        max,
        wrap,
        ...otherProps
    } = props;

    return (
        <div
            className={cn(
                {
                    'w-full': max,
                },
                flexVariants({ direction, wrap, align, gap, justify, className }),
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
