// @ts-ignore

module.exports = {
  useDrag: jest.fn().mockReturnValue([{}, {}, () => {}]),
  useDrop: jest.fn().mockReturnValue([{}, () => {}]),
  // @ts-ignore
  DndProvider: ({ children }) => children,
};
