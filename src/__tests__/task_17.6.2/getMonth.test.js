import { getMonth } from "../../task_17.6.2/getMonth.js";

describe('test for getMonth function', () => {
  it('should return the correct month name', () => {
    expect(getMonth(1)).toBe('Январь');
    expect(getMonth(3)).toBe('Март');
    expect(getMonth(11)).toBe('Ноябрь');
  });

  it('should throw an error if the month number is less 1 and more 12', () => {
    expect(() => {
      getMonth(0);
    }).toThrow('Enter a number from 1 to 12!');
    expect(() => {
      getMonth(-5);
    }).toThrow('Enter a number from 1 to 12!');
    expect(() => {
      getMonth(13);
    }).toThrow('Enter a number from 1 to 12!');
  });

  it('should throw an error if the month number is not a number', () => {
    expect(() => {
      getMonth(NaN);
    }).toThrow('Enter a number from 1 to 12!');
    expect(() => {
      getMonth(null);
    }).toThrow('Enter a number from 1 to 12!');
    expect(() => {
      getMonth('1');
    }).toThrow('Enter a number from 1 to 12!');
  });
})
