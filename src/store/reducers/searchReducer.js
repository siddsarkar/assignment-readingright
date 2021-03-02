import * as types from '../actions/types'

const initialState = {
  results: [],
  total: 0,
  total_pages: 0,
  keyword: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GOT_IMAGES:
      return {
        ...state,
        results: action.results,
        total: action.total,
        total_pages: action.total_pages,
        keyword: action.keyword
      }
    case types.GOT_MORE_IMAGES:
      return {
        ...state,
        results: [...state.results, ...action.results],
        total: action.total,
        total_pages: action.total_pages
      }
    default:
      return state
  }
}

export default reducer
