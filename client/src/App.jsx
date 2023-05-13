//STYLES
import './App.css'

//COMPONENTS
import { Landing, Navbar, Dogs, Detail, Form, About } from "./components/index"


//HOOKS
import { Route, Routes, useLocation } from "react-router-dom";

function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <Navbar />}

      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Dogs />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/create" element={<Form />} />

        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  )
}

export default App
