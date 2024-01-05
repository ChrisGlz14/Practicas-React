import React from 'react'

export const SongLyrics = ({title, lyrics}) => {
  return (
    <>
    <h3>{title}</h3>
    <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote>
    </>
  )
}
