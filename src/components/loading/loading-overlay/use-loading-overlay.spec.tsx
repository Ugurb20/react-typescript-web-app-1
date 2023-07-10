import { useLoadingOverlay } from '@components/loading/loading-overlay/use-loading-overlay';
import { fireEvent, render } from '@testing-library/react';
import { LoadingOverlayProvider } from '@components/loading/loading-overlay/context';
import { act } from 'react-dom/test-utils';

const MockComponent = () => {
  const [loading, setLoading] = useLoadingOverlay();

  const toggleLoading = () => {
    setLoading(!loading);
  }

  return (
    <div>
      {loading ?  <div data-testid={"loading-true"} onClick={toggleLoading}>loading</div> : <div data-testid={"loading-false"} onClick={toggleLoading}>not loading</div>}
    </div>
  );
}


describe('useLoadingOverlay', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <LoadingOverlayProvider><MockComponent /></LoadingOverlayProvider>);
  });
  it('should be initiated as false.',() => {
    const { getByTestId } = wrapper;
    const loadingFalse = getByTestId('loading-false');
    expect(loadingFalse).toBeDefined();
  });
  it('should toggle loading to true and then to false.',() => {
    const { getByTestId } = wrapper;
    const loadingFalse = getByTestId('loading-false');
    expect(loadingFalse).toBeDefined();
    act(()=>fireEvent.click(loadingFalse));
    const loadingTrue = getByTestId('loading-true');
    expect(loadingTrue).toBeDefined();
    act(()=>fireEvent.click(loadingTrue));
    const loadingFalse2 = getByTestId('loading-false');
    expect(loadingFalse2).toBeDefined();
  });

});
