export type DeepPartial<T> = T extends Function
	? T
	: T extends Array<infer U>
		? _DeepPartialArray<U>
		: T extends object
			? _DeepPartialObject<T>
			: T | undefined;

type _DeepPartialArray<T> = Array<DeepPartial<T>>;
type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift';
export type FixedLengthArray<
	T,
	L extends number,
	TObj = [T, ...Array<T>],
> = Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>> & {
	readonly length: L;
	[I: number]: T;
	[Symbol.iterator]: () => IterableIterator<T>;
};
