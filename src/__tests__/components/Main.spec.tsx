import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Main from '../../components/Main';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render colors correctly', () => {
    const { container } = render(<Main />);

    waitFor(() => {
      expect(container.firstChild).toHaveStyle({
        'background-color': '#06092b',
      });
    });
  });
});
