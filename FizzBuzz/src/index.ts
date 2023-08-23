#!/usr/bin/env node

enum FIZZBUZZ_VALUES {
  FIZZ = "Fizz",
  BUZZ = "Buzz",
  FIZZBUZZ = "FizzBuzz",
}

type FizzBuzzStringValue =
  | FIZZBUZZ_VALUES.FIZZ
  | FIZZBUZZ_VALUES.BUZZ
  | FIZZBUZZ_VALUES.FIZZBUZZ;

type FizzBuzzResult = number | FizzBuzzStringValue;

const generateFizzBuzz = (num: number): FizzBuzzResult[] => {
  const results: FizzBuzzResult[] = [];

  for (let i = 1; i <= num; i++) {
    results.push(getFizzBuzzValue(i));
  }

  return results;
};

const getFizzBuzzValue = (num: number): FizzBuzzResult => {
  if (num % 5 === 0 && num % 3 === 0) {
    return FIZZBUZZ_VALUES.FIZZBUZZ;
  } else if (num % 3 === 0) {
    return FIZZBUZZ_VALUES.FIZZ;
  } else if (num % 5 === 0) {
    return FIZZBUZZ_VALUES.BUZZ;
  } else {
    return num;
  }
};

const printFizzBuzz = (num: number) => {
  const results: FizzBuzzResult[] = generateFizzBuzz(num);
  console.log(results);
};

printFizzBuzz(100);
