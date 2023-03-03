import React from 'react';

export default function ProjectCard({ project }) {
  const { img, name, description, github, githubAPI, site } = project;

  return (
    <div className='col-sm pb-3'>
      <div className='card'>
        <img src={img} className='card-img-top' alt='card img' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{description}</p>
          <a className='btn btn-sm btn-secondary me-2 mb-1' href={github}>
            Github Repo
          </a>
          {githubAPI && (
            <a className='btn btn-sm btn-secondary me-2 mb-1' href={githubAPI}>
              API Github Repo
            </a>
          )}
          <a className='btn btn-sm btn-primary' href={site}>
            Launch
          </a>
        </div>
      </div>
    </div>
  );
}
