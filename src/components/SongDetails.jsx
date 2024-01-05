import React from "react";
import { SongLyrics } from "./SongLyrics";
import { SongArtist } from "./SongArtist";
import { Mesagge } from "./Mesagge";
import "./song-details.css";

export const SongDetails = ({ search, lyrics, bio }) => {
  return (
    <>
      <div className="details-info">
        {lyrics.error ||lyrics.err || lyrics.name === "AbortError" ? (
          <Mesagge
            msg={`No se ha cargado la informacion "${search.song}"`}
            bgColor="#dc3545"
          />
        ) : (
          <SongLyrics title={search.song} lyrics={lyrics.lyrics}/>
        )}
        {bio.artists ? (
          <SongArtist artist={bio.artist[0]}/>
        ) : (
          <Mesagge
            msg={`N0 existe el interprete "${search.artist}"`}
            bgColor="#dc3545"
          />
        )}
      </div>
    </>
  );
};
