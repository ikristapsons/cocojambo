import { getRectangleArea, getRectangleInfo, getRectanglePerimeter } from '../js/rectangle';
import {expect, jest, test} from '@jest/globals';
import { getLog } from 'jest-console';

test('should output rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(15, 5);
    expect(perimeter).toBe(40);
});

test('should output rectangle area', () => {
    const area = getRectangleArea(15, 5);
    expect(area).toBe(75);
});

test('should provide info about rectangle', () => {
    const info = getRectangleInfo(15, 5);
    expect(getLog(info).log).toBe("The perimeter of a rectangle is 40 and the area is 75");
});
