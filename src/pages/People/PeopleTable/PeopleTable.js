import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import LoadingLogo from 'components/LoadingLogo';
import Checkbox from 'components/Checkbox';
import SearchField from 'components/SearchField';

import { formatCurrency } from 'utils/formatCurrency';

import {
  TableContentWrapper,
  TableHeader,
  TableWrapper,
  TableSearch,
  TableFilters,
} from './PeopleTable.styled';

export default function PeopleTable({ data, isLoading, onFilterChange }) {
  const [filterCriteria, setFilterCriteria] = useState();

  useEffect(() => {
    filterCriteria && onFilterChange(filterCriteria);
  }, [filterCriteria]);

  const onEmploymentSelected = (e) => {
    const key = 'employment';
    const value = e.target.id;

    setFilterCriteria((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.has(key, value) ? newParams.delete(key, value) : newParams.append(key, value);
      return newParams;
    });
  };

  const onSearchChange = (term) => {
    const key = 'name_like';
    const value = term;

    setFilterCriteria((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.has(key) ? newParams.set(key, value) : newParams.append(key, value);
      return newParams;
    });
  };

  const onClearSearchResults = () => {
    const key = 'name_like';

    if (filterCriteria && filterCriteria.has(key)) {
      setFilterCriteria((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.delete(key);
        return newParams;
      });
    }
  };

  const PersonRow = memo(({ person }) => {
    return (
      <TableRow key={person.id}>
        <TableCell style={{ fontWeight: 'bold' }}>{person.name}</TableCell>
        <TableCell>{person.jobTitle}</TableCell>
        <TableCell style={{ textTransform: 'capitalize' }}>{person.employment}</TableCell>
        <TableCell>{person.country}</TableCell>
        <TableCell align="right">{formatCurrency(person.salary, person.currency)}</TableCell>
      </TableRow>
    );
  });

  const NoResultsRow = () => {
    return (
      <TableRow>
        <TableCell colSpan="5">
          <TableContentWrapper>No results</TableContentWrapper>
        </TableCell>
      </TableRow>
    );
  };

  const LoadingRow = () => {
    return (
      <TableRow>
        <TableCell colSpan="5">
          <TableContentWrapper>
            <LoadingLogo data-testid="loading-wrapper" />
          </TableContentWrapper>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <TableWrapper>
      <TableHeader>
        <TableSearch>
          <SearchField
            data-testid="search-field"
            placeholder="Search people..."
            onSearch={onSearchChange}
            onClearResults={onClearSearchResults}
          />
        </TableSearch>
        <TableFilters>
          <Checkbox data-testid="contractor" id="contractor" onChange={onEmploymentSelected}>
            Contractor
          </Checkbox>
          <Checkbox data-testid="employee" id="employee" onChange={onEmploymentSelected}>
            Employee
          </Checkbox>
        </TableFilters>
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <TableThCell>Name</TableThCell>
            <TableThCell>Role</TableThCell>
            <TableThCell>Type</TableThCell>
            <TableThCell>Country</TableThCell>
            <TableThCell align="right">Salary</TableThCell>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <LoadingRow />
          ) : data && data.length > 0 ? (
            data.map((person) => <PersonRow key={person.id} person={person} />)
          ) : (
            <NoResultsRow />
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
PeopleTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  onFilterChange: PropTypes.func,
};
