import { renderHook, act } from '@testing-library/react-hooks';
import { useBranches } from '@domain/hooks/branch/use-branches';
import { useInjection } from 'inversify-react';

jest.mock('inversify-react', () => ({
  useInjection: jest.fn(),
}));

describe('useBranches', () => {
  it('should be defined', () => {
    expect(useBranches).toBeDefined();
  });

  it('When rendered inside React component, it calls BranchGetAllUseCase once.', () => {
    // Mock the useInjection hook
    const mockGetAllBranches = { call: jest.fn().mockResolvedValue([]) };
    const mockUpdateBranch = { call: jest.fn().mockResolvedValue([]) };

    (useInjection as jest.MockedFunction<typeof useInjection>)
      .mockImplementationOnce(() => mockGetAllBranches)
      .mockImplementationOnce(() => mockUpdateBranch);

    const { result } = renderHook(() => useBranches());
    expect(mockGetAllBranches.call).toHaveBeenCalled();
  });
  it('When setBranch is called, it calls BranchUpdateUseCase once.', () => {
    // Mock the useInjection hook
    const mockGetAllBranches = { call: jest.fn().mockResolvedValue([]) };
    const mockUpdateBranch = { call: jest.fn().mockResolvedValue([]) };

    (useInjection as jest.MockedFunction<typeof useInjection>)
      .mockImplementationOnce(() => mockGetAllBranches)
      .mockImplementationOnce(() => mockUpdateBranch);

    const { result } = renderHook(() => useBranches());
    expect(result.current.branches).toEqual([]);

    act(() => {
      result.current.setBranch({ id: '1', name: 'Branch 1' } as any);
    });

    expect(mockUpdateBranch.call).toHaveBeenCalled();
  });
});
