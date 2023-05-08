import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
            {site && (
              <a
                className='btn btn-sm btn-custom-card me-2'
                href={site}
                target='_blank'
                rel='noreferrer'>
                Launch
              </a>
            )}
            {github && (
              <a
                className='btn btn-sm btn-custom-secondary-card me-2'
                href={github}
                target='_blank'
                rel='noreferrer'>
                FE code
              </a>
            )}
            {githubAPI && (
              <a
                className='btn btn-sm btn-custom-secondary-card'
                href={githubAPI}
                target='_blank'
                rel='noreferrer'>
                BE code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
