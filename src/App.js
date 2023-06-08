import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./component/layout/layout"
import BoardPage from "./pages//BoardPage"
import Calendar from "./pages/Calender"
import Dashboard from "./pages/Dashboard"
import DataGrid from "./pages/DataGrid"

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="users" element={<DataGrid />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="board" element={<BoardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
