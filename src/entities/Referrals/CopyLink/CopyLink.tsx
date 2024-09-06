'use client';

import { Copy } from 'lucide-react';
import { ChangeEvent, FC, useState } from 'react';

import { useToast } from '@/shared/hooks/use-toast';
import { Button, Flex, Input } from '@/shared/ui';
import { copyToClipboard } from '@/shared/utils/copyToClipboard';
import { cn } from '@/shared/utils/utils';

interface CopyLinkProps {
	label?: string;
	text: string;
	isEditable?: boolean;
	className?: string;
}

export const CopyLink: FC<CopyLinkProps> = ({
	label,
	text,
	isEditable,
	className,
}) => {
	const [value, setValue] = useState(text);
	const [editMode, setEditMode] = useState(false);
	const { toast } = useToast();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleClick = () => {
		copyToClipboard(value);
		toast({
			title: 'Link copied',
		});
	};

	const handleSave = () => {
		setEditMode(false);
	};

	return (
		<div className={cn('w-[400px]', className)}>
			<h3 className='text-base text-muted-foreground ml-5'>{label}</h3>
			<Flex gap={8} max>
				<Flex className='relative ml-1 flex-1'>
					<Input
						disabled={!editMode}
						value={value}
						onChange={handleChange}
						className='bg-card border-none w-full text-base pr-12'
					/>
					<Button
						variant='ghost'
						className='absolute right-0'
						size='icon'
						onClick={handleClick}
					>
						<Copy />
					</Button>
				</Flex>
				{isEditable &&
					(editMode ? (
						<Button variant='secondary' onClick={handleSave}>
							Save
						</Button>
					) : (
						<Button variant='secondary' onClick={() => setEditMode(true)}>
							Edit
						</Button>
					))}
			</Flex>
		</div>
	);
};
