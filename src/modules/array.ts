import * as A from 'fp-ts/lib/Array';

export const lookupC = (i: number) => <T>(xs: T[]): Option<T> => A.lookup(i, xs);

/**
 * `fp-ts/lib/Array::snoc` that doesn't resolve as a `NonEmptyArray`.
 */
export const snoc_ = <T>(xs: T[]) => (y: T): T[] => xs.concat(y);

export const asArray = <A>(xs: A | Array<A>): Array<A> => Array.isArray(xs) ? xs : [xs];

