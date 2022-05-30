import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { Filter, FilterOption, FilterType } from './types';

/*
* Types
*/

interface MeaningFilter extends Filter {
  type: FilterType.MEANS
}
interface SpellingFilter extends Filter {
  type: FilterType.CONTAINS | FilterType.STARTS | FilterType.ENDS
}
interface TopicsFilter extends Filter {
  type: FilterType.TOPICS
}

interface State {
  meaningFilter: MeaningFilter,
  spellingFilter: SpellingFilter,
  topicsFilter: TopicsFilter,
  setFilter: (filter: Filter) => void,
}

/*
* Store
*/
const useStore = create<State>()(devtools(set => ({
  meaningFilter: { type: FilterType.MEANS, value: ''},
  spellingFilter: { type: FilterType.STARTS, value: ''},
  topicsFilter: { type: FilterType.TOPICS, value: ''},
  setFilter: filter => set((state) => {
    switch (filter.type) {
      case FilterType.MEANS:
        return { meaningFilter: { ...filter, type: filter.type } };
      case FilterType.STARTS:
      case FilterType.ENDS:
      case FilterType.CONTAINS:
        return { spellingFilter: { ...filter, type: filter.type } };
      case FilterType.TOPICS:
        return { topicsFilter:  { ...filter, type: filter.type }};
      default:
        return state
    }
  }),
})));

export default useStore;

/*
* Selectors
*/
const meaningOptions: FilterOption[] = [
  { value: FilterType.MEANS, label: 'have meaning like'},
]
const topicsOptions: FilterOption[] = [
  { value: FilterType.TOPICS, label: 'are topical to'}
]
const spellingOptions: FilterOption[] = [
  { value: FilterType.CONTAINS, label: 'contain'},
  { value: FilterType.STARTS, label: 'start with'},
  { value: FilterType.ENDS, label: 'end with'},
] 
export const getOptionsForFilter = (filter: Filter) => {
  const { type } = filter;
  switch (type) {
    case FilterType.CONTAINS:
    case FilterType.STARTS:
    case FilterType.ENDS:
      return spellingOptions;
    case FilterType.MEANS:
      return meaningOptions;
    case FilterType.TOPICS:
      return topicsOptions;
  }
}

const getSpellingQuery = (spellingFilter: SpellingFilter) => {
  const { type, value } = spellingFilter;
  let query = '';
  switch (type) {
    case FilterType.CONTAINS:
      query = `*${value}*`;
    case FilterType.STARTS:
      query = `${value}*`;
    case FilterType.ENDS:
      query = `*${value}`;
  }
  return query;
}


export const getURL = (state: State) => {
  const url = new URL('https://api.datamuse.com/words');
  const { meaningFilter, spellingFilter, topicsFilter } = state;
  console.log(meaningFilter.value, spellingFilter.value)
  if (meaningFilter.value) {
    url.searchParams.append('ml', meaningFilter.value.split(' ').join(','));
  }
  if (topicsFilter.value) {
    url.searchParams.append('topics', topicsFilter.value.split(' ').join(','));
  }
  if (spellingFilter.value) {
    url.searchParams.append('sp', getSpellingQuery(spellingFilter));
  }
  return url.toString();
}