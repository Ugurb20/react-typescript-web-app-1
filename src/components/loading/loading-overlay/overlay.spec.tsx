import { render } from '@testing-library/react';
import { LoadingOverlay } from '@components/loading/loading-overlay/overlay';

describe('LoadingOverlay', () => {
  it('should render', () => {
    const { container, getByTestId } = render(<LoadingOverlay show={true} />);
    expect(container).toMatchSnapshot();
    const loadingOverlay = getByTestId('loading-overlay');
    expect(loadingOverlay).toBeDefined();
  });
  it('should not render and return null.', () => {
    const { container } = render(<LoadingOverlay show={false} />);
    expect(container).toMatchSnapshot();
  });
});
