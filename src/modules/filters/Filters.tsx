import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import useStore, { getFilters } from './store';

const FilterPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const AddFilter = styled.button`

`;
const emptyFilter = { type: 'EMPTY', value: '' };
export const Filters: React.FC = () => {
  const filters = useStore(getFilters)
  const addFilter = useStore((state) => state.addFilter)
  console.log('filters', filters)
  return (
    <FilterPanel>
      { filters.length ? 
        filters.map((filter, index) => <Filter key={filter.type} filter={filter} index={index} disabled={index < filters.length - 1}/>) :
        <Filter key={"first"} filter={emptyFilter} index={0} />
      }
      <AddFilter onClick={() => addFilter(emptyFilter)}>Add Filter</AddFilter>
    </FilterPanel>
  )
}

export default Filters