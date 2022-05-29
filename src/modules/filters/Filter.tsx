import React, { useCallback } from "react";
import styled from "styled-components";
import FilterOptions from "./FilterOptions";
import useStore, { Filter, getOptions } from './store';
const FilterContainer = styled.div``;

type FilterProps = {
  filter: Filter;
  index: number;
  disabled?: boolean;
}
const Filter = ({ filter, index, disabled }: FilterProps) => {
  const { type, value } = filter;
  const setFilter = useStore(state => state.setFilter);
  const options = useStore(getOptions);
  const handleChange = useCallback(
    ({ target: { value: newType } }: React.ChangeEvent<HTMLSelectElement>) => setFilter({ type: newType, value }, index),
    []
  )
  console.log('type', type)
  return (
    <FilterContainer>
        <select
          value={type}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
        >
          <FilterOptions options={options}/>
        </select>
        <input type="text" value={value} onChange={({ target: { value } }) => setFilter({ type, value }, index)}/>
    </FilterContainer>

  )
}

export default Filter