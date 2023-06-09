import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Philosophy from './components/Philosophy'
import Skillset from './components/Skillset'
import Work from './components/Work'


function App() {

  return (
    <div className="App font-['Sen'] bg-neutral-900 min-h-screen">
      <Navbar />
      <Header />
      <Work  />
      <Philosophy />
      <Skillset />
      <Contact />
      <Footer />
    
    </div>
  )
}
//bg-gradient-to-r from-gray-900 via-neutral-600 to-stone-500/nasus
export default App
