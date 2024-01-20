import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Pocemon } from "./pages/Pocemon"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Pocemon />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
