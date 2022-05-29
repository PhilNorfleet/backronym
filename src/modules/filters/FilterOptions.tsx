import styled from "styled-components";
import useStore, { FilterOption, getOptions } from "./store";

const Option = styled.option``;
const FilterOptions = ({ options }: { options: FilterOption[]}) => {
  console.log('options', options)
  return (
    <>
      {options.map(({ value, label }) => <Option key={value} value={value} >{label}</Option> )}
    </>
  )
}

export default FilterOptions;