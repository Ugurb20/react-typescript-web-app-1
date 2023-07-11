import { PublicRoute } from '@components/auth/public-route';
import { render } from '@testing-library/react';
import { Provider } from 'inversify-react';
import { Container } from 'inversify';
import { MemoryRouter } from 'react-router';
import { HttpClient } from '@common/http-client';
import { RouteNames } from '@quicker/route-names';
import { getTestContainer } from '@common/inversion-container-test';
import { HttpClientSymbol } from '@domain/types/symbols';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe('PublicRoute', () => {
  let container: Container;
  const renderComponent = () => {
    return render(
      <Provider container={container}>
        <MemoryRouter>
          <PublicRoute>
            <div />
          </PublicRoute>
        </MemoryRouter>
      </Provider>
    );
  };
  beforeAll(() => {
    container = getTestContainer();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render', () => {
    const wrapper = renderComponent();
    expect(wrapper).toBeTruthy();
  });
  it('should redirect to home if token is not expired', () => {
    const client = container.get<HttpClient>(HttpClientSymbol);
    client.isTokenExpired = jest.fn().mockReturnValue(false);
    const wrapper = renderComponent();
    expect(mockedUsedNavigate).toBeCalledWith(RouteNames.HOME);
  });
  it('should not redirect to home if token is expired', () => {
    const client = container.get<HttpClient>(HttpClientSymbol);
    client.isTokenExpired = jest.fn().mockReturnValue(true);
    const wrapper = renderComponent();
    expect(mockedUsedNavigate).not.toBeCalled();
  });
});
