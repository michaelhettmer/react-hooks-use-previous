import { renderHook, act } from '@testing-library/react-hooks';
import usePrevious, {
    usePreviousNumber,
    usePreviousNumberArray,
    usePreviousBoolean,
    usePreviousBooleanArray,
    usePreviousString,
    usePreviousStringArray,
} from './usePrevious';
import { useState } from 'react';

describe('test react-hooks-use-previous', () => {
    it('should call usePrevious successfully', () => {
        const value = 0;
        const { result } = renderHook(() => usePrevious<number>(value, 0));
        expect(result.current).toBe(0);
    });

    it('should call usePreviousString successfully and assign the correct default value', () => {
        const value = '';
        const { result } = renderHook(() => usePreviousString(value));
        expect(result.current).toBe('');
    });

    it('should call usePreviousStringArray successfully and assign the correct default value', () => {
        const value = [''];
        const { result } = renderHook(() => usePreviousStringArray(value));
        expect(result.current).toEqual([]);
    });

    it('should call usePreviousNumber successfully and assign the correct default value', () => {
        const value = 0;
        const { result } = renderHook(() => usePreviousNumber(value));
        expect(result.current).toBe(0);
    });

    it('should call usePreviousNumberArray successfully and assign the correct default value', () => {
        const value = [0];
        const { result } = renderHook(() => usePreviousNumberArray(value));
        expect(result.current).toEqual([]);
    });

    it('should call usePreviousBoolean successfully and assign the correct default value', () => {
        const value = false;
        const { result } = renderHook(() => usePreviousBoolean(value));
        expect(result.current).toBe(false);
    });

    it('should call usePreviousBooleanArray successfully and assign the correct default value', () => {
        const value = [false];
        const { result } = renderHook(() => usePreviousBooleanArray(value));
        expect(result.current).toEqual([]);
    });

    it('should return the previous value when updating the associated state variable', () => {
        const useTestHook = () => {
            const [value, setValue] = useState(77);
            const prevValue = usePrevious<number>(value, 0);
            return { value, setValue, prevValue };
        };

        const { result } = renderHook(() => useTestHook());

        expect(result.current.prevValue).toBe(0);
        expect(result.current.value).toBe(77);

        act(() => {
            result.current.setValue(33);
        });

        expect(result.current.prevValue).toBe(77);
        expect(result.current.value).toBe(33);
    });

    it('should not update on rerender if prop is unchanged', () => {
        const { result, rerender } = renderHook(() => usePrevious('current', 'initial'));

        rerender();

        expect(result.current).not.toBe('current');
    });
});
