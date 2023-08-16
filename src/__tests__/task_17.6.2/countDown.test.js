import { countDown } from "../../task_17.6.2/countDown.js";

describe('test for countDown function', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('should log numbers in descending order for n >= 1', () => {
    countDown(3);
    expect(console.log.mock.calls.length).toBe(3);
    expect(console.log.mock.calls[0][0]).toBe(3);
    expect(console.log.mock.calls[1][0]).toBe(2);
    expect(console.log.mock.calls[2][0]).toBe(1);
  });

  it('should throw an error if n < 1', () => {
    expect(() => {
      countDown('-5');
    }).toThrow('Number must be positive!');
  });

  it('should throw an error if entered not a number', () => {
    expect(() => {
      countDown('100');
    }).toThrow('Entered not a number!');
    expect(() => {
      countDown(NaN);
    }).toThrow('Entered not a number!');
  });
})
