import styled from "styled-components";
import type { FilterOption } from "./types";

const Option = styled.option``;
const FilterOptions = ({ options }: { options: FilterOption[]}) => {
  return (
    <>
      {options.map(({ value, label }) => <Option key={value} value={value} >{label}</Option> )}
    </>
  )
}

export default FilterOptions;