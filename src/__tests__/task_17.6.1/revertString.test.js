import { revertString } from "../../task_17.6.1/revertString.js";

describe ('test for revertString function', () => {
  it ('should reverse string', () => {
    expect(revertString('abc')).toBe('cba');
    expect(revertString('hello')).toBe('olleh');
    expect(revertString('привет')).toBe('тевирп');
    expect(revertString('здарова')).toBe('аворадз');
  });

  it ('should throw an error when not a string is entered', () => {
    expect(() => {
      revertString(55);
    }).toThrow('Not a string entered!');
    expect(() => {
      revertString(true);
    }).toThrow('Not a string entered!');
    expect(() => {
      revertString(undefined);
    }).toThrow('Not a string entered!');
    expect(() => {
      revertString(null);
    }).toThrow('Not a string entered!');
  });
})
