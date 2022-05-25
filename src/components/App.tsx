import { Provider } from 'react-redux'
import { store } from '../state'

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Repositories</h1>
      </div>
    </Provider>
  )
}

export default App
