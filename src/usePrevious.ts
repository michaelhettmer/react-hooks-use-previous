import { useRef } from 'react';

type Configuration<T> = { equalityFn?: (a: T, b: T) => boolean };

/**
 * Predefined hook to store and retrieve the previous value of the given reference to a string.
 *
 * @param value Reference to a string that will be watched so that the previous value will always be updated
 * with the old value when the current value changes.
 * @param initialPreviousValue The initial value this hook should return as the default previous value as long as
 * the watched property was not updated.
 */
export const usePreviousString = (value: string, initialPreviousValue = '') =>
    usePrevious<string>(value, initialPreviousValue);

/**
 * Predefined hook to store and retrieve the previous value of the given reference to a string array.
 *
 * @param value Reference to a string array that will be watched so that the previous value will always be updated
 * with the old value when the current value changes.
 * @param initialPreviousValue The initial value this hook should return as the default previous value as long as
 * the watched property was not updated.
 */
export const usePreviousStringArray = (
    value: string[],
    initialPreviousValue: string[] = [],
    config?: Configuration<string[]>,
) => usePrevious<string[]>(value, initialPreviousValue, config);

/**
 * Predefined hook to store and retrieve the previous value of the given reference to a number.
 *
 * @param value Reference to a number that will be watched so that the previous value will always be updated
 * with the old value when the current value changes.
 * @param initialPreviousValue The initial value this hook should return as the default previous value as long as
 * the watched property was not updated.
 */
export const usePreviousNumber = (value: number, initialPreviousValue = 0) =>
    usePrevious<number>(value, initialPreviousValue);

/**
 * Predefined hook to store and retrieve the previous value of the given reference to a number array.
 *
 * @param value Reference to a number array that will be watched so that the previous value will always be updated
 * with the old value when the current value changes.
 * @param initialPreviousValue The initial value this hook should return as the default previous value as long as
 * the watched property was not updated.
 */
export const usePreviousNumberArray = (
    value: number[],
    initialPreviousValue: number[] = [],
    config?: Configuration<number[]>,
) => usePrevious<number[]>(value, initialPreviousValue, config);

/**
 * Predefined hook to store and retrieve the previous value of the given reference to a boolean.
 *
 * @param value Reference to a boolean that will be watched so that the previous value will always be updated
 * with the old value when the current value changes.
 * @param initialPreviousValue The initial value this hook should return as the default previous value as long as
 * the watched property was not updated.
 */
export const usePreviousBoolean = (value: boolean, initialPreviousValue = false) =>
    usePrevious<boolean>(value, initialPreviousValue);

/**
 * Predefined hook to store and retrieve the previous value of the given reference to a boolean array.
 *
 * @param value Reference to a boolean array that will be watched so that the previous value will always be updated
 * with the old value when the current value changes.
 * @param initialPreviousValue The initial value this hook should return as the default previous value as long as
 * the watched property was not updated.
 */
export const usePreviousBooleanArray = (
    value: boolean[],
    initialPreviousValue: boolean[] = [],
    config?: Configuration<boolean[]>,
) => usePrevious<boolean[]>(value, initialPreviousValue, config);

/**
 * Function to check reference equality of a and b
 * @param a Leftside input
 * @param b Rightside input
 */
const refEquality = (a: unknown, b: unknown) => a === b;

/**
 * Generic hook to store and retrieve the previous value of the given reference.
 *
 * @param value Reference to a value / property that will be watched so that the previous value will always be updated
 * with the old value when the current value changes.
 * @param initialPreviousValue The initial value this hook should return as the default previous value as long as
 * the watched property was not updated.
 * @param config Optinal configuration containing a function called equalityFn that will be used to determine equality
 */
const usePrevious = <T>(value: T, initialPreviousValue: T, config?: Configuration<T>) => {
    const { current } = useRef({ target: value, value: initialPreviousValue });

    const fn = config?.equalityFn || refEquality;
    if (!fn(current.target, value)) {
        current.value = current.target;
        current.target = value;
    }

    return current.value;
};

export default usePrevious;
