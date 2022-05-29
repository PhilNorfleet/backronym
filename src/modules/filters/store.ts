import create from 'zustand';

/*
  Types
*/

interface State {
  filters: Filter[];
  setFilter: (filter: Filter, index: number) => void;
  addFilter: (filter: Filter) => void;
}

export type Filter = {
  type: string;
  value: string;
}

export type FilterOption = {
  value: string;
  label: string;
}
/*
  Selectors
*/
export const getFilters = (state: State) => state.filters;

const filterOptions: FilterOption[] = [
  {value: 'MEANS', label: 'kinda like'},
  {value: 'CONTAINS', label: 'contains'},
  {value: 'STARTS', label: 'starts with'},
  {value: 'ENDS', label: 'ends with'},
];

export const getOptions = (state: State) => {
  return filterOptions.map(option => {
    return { ...option, disabled: !!state.filters.find(filter => filter.type === option.value)}
  })
}
/*
  Store
*/
const useStore = create<State>(set => ({
  filters: [],
  setFilter: (filter: Filter, index: number) => set((state) => {
    const filters = [...state.filters];
    filters[index] = filter;
    console.log(filters)
    return { filters };
  }),
  addFilter: (filter: Filter) => set((state) => ({ filters: [...state.filters, filter ] })),
}));

export default useStore;