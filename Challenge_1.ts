type Last = {
    <T>(arr: T[]): T;
}

const last : Last = (arr) => arr[arr.length - 1];

// --------------------------------------------------------

type PrependType = {
    <T, U>(arr: T[], item: U): (T | U)[];
}

const prepend: PrependType = (arr, item) => [item, ...arr];

// --------------------------------------------------------

type Mix = {
    <T, U>(arr1: T[], arr2: U[]): (T | U)[];
}

const mix: Mix = (arr1, arr2) => [...arr1, ...arr2];

// --------------------------------------------------------

type Count = {
    <T>(arr: T[]): number
}

const count: Count = (arr) => arr.length

// --------------------------------------------------------

type FindIndex = {
    <T, U>(arr: T[], item: U): number | null;
}

const findIndex: FindIndex = (arr, item) => {
    const index = arr.indexOf(item as any);
    return index > -1 ? index : null;
}

// --------------------------------------------------------

type Slice ={
    <T>(arr: T[], U: number, K?: number): T[];
}

const slice : Slice = (arr, startIndex, endIndex) => arr.slice(startIndex, endIndex)