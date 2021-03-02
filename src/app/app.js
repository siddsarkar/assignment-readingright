import React, { useEffect, useState } from 'react'
import styles from './app.module.scss'
import SearchBar from './components/SearchBar'

const App = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')

  const ENDPOINT = 'https://api.unsplash.com'

  function fetchImages(q) {
    const requestURL = `${ENDPOINT}/search/photos?query=${q}`
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

  useEffect(() => {
    fetchImages('fun').then((json) => {
      console.log(json)
      setImages(json.results)
    })
  }, [])

  function renderImagesColumns(x) {
    for (let i = 0; i < images.length; i += 1) {
      if (i % x === 0) {
        return (
          <div className={styles.column}>
            <img
              key={images[i].id}
              src={images[i].urls.small}
              alt={images[i].alt_description}
              style={{ width: '100%' }}
            />
          </div>
        )
      }
    }
  }

  return (
    <div className="container">
      <SearchBar
        handleClick={() =>
          fetchImages(query).then((json) => setImages(json.results))
        }
        query={query}
        setQuery={setQuery}
      />
      <div className="container-md">
        <div className={styles.row}>
          <div className={styles.column}>
            {images.map(
              (image, i) =>
                i % 4 === 0 && (
                  <img
                    key={image.id}
                    src={image.urls.small}
                    alt={image.alt_description}
                    style={{ width: '100%' }}
                  />
                )
            )}
          </div>
          <div className={styles.column}>
            {images.map(
              (image, i) =>
                i % 4 === 1 && (
                  <img
                    key={image.id}
                    src={image.urls.small}
                    alt={image.alt_description}
                    style={{ width: '100%' }}
                  />
                )
            )}
          </div>
          <div className={styles.column}>
            {images.map(
              (image, i) =>
                i % 4 === 2 && (
                  <img
                    key={image.id}
                    src={image.urls.small}
                    alt={image.alt_description}
                    style={{ width: '100%' }}
                  />
                )
            )}
          </div>
          <div className={styles.column}>
            {images.map(
              (image, i) =>
                i % 4 === 3 && (
                  <img
                    key={image.id}
                    src={image.urls.small}
                    alt={image.alt_description}
                    style={{ width: '100%' }}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
