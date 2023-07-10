import { LoadingOverlayProvider, useLoadingOverlayContext } from '@components/loading/loading-overlay/context';
import { render } from '@testing-library/react';

describe('LoadingOverlayContext', () => {
  it('is defined', () => {
    expect(useLoadingOverlayContext).toBeDefined();
    expect(LoadingOverlayProvider).toBeDefined();
  });
  it('should render without crashing', () => {
    const { container } = render(<LoadingOverlayProvider ><div/></LoadingOverlayProvider>);
    expect(container).toMatchSnapshot();

  });
});

describe('useLoadingOverlayContext', () => {
  it('gives error if used outside of LoadingOverlayProvider', () => {
    expect(() => {
      useLoadingOverlayContext();
    }).toThrow();
  });
});
