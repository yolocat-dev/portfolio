const ONE_YEAR_MS = 31556952000;
const BIRTH_MS = 1249160040000;

function getAge(birthInMS: number): number {
	return Math.floor((Date.now() - birthInMS) / ONE_YEAR_MS);
}

export function getMyAge(): number {
	return getAge(BIRTH_MS);
}
