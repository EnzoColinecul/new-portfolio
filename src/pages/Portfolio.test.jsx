import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Portfolio from './Portfolio';

jest.mock('../components/portfolio/Portfolio', () => function PortfolioSection() {
  return <section aria-label="Portfolio section" />;
});

describe('Portfolio page structure', () => {
  it('uses a main landmark and sequential section headings', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>,
    );

    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
    expect(screen.getByRole('heading', { level: 1, name: 'Enzo Ariel Colinecul' })).toBeInTheDocument();
    expect(screen.queryAllByRole('heading', { level: 5 })).toHaveLength(0);
  });
});
