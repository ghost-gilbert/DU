import React, { useState } from "react";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Resource from './components/Resource'
import Main from './components/Main'
import './App.css'
import './components/Navbar.css'
import './components/mediascreen.css'

function App() {

  const [isResourceOpen, setIsResourceOpen] = useState(false);

  const toggleResource = () => setIsResourceOpen((prev) => !prev);

  return (
    <>
      <header>
        <Navbar onToggleResources={toggleResource} />
      </header>
      <main>
        <Sidebar/>
        <Main/>
        <Resource isOpen={isResourceOpen}/>
      </main>
    </>
  )
}

export default App
