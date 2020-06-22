import { max_number } from './index';

describe('max_number', () => {
    it('returns 0', () => {
        expect(max_number([])).toEqual(0);
    });
    describe('given an array of number', () => {
        expect(max_number([1, 2, 3])).toEqual(3);
    });
});
