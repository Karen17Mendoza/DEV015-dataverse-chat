// test/dataFunctions.spec.js
// test/dataFunctions.spec.js

import { filterData, sortData, metricsData } from '../src/lib/dataFunctions.js';
import { filterTestData, sortTestData, metricsTestData } from './data.js';

describe('filterData', () => {
  const data = filterTestData;

  test('should return all data if value is "all" for gender', () => {
    const result = filterData(data, 'gender', 'all');
    expect(result).toEqual(data);
  });
})

describe('sortData', () => {
  const data = sortTestData;

  test('should sort data by name in ascending order', () => {
    const result = sortData(data, 'name', 'asc');
    expect(result).toEqual(data);
  });
});

describe('metricsData', () => {
  const data = metricsTestData;

  test('should return top 3 objects by percentageOfUsers', () => {
    const result = metricsData(data);
    expect(result).toEqual([
      { facts: { percentageOfUsers: "45.5" } },
      { facts: { percentageOfUsers: "55.5" } },
      { facts: { percentageOfUsers: "65.5" } },

    ]);
  });
})