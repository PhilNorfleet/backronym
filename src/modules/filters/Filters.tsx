import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import useStore from './store';

const FilterPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Filters: React.FC = () => {
  const meaningFilter = useStore(state => state.meaningFilter);
  const topicsFilter = useStore(state => state.topicsFilter);
  const spellingFilter = useStore(state => state.spellingFilter);
  return (
    <FilterPanel>
      find words that
      <Filter filter={meaningFilter} />
      <Filter filter={topicsFilter} />
      <Filter filter={spellingFilter} />
    </FilterPanel>
  )
}

export default Filters