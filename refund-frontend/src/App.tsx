import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./Components"
import { Home, NewRefund } from "./Pages"

function App() {

  return (
    <div className="bg-green-100 h-screen space-y-10">
      <BrowserRouter>
        <Header />

        <main className="flex items-center justify-center mt-10 max-w-270.5 h-146 my-auto mx-auto p-5">
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
