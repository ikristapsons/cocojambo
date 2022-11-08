import { getRectangleArea, getRectangleInfo, getRectanglePerimeter } from '../js/rectangle';
import { expect, test } from '@jest/globals';

test('should output rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(15, 5);
    expect(perimeter).toBe(40);
});

test('should output rectangle area', () => {
    const area = getRectangleArea(15, 5);
    expect(area).toBe(75);
});

// Mock to see what the console outputs in rectangleInfo + 
jest.spyOn(console, 'log');

test("getRectangleInfo outputs info correctly", () => {
    getRectangleInfo(15,5);
    expect(console.log.mock.calls[0][0]).toBe("The perimeter of a rectangle is 40 and the area is 75");
});

// Clearing mocks
afterEach(() => {
    jest.clearAllMocks();
});