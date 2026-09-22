/* eslint-disable react/prop-types */
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Portfolio from './Portfolio';

jest.mock('react-slick/lib/slider', () => {
  const React = jest.requireActual('react');
  return React.forwardRef(({
    children, afterChange, onKeyDown, className,
  }, ref) => {
    const [index, setIndex] = React.useState(0);
    React.useImperativeHandle(ref, () => ({
      slickPrev: () => {
        const next = Math.max(0, index - 1);
        setIndex(next);
        afterChange(next);
      },
      slickNext: () => {
        const next = Math.min(6, index + 1);
        setIndex(next);
        afterChange(next);
      },
      slickGoTo: (next) => {
        setIndex(next);
        afterChange(next);
      },
    }), [afterChange, index]);

    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    return <div role="application" className={className} onKeyDown={onKeyDown}>{children}</div>;
  });
});

describe('Portfolio carousel', () => {
  it('provides labelled controls, status, keyboard navigation, and hidden-slide tab order', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>,
    );

    const carousel = screen.getByRole('region', { name: 'Project portfolio' });
    expect(carousel).toHaveAttribute('aria-roledescription', 'carousel');
    expect(screen.getByRole('button', { name: 'Previous projects' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next projects' })).not.toBeDisabled();
    expect(screen.getByText('Showing Projects 1–1 of 7')).toBeInTheDocument();

    const projectLinks = screen.getAllByRole('link', { name: /View in Github|Case Study|Live Demo|View Online/ });
    expect(projectLinks[0]).toHaveAttribute('tabindex', '0');
    expect(projectLinks[1]).toHaveAttribute('tabindex', '-1');

    fireEvent.keyDown(document.querySelector('.portfolio__container'), { key: 'ArrowRight' });
    expect(screen.getByText('Showing Projects 2–2 of 7')).toBeInTheDocument();
  });
});
