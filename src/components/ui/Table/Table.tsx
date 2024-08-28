import { Flex } from '@/components/ui';
import { FixedLengthArray } from '@/shared/types/global';

import styles from './Table.module.scss';

export interface TableDataType<T extends number> {
	labels: string[];
	rows?: Array<FixedLengthArray<string, T>>;
}

interface TableProps<T extends number> {
	className?: string;
	data: TableDataType<T>;
}

export const Table = <T extends number>({ data }: TableProps<T>) => {
	return (
		<Flex
			direction='column'
			align='stretch'
			gap='8'
			className={styles.wrapper}
			max
		>
			<div
				className={styles.tableHeader}
				style={{
					gridTemplateColumns: `repeat(${data.labels.length}, 1fr)`,
				}}
			>
				{data.labels.map((value, index) => (
					<h3
						className={styles.columnTitle}
						key={`${value}-${index}}`}
					>
						{value}
					</h3>
				))}
			</div>
			<div>
				{data.rows ? (
					data.rows.map((row, index) => (
						<div
							key={`${row}-${index}}`}
							className={styles.tableRow}
							style={{
								gridTemplateColumns: `repeat(${data.labels.length}, 1fr)`,
							}}
						>
							{row.map((value, index) => (
								<p key={`${value}-${index}}`}>{value}</p>
							))}
						</div>
					))
				) : (
					<p className={styles.nothingData}>
						Your trading log will be shown here once you start
						trading.
					</p>
				)}
			</div>
		</Flex>
	);
};
