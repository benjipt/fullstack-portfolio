import headshot from '../assets/images/profile-photo.jpg';

const imgStyle = {
  width: '200px',
  height: 'auto',
};

export default function Hero() {
  return (
    <div className='header text-center'>
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
