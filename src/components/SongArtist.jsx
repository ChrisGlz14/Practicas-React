import React from 'react'

export const SongArtist = ({artist}) => {
  return (
    <>
    <h3 className='name-artist'>{artist.strArtist}</h3>
    <img src={artist.strArtistThumb} alt={artist.strArtist}/>
    <p>{artist.strCountry}</p>
    <p>{artist.strGenre}</p>
    <a href={`http://${artist.strWebsite}`} target="_blank" rel='noreferrer'>Sitio Web</a>
    <p className='bio-artist'>{artist.strBiographyEN}</p>
    </>
)}
