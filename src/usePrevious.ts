import { useRef, useEffect } from 'react';

export const usePreviousNumber = (value: number, initialPreviousValue = 0) =>
    usePrevious<number>(value, initialPreviousValue);

export const usePreviousNumberArray = (value: number[], initialPreviousValue: number[] = []) =>
    usePrevious<number[]>(value, initialPreviousValue);

export const usePreviousBoolean = (value: boolean, initialPreviousValue = false) =>
    usePrevious<boolean>(value, initialPreviousValue);

export const usePreviousBooleanArray = (value: boolean[], initialPreviousValue: boolean[] = []) =>
    usePrevious<boolean[]>(value, initialPreviousValue);

const usePrevious = <T>(value: T, initialPreviousValue: T) => {
    const ref = useRef<T>(initialPreviousValue);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};

export default usePrevious;
