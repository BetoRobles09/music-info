import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Form from './components/Form'
import Song from './components/Song'
import Info from './components/Info'

function App () {
  const [searchLyrics, setSearchLyrics] = useState({})
  const [lyric, setLyric] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (Object.keys(searchLyrics).length === 0) return

    const consultAPILyrics = async () => {
      const { artist, song } = searchLyrics
      const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const urlInfo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`

      const [songLyrics, information] = await Promise.all([
        Axios(urlLyrics),
        Axios(urlInfo)
      ])
      if (information.data.artists === null) {
        setLyric(songLyrics.data.lyrics)
        setInfo({ artists: null })
      } else {
        setLyric(songLyrics.data.lyrics)
        setInfo(information.data.artists[0])
      }
    }
    consultAPILyrics()
  }, [searchLyrics, info])

  return (
    <>
      <Form setSearchLyrics={setSearchLyrics} />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info info={info} />
          </div>
          <div className='col-md-6'>
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
