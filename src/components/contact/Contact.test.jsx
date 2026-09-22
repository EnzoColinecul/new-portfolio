import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import emailjs from '@emailjs/browser';
import Contact from './Contact';

jest.mock('@emailjs/browser', () => ({ sendForm: jest.fn() }));
jest.mock('react-hot-toast', () => ({
  loading: jest.fn(),
  success: jest.fn(),
  error: jest.fn(),
}));

describe('Contact', () => {
  beforeEach(() => jest.clearAllMocks());

  it('exposes labelled controls and a pending state', async () => {
    emailjs.sendForm.mockImplementation(() => new Promise(() => {}));
    render(<Contact />);

    expect(screen.getByLabelText('Full Name')).toHaveAttribute('autocomplete', 'name');
    expect(screen.getByLabelText('Email Address')).toHaveAttribute('autocomplete', 'email');
    expect(screen.getByLabelText('Email Address')).toHaveAttribute('spellcheck', 'false');
    expect(screen.getByLabelText('Message')).toHaveAttribute('autocomplete', 'off');

    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }).closest('form'));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Sending…' })).toBeDisabled());
    expect(screen.getByRole('status')).toHaveTextContent('Sending…');
  });

  it('reports success and restores the submit button', async () => {
    emailjs.sendForm.mockResolvedValue({});
    render(<Contact />);

    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }).closest('form'));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Send Message' })).not.toBeDisabled());
    expect(screen.getByRole('status')).toHaveTextContent('Email sent successfully.');
  });

  it('reports a recoverable failure and restores the submit button', async () => {
    emailjs.sendForm.mockRejectedValue(new Error('network failure'));
    render(<Contact />);

    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }).closest('form'));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Send Message' })).not.toBeDisabled());
    expect(screen.getByRole('status')).toHaveTextContent('Message not sent. Please try again');
  });
});
