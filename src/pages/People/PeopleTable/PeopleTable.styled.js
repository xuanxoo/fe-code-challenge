import styled from 'styled-components';

export const TableWrapper = styled.div`
  --spacer: 15px;

  thead > tr {
    th:first-child {
      border-top-left-radius: 0px;
    }

    th:last-child {
      border-top-right-radius: 0px;
    }
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacer) 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--colors-blank);
`;

export const TableSearch = styled.div``;

export const TableFilters = styled.div`
  display: flex;

  & > * {
    margin-left: var(--spacer);
  }
`;

export const TableContentWrapper = styled.div`
  margin: 40px auto;
  width: fit-content;
`;
