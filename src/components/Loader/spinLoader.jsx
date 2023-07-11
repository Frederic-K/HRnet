// Setting up a loader while waiting for the promise from async fct

const genLoader = (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
)
const spinLoader = () => genLoader

export default spinLoader
