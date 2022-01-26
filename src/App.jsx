import logo from './logo.svg'
import './App.css'
import Counter from './features/Counter'
import { ListComponent } from './features/ListComponent'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
      <ListComponent />
    </div>
  )
}

export default App
