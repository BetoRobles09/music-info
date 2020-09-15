import React from 'react'

const Song = ({ lyric }) => {
  if (lyric.length === 0) return null

  return (
    <>
      <h2>Lyrics</h2>
      <p className='lyrics'>{lyric}</p>
    </>
  )
}

export default Song
