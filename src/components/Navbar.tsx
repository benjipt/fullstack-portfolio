import { NavLink } from 'react-router-dom';

const activeSectionStyle = {
  backgroundColor: '#8B687F',
  color: '#EDEBBF',
};

const inactiveSectionStyle = {
  backgroundColor: '#EDEBBF',
  color: '#8B687F',
};

export const Navbar = () => {
  return (
    <nav className='sticky-top navbar navbar-dark bg-custom ps-4'>
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
  )
}
