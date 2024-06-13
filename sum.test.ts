import {describe, expect, test} from '@jest/globals';
const {sum, fetchData} = require('./sum');

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    test('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});
    });

    test('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
            }
        }
    });

    test('zero', () => {
        const z = 0;
        const n = null;
        expect(z).not.toBeNull();
        expect(n).toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });

    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(45);
      
        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
      });

      test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        // expect(value).toBe(0.3);           // This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
      });

      test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
      });
      
      test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
      });

      const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
      ];
      const lst = {
        name:'milk',
        ounce:15
      }
      
      test('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
        expect(lst.name).toBe('milk')
        expect(lst.ounce).toBe(15)
        expect(Object.is(lst.name, 'milk')).toBe(true)
        expect(Object.is(lst.name, 'milok')).toBe(false)
        expect(lst.ounce).toBe(15)
      });

      test('the data is peanut butter', () => {
        // return fetchData().then(data => {
        //   expect(data).toBe('peanut butter');
        // });
        expect(fetchData()).toBe('peanut butter');
        expect(fetchData()).not.toBe('peanfut butter');
      });
});

