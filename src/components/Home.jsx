import './Home.css'
import '../App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Resource from './Resource'

function Home() {

  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Sidebar/>
        <div className='home'>
            <p>Hello</p>
        </div>
        <Resource/>
    </main>
    </>
  )
}

export default Home