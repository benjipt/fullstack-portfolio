import React from 'react';
import headshot from '../images/profile-photo.jpg';
import { Section } from '../types';

const imgStyle = {
  width: '200px',
  height: 'auto',
};

const activeSectionStyle = {
  backgroundColor: '#231F20',
  color: '#F3DFA2',
};

const inactiveSectionStyle = {
  backgroundColor: '#F3DFA2',
  color: '#231F20'
};

export default function Header({
  clickShowProjects,
  clickShowAbout,
  toggleSection,
}) {
  return (
    <div className='header text-center'>
      <nav className='navbar navbar-dark bg-custom ps-4'>
        <form className='justify-content-start'>
          <button
            className='btn btn-sm btn-outline-dark me-3'
            onClick={clickShowProjects}
            style={
              toggleSection === Section.projects
                ? activeSectionStyle
                : inactiveSectionStyle
            }>
            PROJECTS
          </button>
          <button
            className='btn btn-sm btn-outline-dark'
            onClick={clickShowAbout}
            style={
              toggleSection === Section.about
                ? activeSectionStyle
                : inactiveSectionStyle
            }>
            ABOUT
          </button>
        </form>
        <div className='d-flex flex-row-reverse'>
          <a
            className='nav-link'
            href='https://github.com/benjipt'
            target='_blank'
            rel='noreferrer'>
            Github
          </a>
          <a
            className='nav-link'
            href='https://www.linkedin.com/in/benjithompson/'
            target='_blank'
            rel='noreferrer'>
            Linkedin
          </a>
        </div>
      </nav>
      <h1 className='pt-4'>BENJI THOMPSON</h1>
      <img
        src={headshot}
        className='pt-4 rounded'
        style={imgStyle}
        alt='headshot Benji Thompson'
      />
      <div className='pt-4 pb-1 container'>
        <p>Full-Stack Engineer based in Brooklyn, NY</p>
      </div>
    </div>
  );
}
