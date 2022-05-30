export interface Filter {
  type: FilterType;
  value: string;
}

export enum FilterType {
  MEANS = 'MEANS',
  CONTAINS = 'CONTAINS',
  STARTS = 'STARTS',
  ENDS = 'ENDS',
  TOPICS = 'TOPICS'
}

export type FilterOption = {
  value: string;
  label: string;
}