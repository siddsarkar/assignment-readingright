import * as types from './types'

export default function fetchUnsplash(endpoint) {
  const requestURL = `https://api.unsplash.com${endpoint}`
  const requestHeaders = new Headers()
  requestHeaders.append(
    'Authorization',
    'Client-ID CDk34t9WKXMunCgr3HpxuI1sDh3sy02h9LSp7Wu7BUA'
  )
  const driveRequest = new Request(requestURL, {
    method: 'GET',
    headers: requestHeaders
  })
  return fetch(driveRequest).then((response) => {
    if (response.ok && response.status === 200) {
      return response.json()
    }
    throw response.status
  })
}

export const getSearchResults = (cb, options) => (dispatch) =>
  fetchUnsplash(`/search/photos?query=${options.query}`).then(
    (res) => {
      dispatch({
        type: types.GOT_IMAGES,
        keyword: options.query,
        results: res.results,
        total: res.total,
        total_pages: res.total_pages
      })
      cb()
    }
  )

export const getMoreSearchResults = (cb, options) => (dispatch) =>
  fetchUnsplash(
    `/search/photos?query=${options.query}&page=${options.page}`
  ).then((res) => {
    dispatch({
      type: types.GOT_MORE_IMAGES,
      results: res.results,
      total: res.total,
      total_pages: res.total_pages
    })
    cb()
  })

export const getRandomPhotos = (cb) => (dispatch) =>
  fetchUnsplash(`/photos`).then((res) => {
    dispatch({
      type: types.GOT_IMAGES,
      results: res
    })
    cb()
  })

export const getMoreRandomPhotos = (cb, options) => (dispatch) =>
  fetchUnsplash(`/photos?page=${options.page}`).then((res) => {
    dispatch({
      type: types.GOT_MORE_IMAGES,
      results: res
    })
    cb()
  })
