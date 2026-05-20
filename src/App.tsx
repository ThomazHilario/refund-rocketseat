import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header, MainLayout } from "./Components"
import { Home, NewRefund, Refund } from "./Pages"

function App() {

  return (
    <div className="bg-gray-400 min-h-screen space-y-5">
      <BrowserRouter>
        <Header />

          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/newrefund" element={<NewRefund />} />
              <Route path="/refund/:id" element={<Refund />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
