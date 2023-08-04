import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppselector } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter'
import NewComponent from './NewComponent'

function App() {
const count = useAppselector(state=> state.counter.value)
const dispatch = useAppDispatch()
  return (

    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Count is {count}</h1>
      <button style={{marginRight:'2rem', borderColor:"green"}} onClick={()=> dispatch(increment())}>+</button>
      <button style={ {borderColor:'red'}} onDoubleClick={()=> dispatch(decrement())}>-</button>
 <NewComponent />
    </>
  )
}

export default App
