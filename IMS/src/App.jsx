import React from "react"
import { BrowserRouter} from "react-router-dom"
import AppRouter from "./routes/AppRoutes"
function App() {
 
  return (
    <>
    <div id="wrapper">
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
