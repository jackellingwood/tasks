/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length >= 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    return [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return [...numbers].map((n: number): number => n * 3);
}

function parseIntOrZero(s: string) {
    return !isNaN(parseInt(s)) ? parseInt(s) : 0;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return [...numbers].map((s: string): number => parseIntOrZero(s));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return [...amounts].map((s: string): number =>
        s[0] === "$" ? parseIntOrZero(s.slice(1)) : parseIntOrZero(s),
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages = [...messages].map((s: string): string =>
        s[s.length - 1] === "!" ? s.toUpperCase() : s,
    );
    return newMessages.filter(
        (s: string): boolean => !(s[s.length - 1] === "?"),
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let lens = [...words].map((s: string): number => s.length);
    return lens.filter((n: number): boolean => n < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((s: string): boolean =>
        ["red", "green", "blue"].includes(s),
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    return (
        sum.toString() +
        "=" +
        (addends.length != 0 ?
            addends.map((n: number): string => n.toString()).join("+")
        :   "0")
    );
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negIndex = values.findIndex((n: number): boolean => n < 0);
    if (negIndex === -1) { // if the array has no negative nums
        let sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        let out = [...values];
        out.push(sum);
        return out;
    }
    // if there is a negative num
    let sum = values
        .slice(0, negIndex) // really really not a big fan of this "end exclusive slicing" when -1 is allowed
        .reduce((currentTotal: number, num: number) => currentTotal + num, 0);
    let out = [...values];
    out.splice(negIndex + 1, 0, sum);
    return out;
}
