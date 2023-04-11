import { NavLink } from 'react-router-dom';
import headshot from '../images/profile-photo.jpg';

const imgStyle = {
  width: '200px',
  height: 'auto',
};

const activeSectionStyle = {
  backgroundColor: '#8B687F',
  color: '#EDEBBF',
};

const inactiveSectionStyle = {
  backgroundColor: '#EDEBBF',
  color: '#8B687F',
};

export default function Header() {
  return (
    <div className='header text-center'>
      <nav className='navbar navbar-dark bg-custom ps-4'>
        <form className='justify-content-start'>
          <NavLink
            to='/projects'
            className='btn btn-sm btn-custom me-3'
            style={({ isActive }) =>
              isActive ? activeSectionStyle : inactiveSectionStyle
            }>
            PROJECTS
          </NavLink>
          <NavLink
            to='/about'
            className='btn btn-sm btn-custom'
            style={({ isActive }) =>
              isActive ? activeSectionStyle : inactiveSectionStyle
            }>
            ABOUT
          </NavLink>
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
      <h1 className='mt-5'>Benji Thompson</h1>
      <img
        src={headshot}
        className='mt-4 rounded'
        style={imgStyle}
        alt='headshot Benji Thompson'
      />
      <div className='pt-4 pb-1 container'>
        <p className='monospace'>Full-Stack Engineer based in Brooklyn, NY</p>
        <a
          href='benji-thompson-swe-resume.pdf'
          download
          target='_blank'
          rel='noreferrer'>
          <button type='button' className='btn btn-custom'>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
