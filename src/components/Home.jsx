import './Home.css'
import '../App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Resource from './Resource'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const files = import.meta.glob("../paths/*.json", { eager: true });

function Home() {
    const [latestDoc, setLatestDoc] = useState(null);

    useEffect(() => {
    const docs = Object.values(files)
      .map((mod) => mod.default?.document)
      .filter(Boolean) // keep only valid document objects
      .map((doc) => ({
        ...doc,
        _parsedDate: parseDate(doc.date),
      }));

    // Sort by parsed date (latest first)
    const sorted = docs.sort((a, b) => b._parsedDate - a._parsedDate);

    // Take the latest one
    setLatestDoc(sorted[0]);
  }, []);

  // Small helper to parse DD/MM/YYYY safely
  const parseDate = (str) => {
    if (!str) return new Date(0);
    const [day, month, year] = str.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  if (!latestDoc) return <p>Loading latest document...</p>;


    return (
      <>
        <header>
          <Navbar />
        </header>
          <div className='home'>
            <h1 className='Main-head'>Latest Content</h1>
            <div className="border golden-border">
              <Link className="heading font-medium " to={latestDoc.path}><h1 className="heading font-medium">{latestDoc.heading}</h1></Link>
              <div className="otherDetail">
                <span className="smallDetail">Author: {latestDoc.author}</span>
                <span className="divider"></span>
                <span className="smallDetail">Date Published: {latestDoc.date}</span>
                <span className="divider"></span>
                <span className="smallDetail">Category: {latestDoc.category}</span>
              </div>
            </div>
          </div>
      </>
    )
  }

  export default Home