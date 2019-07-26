import { parseInt } from 'lodash';

const readPagination = headers => (
  {
    total: parseInt(headers['x-total']) || 0,
    totalPages: parseInt(headers['x-total-pages']) || 0,
    page: parseInt(headers['x-page']) || 0,
    perPage: parseInt(headers['x-per-page']) || 0,
    nextPage: parseInt(headers['x-next-page']) || 0,
    prevPage: parseInt(headers['x-prev-page']) || 0,
    offset: parseInt(headers['x-offset']) || 0
  }
);

export const onLoad = state => (
  {
    ...state,
    loading: true
  }
);

export const onLoadSuccess = (state, action, updatePagination = false) => {
  const newState = {
    ...state,
    loading: false,
    loaded: true,
    data: action.response.body,
    error: null
  };

  if (updatePagination === true) {
    newState.pagination = readPagination(action.response.headers);
  }

  return newState;
};

export const onLoadFailure = (state, action) => {
  if (action.response.unprocessableEntity) {
    return {
      ...state,
      loading: false,
      loaded: true,
      data: action.response.body,
      error: action.response.status
    };
  }

  return {
    ...state,
    loading: false,
    loaded: false,
    error: action.response.status
  };
};

export const onUpdateField = (state, action) => (
  { ...state, data: { ...state.data, [action.field]: action.value } }
);
