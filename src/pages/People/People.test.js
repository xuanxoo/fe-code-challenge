import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

import { customRender as render } from 'test/test-utils';
import { peopleMock } from 'test/mocks/people.mock';

import { getPeople as getPeopleMocked } from 'services/people';
import { useLoadingCallback as useLoadingCallbackMockedFn } from 'hooks/useLoadingCallback';

import People from './People';

const mockedPeople = peopleMock;

jest.mock('services/people', () => ({
  getPeople: jest.fn(),
}));
const getPeople = getPeopleMocked;

jest.mock('hooks/useLoadingCallback', () => ({ useLoadingCallback: jest.fn() }));
const useLoadingCallback = useLoadingCallbackMockedFn;

describe('People Page', () => {
  beforeEach(() => {
    getPeople.mockReturnValue(mockedPeople);
    useLoadingCallback.mockReturnValue([getPeople, false]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title', async () => {
    render(<People />);

    const pageTitle = screen.getByText('People');

    await waitFor(() => expect(pageTitle).toBeInTheDocument());
  });
  it('renders the people table', async () => {
    render(<People />);

    const peopleTable = screen.getByRole('table');

    await waitFor(() => expect(peopleTable).toBeInTheDocument());
  });
  it('renders the members counter', async () => {
    render(<People />);

    const counter = await screen.findByTestId('counter');

    await waitFor(() => expect(counter).toBeInTheDocument());
  });
  it('not renders members counter when people data is loading', async () => {
    useLoadingCallback.mockReturnValue([getPeople, true]);
    render(<People />);

    const counter = screen.queryByTestId('counter');

    await waitFor(() => expect(counter).not.toBeInTheDocument());
  });
  it('renders members counter in singular when total people is 1', async () => {
    getPeople.mockReturnValue(mockedPeople.slice(0, 1));

    render(<People />);

    const counter = await screen.findByTestId('counter');

    expect(counter).toBeInTheDocument();
    expect(counter.innerHTML).toBe('1 member');
  });
  it('renders members counter in plural when total people is bigger than 1', async () => {
    getPeople.mockReturnValue(mockedPeople);
    render(<People />);

    const counter = await screen.findByTestId('counter');

    expect(counter).toBeInTheDocument();
    expect(counter.innerHTML).toBe('2 members');
  });
  it('renders members counter in plural when total people is 0', async () => {
    getPeople.mockReturnValue([]);
    render(<People />);

    const counter = await screen.findByTestId('counter');

    expect(counter).toBeInTheDocument();
    expect(counter.innerHTML).toBe('0 members');
  });
  it('not renders members when an error happens on fetching people', async () => {
    useLoadingCallback.mockReturnValue([getPeople, false, new Error('Error')]);
    render(<People />);

    const counter = screen.queryByTestId('counter');

    await waitFor(() => expect(counter).not.toBeInTheDocument());
  });
  it('calls getPeople when handleFilterChange is triggered', async () => {
    render(<People />);

    const contractorCheckbox = screen.getByTestId('contractor');
    fireEvent.click(contractorCheckbox);

    await waitFor(() => expect(getPeople).toHaveBeenCalledTimes(2));
  });
});
