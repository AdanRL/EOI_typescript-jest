import { countChars } from '../src/adapters';
import { removeExclamations } from "../src/exclamator";

jest.mock('../src/adapters', () => ({
    countChars: jest.fn()
}));

describe('removeExclamations', () => {
    test('should return custom object on meet first limit condition', () => {
        jest.fn().mockRestore();
        (countChars as jest.Mock).mockImplementation( () => 50);
        const result = removeExclamations('esto es un test!!!!');
        expect(result).toEqual({
                total: 50,
                value: 'esto es un test!!!!',
                limit: 'It has passed first limit'
        });
        expect(countChars).toHaveBeenCalledTimes(1)
    });

    test('should return custom object on meet second limit condition', () => {
        (countChars as jest.Mock).mockImplementation( () => 100);
        const result2 = removeExclamations('esto es un test!!!!');
        expect(result2).toEqual({
            total: 100,
            value: 'esto es un test!!!!',
            limit: 'It has passed second limit'
        });
        expect(countChars).toHaveBeenCalledTimes(2);
    })
})
