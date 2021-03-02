import React from 'react'

export default function SearchBar({
  className,
  query,
  setQuery,
  handleClick
}) {
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault()
        handleClick()
      }}
    >
      <div className="input-group">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          className="form-control"
          placeholder="Search for Photos"
          aria-label="Search for Photos"
        />
        <button
          onClick={handleClick}
          className="btn btn-primary border-0"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  )
}
