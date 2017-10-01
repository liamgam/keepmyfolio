// @flow

import invariant from 'invariant';

import { isNumeric } from './numbers';

// TODO: Reformat this code

/**
 * Reformat a number for give space between thousand
 *
 * @export
 * @param {*} value
 * @returns {string}
 * @example 99 999.9999
 */
export function thousandSpace(value: ?string): string {
  let numStr: string;
  const regex = /(\d+)(\d{3})/;

  invariant(value != null, 'Value is required');

  if (typeof value === 'number') {
    numStr = String(value);
  } else {
    numStr = value;
  }

  return numStr.replace(/^\d+/, w => {
    while (regex.test(w)) {
      w = w.replace(regex, '$1 $2'); // eslint-disable-line
    }

    return w;
  })
}

/**
 * Format a string to an money value
 * with 2 decimals at the end
 *
 * @export
 * @param null value
 * @param {any} string
 * @returns {string}
 * @example 99.99
 */
export function toMoney(value: ?string): string {
  let num: number;

  invariant(value != null, 'Value is required');

  if (isNumeric(value)) {
    num = parseFloat(value);
  } else {
    throw new Error('Cannot parse number');
  }

  return num.toFixed(2);
}

/**
 * Take a value and return it with 2 decimals and separated
 * on each thousand by a space
 *
 * @export
 * @param {*} value
 * @returns {string}
 * @example 99 999.99
 */
export function moneyThousand(value: ?string): string {
  invariant(value != null, 'Value is required');

  const _money = toMoney(value);

  return thousandSpace(_money);
}
