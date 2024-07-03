import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className="about-container">
    <h2 className="about-heading">About CNMS - College Notes Management System</h2>
    <p className="about-content">
      CNMS (College Notes Management System) is a platform designed to provide study materials,
      question papers, and guided blogs for CDLSIET students. Our aim is to help students excel
      in their academic journey and achieve good grades.
    </p>
    <p className="about-content">
      We understand the importance of having comprehensive study resources and a supportive
      learning community. That's why we have curated a collection of study materials and question
      papers to assist students in their preparation. Our guided blogs cover various subjects and
      provide valuable insights and tips to enhance learning.
    </p>
    <p className="about-content">
      At CNMS, we are dedicated to facilitating a seamless learning experience for students,
      empowering them to succeed in their educational pursuits. Join us and explore a wealth of
      resources that will aid in your academic growth.
    </p>
    <div className="about-social-links">
      <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
  </div>
  )
}

export default About