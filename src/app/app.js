import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSearchResults,
  getRandomPhotos,
  getMoreSearchResults,
  getMoreRandomPhotos
} from '../store/actions/imageActions'
import styles from './app.module.scss'
import ImageResults from './components/ImageResults'
import SearchBar from './components/SearchBar'

const App = () => {
  const [loading, setLoading] = useState(true)
  const images = useSelector((state) => state.search.results)
  const total = useSelector((state) => state.search.total)
  const keyword = useSelector((state) => state.search.keyword)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (loading) {
      nProgress.start()
    } else {
      nProgress.done()
    }
  }, [loading])

  const loaded = () => {
    setLoading(false)
  }
  const loadedMore = () => {
    setPage(page + 1)
    setLoading(false)
  }
  const loadMoreHandler = () => {
    setLoading(true)
    if (!query) {
      dispatch(getMoreRandomPhotos(loadedMore, { page: page + 1 }))
    } else {
      dispatch(
        getMoreSearchResults(loadedMore, { query, page: page + 1 })
      )
    }
  }

  const searchLoaded = () => {
    setLoading(false)
  }
  const searchHandler = () => {
    setLoading(true)
    setPage(1)
    dispatch(getSearchResults(searchLoaded, { query }))
  }

  useEffect(() => {
    dispatch(getRandomPhotos(loaded))
  }, [dispatch])

  return (
    <>
      <div className="container-fluid text-primary h1 text-body text-center pt-5 pb-0">
        IMAGE SEARCH
      </div>
      <div className="container">
        <SearchBar
          className={styles.header}
          handleClick={searchHandler}
          query={query}
          setQuery={setQuery}
        />
        <div className={styles.main}>
          <div className={styles.meta}>
            <strong>
              {keyword
                ? `SHOWING RESULTS FOR '${keyword.toUpperCase()}'`
                : 'RANDOM'}
            </strong>
            <p className="text-secondary">{total} Images Found</p>
          </div>
          <div className={styles.row}>
            <ImageResults styles={styles} images={images} />
          </div>
        </div>
        <div className={styles.footer}>
          <button
            onClick={loadMoreHandler}
            className="btn btn-primary w-50"
            type="button"
            id="button-addon2"
            disabled={loading || images.length < 1}
          >
            {loading ? 'LOADING' : 'LOAD MORE'}
          </button>
        </div>
      </div>
      <div className="container-fluid text-secondary text-center bg-primary pt-5 pb-5">
        Ⓒ 2020 Xxxyzz Xyxxz. Powered by Unsplash
      </div>
    </>
  )
}

export default App
