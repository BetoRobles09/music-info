import React, { useState } from 'react'

const Form = ({ setSearchLyrics }) => {
  const [search, setSearch] = useState({
    artist: '',
    song: ''
  })
  const [error, setError] = useState(false)

  const { artist, song } = search

  const updateState = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const searhInfo = e => {
    e.preventDefault()

    if (artist.trim() === '' || song.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    setSearchLyrics(search)
  }

  return (
    <div className='bg-info'>
      {error ? <p className='alert alert-danger text-center p-2'>All fields are mandatory</p> : null}
      <div className='container'>
        <div className='row'>
          <form onSubmit={searhInfo} className='col card text-white bg-transparent mb-5 pt-5 pb-2'>
            <fieldset>
              <legend className='text-center'>Lyrics Finder</legend>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Artist</label>
                    <input type='text' className='form-control' name='artist' placeholder='Artist' value={artist} onChange={updateState} />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Song</label>
                    <input type='text' className='form-control' name='song' placeholder='Song' value={song} onChange={updateState} />
                  </div>
                </div>
              </div>
              <button type='submit' className='btn btn-primary float-right'>Search</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
