export interface PaginationModel<T>{
  data: T[],
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  },
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string,
    per_page: number,
    to: number,
    total: number
  }
}
