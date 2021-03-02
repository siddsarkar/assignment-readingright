import React from 'react'

export default function ImageResults({ styles, images }) {
  return (
    <>
      <div className={styles.column}>
        {images.map(
          (image, i) =>
            i % 4 === 0 && (
              <a
                key={image.id}
                target="_blank"
                rel="noreferrer"
                href={image.urls.full}
                download
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  style={{ width: '100%' }}
                />
              </a>
            )
        )}
      </div>
      <div className={styles.column}>
        {images.map(
          (image, i) =>
            i % 4 === 1 && (
              <a
                key={image.id}
                target="_blank"
                rel="noreferrer"
                href={image.urls.full}
                download
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  style={{ width: '100%' }}
                />
              </a>
            )
        )}
      </div>
      <div className={styles.column}>
        {images.map(
          (image, i) =>
            i % 4 === 2 && (
              <a
                key={image.id}
                target="_blank"
                rel="noreferrer"
                href={image.urls.full}
                download
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  style={{ width: '100%' }}
                />
              </a>
            )
        )}
      </div>
      <div className={styles.column}>
        {images.map(
          (image, i) =>
            i % 4 === 3 && (
              <a
                key={image.id}
                target="_blank"
                rel="noreferrer"
                href={image.urls.full}
                download
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  style={{ width: '100%' }}
                />
              </a>
            )
        )}
      </div>
    </>
  )
}
