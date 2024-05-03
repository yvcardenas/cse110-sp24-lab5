// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber()
test ('valid phone number', () =>{
  expect(isPhoneNumber('(760)717-8696)')).toBe(true)
});
test ('valid phone number', () =>{
  expect(isPhoneNumber('(789)123-1223')).toBe(true)
});
test ('invalid phone number', () =>{
  expect(isPhoneNumber('1231231231')).toBe(false)
});
test ('invalid phone number', () =>{
  expect(isPhoneNumber('(123)1231234')).toBe(false)
});

//isEmail()
test ('valid email', () =>{
  expect(isEmail('ygcrds@gmail.com')).toBe(true)
});
test ('valid email', () =>{
  expect(isEmail('yvcardenas@ucsd.edu')).toBe(true)
});
test ('invalid email', () =>{
  expect(isEmail('@gmail.com')).toBe(false)
});
test ('invalid email', () =>{
  expect(isEmail('hi@gmailcom')).toBe(false)
});

//isStrongPassword()
//First cahr should be a letter
//Atleast 4 characters
//No more than 15 characters
//Only letters, numbers, and underscore
test ('Strong Password', () =>{
  expect(isStrongPassword('hello1_')).toBe(true)
});
test ('Strong Password', () =>{
  expect(isStrongPassword('Whathi')).toBe(true)
});
test ('Not a Strong Password', () =>{
  expect(isStrongPassword('123hi')).toBe(false)
});
test ('Not a Strong Password', () =>{
  expect(isStrongPassword('hi.89')).toBe(false)
});

//isDate()
// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test ('Valid Date', () =>{
  expect(isDate('11/04/2002')).toBe(true)
});
test ('Valid Date', () =>{
  expect(isDate('1/4/2343')).toBe(true)
});
test ('Invalid Date', () =>{
  expect(isDate('12/12/12')).toBe(false)
});
test ('Invalid Date', () =>{
  expect(isDate('12-12-1232')).toBe(false)
});

//isHexColor()
// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test ('Valid Hex Color', () =>{
  expect(isHexColor('6BA547')).toBe(true)
});
test ('Valid Hex Color', () =>{
  expect(isHexColor('0F0')).toBe(true)
});
test ('Invalid Hex Color', () =>{
  expect(isHexColor('23')).toBe(false)
});
test ('Invalid Hex Color', () =>{
  expect(isHexColor('23123')).toBe(false)
});
