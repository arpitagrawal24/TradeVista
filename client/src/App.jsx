import { Provider } from "react-redux"
import { Outlet } from "react-router-dom"

import { store } from "./store/store"
import Nabar from "./components/Nabar"

function App() {

  return (
    <Provider store={store}>
      <Nabar />
      <Outlet />
    </Provider>
  )
}

export default App
