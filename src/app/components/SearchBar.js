import React from 'react'

export default function SearchBar({ query, setQuery, handleClick }) {
  return (
    <div className="input-group mb-3 mt-5">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        onClick={handleClick}
        className="btn btn-primary"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
    </div>
  )
}
