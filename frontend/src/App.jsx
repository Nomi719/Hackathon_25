
// import './App.css'

import { FaChevronDown } from "react-icons/fa"

import PublicLayout from "./public/Layout"
import Home from "./public/Home"
import { BrowserRouter, Route, Routes } from "react-router"
import WeddingLoans from "./public/WeddingLoans"
import BusinessStartupLoans from "./public/BusinessStartupLoans"
import EducationLoans from "./public/EducationLoans"
import HomeConstructionLoans from "./public/HomeConstructionLoans"
import Form from "./public/Form"
import Profile from "./public/Profile"
import Login from "./public/Login"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />} >
            <Route index element={<Home />} />
            <Route path="/wedding-loans" element={<WeddingLoans />} />
            <Route path="/business-startup-loans" element={<BusinessStartupLoans />} />
            <Route path="/education-loans" element={<EducationLoans/>} />
            <Route path="/home-construction-loans" element={<HomeConstructionLoans />} />

            <Route path="/form/:type" element={<Form />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />


            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App