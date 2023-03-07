import React from 'react';

export default function ProjectCard({ project }) {
  const { img, name, description, github, githubAPI, site } = project;

  return (
    <div className='col-sm pt-4'>
      <div className='card'>
        <img src={img} className='card-img-top' alt='card img' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <div
            style={{
              height: '160px',
              display: 'table-cell',
              verticalAlign: 'middle',
            }}>
            <p className='card-text'>{description}</p>
          </div>
          <div className='mt-1' style={{ height: '30px' }}>
            {github && (
              <a
                className='btn btn-sm btn-custom-secondary-card me-2'
                href={github}
                target='_blank'
                rel='noreferrer'>
                Github Repo
              </a>
            )}
            {githubAPI && (
              <a
                className='btn btn-sm btn-custom-secondary-card me-2'
                href={githubAPI}
                target='_blank'
                rel='noreferrer'>
                API Github Repo
              </a>
            )}
            {site && (
              <a
                className='btn btn-sm btn-custom-card'
                href={site}
                target='_blank'
                rel='noreferrer'>
                Launch
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
