import './Styles/App.css'
import LoginPage from './components/login/LoginPage'
import { Provider } from 'react-redux'
import store from './app/store'
import { Routes , Route } from 'react-router-dom'
import HomePage from './components/homePage/HomePage'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/Home' element={<HomePage/>}/>
      </Routes>
    </Provider>
  )
}

export default App
