import React, { Children, useEffect, useState } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl =   `theaudiodb.com/api/v1/json/2/searchtrack.php?s=${artist}&t=${song}`;

      console.log(artistUrl, songUrl);

      setLoading(true);

      const[artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      setBio(artistRes)
      setLyrics(songRes)
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
    
  };

  return (
    <div>
      <h2>Buscador de Canciones</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyrics={lyrics} bio={bio} />
    </div>
  );
};
