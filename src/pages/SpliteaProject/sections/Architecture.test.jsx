import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Architecture from './Architecture';

function LocationProbe() {
  const location = useLocation();
  return <output data-testid="location">{location.search}</output>;
}

function renderArchitecture(initialEntry = '/splitea-project') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Architecture />
      <LocationProbe />
    </MemoryRouter>,
  );
}

describe('Architecture dialog', () => {
  it('opens from a node, updates the URL, and restores focus on close', () => {
    renderArchitecture();
    const node = screen.getByRole('button', { name: /Mobile client/i });

    fireEvent.click(node);
    expect(screen.getByRole('dialog')).toHaveAttribute('open');
    expect(screen.getByTestId('location')).toHaveTextContent('?arch=mobile-client');
    expect(screen.getByRole('dialog')).toHaveAccessibleName('Mobile client');

    fireEvent.click(screen.getByRole('button', { name: 'Close architecture details' }));
    expect(screen.getByTestId('location')).toHaveTextContent('');
    expect(node).toHaveFocus();
  });

  it('opens valid deep links and removes invalid values', () => {
    const firstRender = renderArchitecture('/splitea-project?view=architecture&arch=ecs-fargate');
    expect(screen.getByRole('dialog')).toHaveAttribute('open');
    expect(screen.getByRole('dialog')).toHaveAccessibleName('ECS Fargate');

    firstRender.unmount();
    renderArchitecture('/splitea-project?view=architecture&arch=unknown');
    expect(screen.getByTestId('location')).toHaveTextContent('?view=architecture');
  });
});
