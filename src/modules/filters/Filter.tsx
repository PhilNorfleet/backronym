import React, { ChangeEvent, ReactEventHandler, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import FilterOptions from "./FilterOptions";
import useStore, { getOptionsForFilter } from './store';
import type { Filter, FilterType } from "./types";
const FilterContainer = styled.form``;

type FilterProps = {
  filter: Filter;
}

const Filter = ({ filter }: FilterProps) => {
  const { type, value } = filter;
  const [inputValue, setInputValue] = useState('');
  const setFilter = useStore(state => state.setFilter);
  const options = getOptionsForFilter(filter);
  const handleTypeChange = useCallback(
    (type: FilterType) => setFilter({ type, value }),
    []
  )
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    setFilter({type, value: inputValue})
    e.preventDefault()
  }
  return (
    <FilterContainer onSubmit={handleSubmit} >
        {options.length === 1 && <> {options[0].label}</>}
        {options.length > 1 && (
          <select
            value={type}
            onChange={(e) => handleTypeChange(e.target.value as FilterType)}
          >
            <FilterOptions options={options} />
          </select>
        )}
        <input type="text" value={inputValue} onChange={handleValueChange} onBlur={handleSubmit}/>
    </FilterContainer>

  )
}

export default Filter