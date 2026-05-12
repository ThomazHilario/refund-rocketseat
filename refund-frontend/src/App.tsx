import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./Components"
import { Home, NewRefund } from "./Pages"

function App() {

  return (
    <div className="bg-gray-400 min-h-screen space-y-5">
      <BrowserRouter>
        <Header />

        <main className="flex items-center justify-center my-auto mx-auto p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newrefund" element={<NewRefund />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
