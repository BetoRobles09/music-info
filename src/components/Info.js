import React from 'react'

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null

  const { strArtistThumb, strGenre, strBiographyEN, strFacebook, strTwitter, strLastFMChart } = info

  return (
    <div className='card border-light'>
      <div className='card-header bg-primary text-light font-weight-bold'>
        Artist Information
      </div>
      {info.artists === null ? <p className='alert alert-danger text-center p-2'>Artist Information not found</p> : (
        <div className='card-body'>
          <img src={strArtistThumb} alt='Artist' />
          <p className='card-text'>Genre: {strGenre}</p>
          <h2 className='card-name'>Biography</h2>
          <p className='card-text'>{strBiographyEN}</p>
          <p className='card-text'>
            <a href={`https://${strFacebook}`} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook' />
            </a>
            <a href={`https://${strTwitter}`} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter' />
            </a>
            <a href={`${strLastFMChart}`} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-lastfm' />
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default Info
