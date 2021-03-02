import React from 'react'

const App = () => (
  <div className="container">
    <div className="input-group mb-3 mt-5">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
    </div>
    <div className="container-md">Initialize</div>
  </div>
)

export default App
