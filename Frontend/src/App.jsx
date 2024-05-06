import Footer1 from "./components/Footer1"
import MainBody from "./components/MainBody"
import Navbar from "./components/Navbar"

function App() {
  console.log(import.meta.env.REACT_APP_API_URL)
  return (
    <>
      <Navbar/>
      <MainBody/>
      <Footer1/>
    </>
  )
}

export default App
