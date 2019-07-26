export const initialState = {
  data: [],
  loaded: false,
  loading: false,
  error: false
};

export const objectInitialState = {
  data: {},
  loaded: false,
  loading: false,
  error: false
};

export const arrayInitialState = {
  data: [],
  loaded: false,
  loading: false,
  error: false
};

export const initialStatePagination = {
  ...initialState,
  pagination: {
    total: 0,
    totalPages: 0,
    page: 0,
    perPage: 0,
    nextPage: 0,
    prevPage: 0,
    offset: 0
  }
};
