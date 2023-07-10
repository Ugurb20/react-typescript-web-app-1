import { LayoutAlgorithm } from '@services/layout-algorithm';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import each from 'jest-each';
import { getTestContainer } from '@common/inversion-container-test';

describe('Layout Algorithm', () => {
  const algorithm = new LayoutAlgorithm();

  let container = getTestContainer();
  it('should be defined', () => {
    const layoutAlgorithm = container.get(LayoutAlgorithm);
    expect(layoutAlgorithm).toBeDefined();
  });

  const testCase1 = [
    {
      id: 1,
      start: new Date('2023-06-07T09:00:00.000Z'),
      end: new Date('2023-06-07T10:00:00.000Z'),
    },
    {
      id: 2,
      start: new Date('2023-06-07T11:00:00.000Z'),
      end: new Date('2023-06-07T12:00:00.000Z'),
    },
  ];
  const result1 = [
    {
      id: 1,
      left: 0,
      right: 1,
    },
    {
      id: 2,
      left: 0,
      right: 1,
    },
  ];

  const testCase2 = [
    {
      id: 1,
      start: new Date('2023-06-07T09:00:00.000Z'),
      end: new Date('2023-06-07T11:00:00.000Z'),
    },
    {
      id: 2,
      start: new Date('2023-06-07T10:00:00.000Z'),
      end: new Date('2023-06-07T12:00:00.000Z'),
    },
  ];
  const result2 = [
    {
      id: 1,
      left: 0,
      right: 0.5,
    },
    {
      id: 2,
      left: 0.5,
      right: 1,
    },
  ];

  each([
    [testCase1, result1],
    [testCase2, result2],
  ]).it('test appointment layout', (test, expected) => {
    const result = algorithm
      .layoutAppointments(test)
      .sort((a, b) => a.appointment.id - b.appointment.id);
    // Only compare left and right.
    result.forEach((r, i) => {
      expect(r.left).toBeCloseTo(expected[i].left, 3);
      expect(r.right).toBeCloseTo(expected[i].right, 3);
    });
  });
});
