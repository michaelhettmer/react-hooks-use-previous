import usePrevious from './usePrevious';

describe('test react-hooks-use-previous', () => {
    it('should call usePrevious successfully', () => {
        const result = usePrevious();
        expect(result).toBeUndefined();
    });
});
