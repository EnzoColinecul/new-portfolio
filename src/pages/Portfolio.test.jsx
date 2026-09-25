import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Portfolio from './Portfolio';

jest.mock('@emailjs/browser', () => ({ sendForm: jest.fn() }));

describe('Portfolio page structure', () => {
  it('uses a main landmark, a single h1 and recruiter-facing sections', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>,
    );

    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: 'Enzo Ariel Colinecul' })).toBeInTheDocument();
    expect(screen.queryAllByRole('heading', { level: 5 })).toHaveLength(0);

    ['About', 'Experience', 'Projects', 'Skills', 'Credentials', 'Contact'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', `#${label.toLowerCase()}`);
    });
  });

  it('lists featured projects with working links', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 3, name: 'Splitea' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Read case study/ })).toHaveAttribute('href', '/splitea-project');
    expect(screen.getByRole('link', { name: /Visit live site/ })).toHaveAttribute('href', 'https://www.crystalcarpetclean.co.nz/');
  });
});
