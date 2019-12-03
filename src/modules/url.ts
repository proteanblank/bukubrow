import * as E from 'fp-ts/lib/Either';

export const createURL = (url: string): Either<DOMException, URL> => E.tryCatch(
	() => new URL(url),
	err => err instanceof DOMException ? err : new DOMException(),
);

