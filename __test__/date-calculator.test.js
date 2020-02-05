import { Date } from './../src/date-calculator.js'
import { exportAllDeclaration } from '@babel/types';

describe('Date', () => {
  
  test('should check inputted date is real date', () => {
    var date = new Date(30, 2, 2020);
    expect(date.checkExistDate).toEqual(true);
  });

});