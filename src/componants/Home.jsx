import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaPaintBrush, FaCode, FaLaptop } from "react-icons/fa";
import pimage from "../assets/javed.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"


const roles = ["MERN Stack Developer",
  "Frontend Specialist with React & Tailwind",
  "Passionate JavaScript Developer"];





export default function Home() {


  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const [blink, setBlink] = React.useState(true);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [about, setAbout] = useState('')

  const [data, setData] = useState([])
 const submit = async (e) => {
  e.preventDefault();
  const newData = { name, email, subject, about };

  try {
    const res = await axios.post("http://localhost:8001/api/user", newData);
    setData(prev => [...prev, res.data]); // assuming backend returns the saved data
    setName('');
    setEmail('');
    setSubject('');
    setAbout('');
  } catch (err) {
    console.error("Error submitting form:", err);
  }
};


 


  React.useEffect(() => {



    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000 / 3);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  React.useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-12 lg:px-24 gap-16">
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-500">Javed Alam</span>
          </h1>
          <p className="text-xl font-medium h-10">
            {roles[index].substring(0, subIndex)}
            <span
              className="border-r-2 border-white ml-1"
              style={{ opacity: blink ? 1 : 0 }}
            ></span>
          </p>
          <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
            Passionate Full Stack Developer skilled in building elegant, scalable web applications using React, Node.js, Express, MongoDB, and Tailwind CSS. Dedicated to delivering seamless user experiences and robust backend solutions with modern JavaScript technologies.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={pimage}
            alt="Javed Alam"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-white"
          />
        </motion.div>
      </section>

      {/* Sticky Social Icons */}
      <div className="bg-gray-900 py-4 px-6 flex justify-center gap-6 text-white text-xl sticky top-0 z-50 shadow-md">
        <a href="https://www.linkedin.com/in/javed-alam-62251b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/javedzimmi" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/javed3_?igsh=ODQ2czFwYWdldmdh" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
          <FaInstagram />
        </a>
      </div>

      {/* Projects */}
      <section className="bg-white text-black py-20 px-6 sm:px-12 lg:px-24" id="projects">
        <motion.h2 className="text-3xl font-bold text-center mb-12" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }}>
          Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {["E-Commerce Website", "Doctor Appointment System", "Portfolio Website"].map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project}</h3>
              <p className="text-gray-600">A modern project with real-world use cases and technologies.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-900 text-white py-20 px-6 sm:px-12 lg:px-24" id="skills">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux", "Git"].map((skill, i) => (
            <span key={i} className="bg-gray-800 px-6 py-2 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-white text-black py-20 px-6 sm:px-12 lg:px-24" id="services">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: <FaPaintBrush className="text-blue-500" />, title: "Creative Design", desc: "Modern and creative UI aligned with brand identity." },
            { icon: <FaLaptop className="text-green-500" />, title: "Web Design", desc: "Responsive and beautiful websites tailored to your needs." },
            { icon: <FaCode className="text-purple-500" />, title: "UI/UX Design", desc: "Intuitive and user-friendly experiences for all platforms." },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-xl p-6 text-center shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-4xl mx-auto mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white py-20 px-6 sm:px-12 lg:px-24" id="contact">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Work Together</h2>
        <motion.form
          className="max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Name" className="flex-1 p-3 rounded bg-gray-800 text-white" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="email" placeholder="Email" className="flex-1 p-3 rounded bg-gray-800 text-white" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <input type="text" placeholder="Subject" className="w-full p-3 rounded bg-gray-800 text-white" onChange={(e) => setSubject(e.target.value)} value={subject} />
          <textarea placeholder="Message" rows="5" className="w-full p-3 rounded bg-gray-800 text-white" onChange={(e) => setAbout(e.target.value)} value={about}></textarea>
          <button type="submit" onClick={submit} className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-white transition">
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Javed Alam. All rights reserved.</p>

        </div>
      </footer>
    </>
  );
}
