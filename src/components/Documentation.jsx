import React from "react";
import Navbar from "./Navbar";
import "./Documentation.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './GoldenStyle.css'

const files = import.meta.glob("../paths/*.json", { eager: true });

const Documentation = () => {
  // const [documents, setDocuments] = useState([
  //   {
  //     heading: "Getting Started",
  //     author: "Kumar Harsh",
  //     date: "02/06/2025",
  //     category: "Guide",
  //     path: "../docs/GettingStarted",
  //   },
  //   {
  //     heading: "Article",
  //     author: "Kumar Harsh",
  //     date: "02/06/2025",
  //     category: "Guide",
  //     path: "../docs/Article",
  //   },
  // ]);

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Extract all "document" objects from each JSON
    const docs = Object.values(files)
      .map((mod) => mod.default.document)
      .filter(Boolean);

    setDocuments(docs);
   }, []);

  return (
    <>
      <Navbar/>
      <div className="documents">
        {documents.map((items) => {
          return (
            <div className="border golden-border">
              <Link className="heading font-medium " to={items.path}><h1>{items.heading}</h1></Link>
              <div className="otherDetail">
                <span className="smallDetail">Author: {items.author}</span>
                <span className="divider"></span>
                <span className="smallDetail">Date Published: {items.date}</span>
                <span className="divider"></span>
                <span className="smallDetail">Category {items.category}</span>
                <span className="divider"></span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Documentation;
