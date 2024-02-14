import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {

  return (
    <Provider store={store}>
      <div className='h-lvh bg-black p-4'>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  )
}

export default App
