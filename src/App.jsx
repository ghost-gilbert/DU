import { useState } from "react";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Resource from './components/Resource'
import Main from './components/Main'
import './App.css'
import './components/Navbar.css'
import './components/mediascreen.css'

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <Navbar onToggleSidebar={toggleSidebar} />
      </header>
      <main>
        <Sidebar isOpen={isSidebarOpen} />
        <Main />
        <Resource />
      </main>
    </>
  )
}

export default App
