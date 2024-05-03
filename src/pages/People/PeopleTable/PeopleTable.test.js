import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { formatCurrency } from 'utils/formatCurrency';
import { peopleMock } from 'test/mocks/people.mock';
import { waitForDebounce } from 'test/test-utils';

import PeopleTable from './PeopleTable';

const mockPeople = peopleMock;
const onFilterChange = jest.fn();

const renderPeopleTable = async (dataMocked = mockPeople, isLoadingMocked = false) => {
  render(
    <PeopleTable data={dataMocked} isLoading={isLoadingMocked} onFilterChange={onFilterChange} />,
  );
};

describe('PeopleTable', () => {
  it('renders people data in the table', async () => {
    renderPeopleTable();

    const tableCells = await screen.findAllByRole('cell');
    const cellsData = Array.from(tableCells).map((cell) => cell.textContent);

    const expectedData = mockPeople.flatMap((person) => [
      person.name,
      person.jobTitle,
      person.employment,
      person.country,
      formatCurrency(person.salary, person.currency),
    ]);
    expect(cellsData).toEqual(expectedData);
  });
  it('renders loading image when loading data', () => {
    renderPeopleTable(mockPeople, true);

    const loadingLogo = screen.queryByTestId('loading-wrapper');

    expect(loadingLogo).toBeInTheDocument();
  });
  it('removes loading image after on load people', () => {
    renderPeopleTable();

    const loadingLogo = screen.queryByTestId('loading-wrapper');

    expect(loadingLogo).not.toBeInTheDocument();
  });
  it('renders no results text when people data is empty', () => {
    renderPeopleTable([]);

    const noResultsComponent = screen.getByText('No results');

    expect(noResultsComponent).toBeInTheDocument();
  });
  it('calls onFilterChange callback when filter criteria changes', async () => {
    renderPeopleTable();

    const employeeCheckbox = screen.getByTestId('employee');
    fireEvent.click(employeeCheckbox);

    expect(onFilterChange).toHaveBeenCalledTimes(1);
  });
  it('calls onFilterChange with filter criteria when contractor checkbox is clicked', async () => {
    renderPeopleTable();

    const contractorCheckbox = screen.getByTestId('contractor');
    fireEvent.click(contractorCheckbox);

    const queryObject = new URLSearchParams([['employment', 'contractor']]);
    expect(onFilterChange).toHaveBeenCalledWith(queryObject);
    expect(onFilterChange).toHaveBeenCalledTimes(1);
  });
  it('calls onFilterChange with filter criteria when employee checkbox is clicked', async () => {
    renderPeopleTable();

    const employeeCheckbox = screen.getByTestId('employee');
    fireEvent.click(employeeCheckbox);

    const queryObject = new URLSearchParams([['employment', 'employee']]);
    expect(onFilterChange).toHaveBeenCalledWith(queryObject);
    expect(onFilterChange).toHaveBeenCalledTimes(1);
  });
  it('calls onFilterChange with filter criteria when input search changes', async () => {
    renderPeopleTable();
    const searchName = 'Vittoria';
    const nameQueryObj = new URLSearchParams([['name_like', searchName]]);

    const searchField = screen.getByTestId('search-field');
    userEvent.type(searchField, searchName);

    waitForDebounce(() => {
      expect(onFilterChange).toHaveBeenCalledWith(nameQueryObj);
      expect(onFilterChange).toHaveBeenCalledTimes(2);
    });
  });
  it('calls onFilterChange with filter criteria when input search changes to empty', async () => {
    renderPeopleTable();
    const searchName = 'Vittoria';
    const nameQueryObj = new URLSearchParams([['name_like', searchName]]);

    const searchField = screen.getByTestId('search-field');
    userEvent.type(searchField, searchName);

    waitForDebounce(() => expect(onFilterChange).toHaveBeenCalledWith(nameQueryObj));

    userEvent.type(searchField, '');

    waitForDebounce(() => {
      expect(onFilterChange).toHaveBeenCalledWith('');
      expect(onFilterChange).toHaveBeenCalledTimes(3);
    });
  });
});
