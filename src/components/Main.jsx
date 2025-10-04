import React from 'react'
import Markdown from './Markdown'
import './Main.css'
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Animated Typography: DU */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[8rem] md:text-[12rem] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-400 leading-none"
        >
          DU
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-[2rem] italic text-gray-400"
        >
          "We work in dark to serve the light."
        </motion.p>

        {/* Supporting metaphor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-4 text-[1.6rem] text-gray-500"
        >
          Like a <span className="text-indigo-300">sleeping dragon</span>, hidden yet powerful — guardians of knowledge, forging clarity in shadows.
        </motion.p>

        {/* Explore Docs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8"
        >
         <Link to="/home"><a
            className="button inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl shadow-lg transition text-[1.6rem]"
          >
            Explore Docs <ArrowRight className="w-6 h-6" />
          </a></Link>
        </motion.div>
      </motion.div>

      {/* Subtle Background Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute -bottom-24 w-[600px] h-[600px] bg-indigo-800/30 rounded-full blur-3xl"
      />
    </div>
  )
}

export default Main