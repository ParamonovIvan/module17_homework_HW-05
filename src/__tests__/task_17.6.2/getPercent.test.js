import { getPercents } from "../../task_17.6.2/getPercents.js";

describe('test for getPercent function', () => {
  it('should return percentages of the number', () => {
    expect(getPercents(30, 200)).toBe(60);
    expect(getPercents(80, 120)).toBe(96);
    expect(getPercents(5, 500)).toBe(25);
  });

  it('should throw an error if percent is invalid number parameter', () => {
    expect(() => {
      getPercents('525', 15);
    }).toThrow('Invalid percent parameter');
    expect(() => {
      getPercents(false, 15);
    }).toThrow('Invalid percent parameter');
  });

  it('should throw an error if number is invalid number parameter', () => {
    expect(() => {
      getPercents(30, '240');
    }).toThrow('Invalid number parameter');
    expect(() => {
      getPercents(68, NaN);
    }).toThrow('Invalid number parameter');
  });

  it('should throw an error if percent and number is invalid number parameters', () => {
    expect(() => {
      getPercents(undefined, NaN);
    }).toThrow('Invalid percent and number parameters');
    expect(() => {
      getPercents('10', NaN);
    }).toThrow('Invalid percent and number parameters');
    expect(() => {
      getPercents('50', '290');
    }).toThrow('Invalid percent and number parameters');
  });
})
