import { Outlet } from "react-router-dom"
import Nabar from "./components/Nabar"


function App() {

  return (
    <div>
      <Nabar />
      <Outlet />
    </div>
  )
}

export default App
