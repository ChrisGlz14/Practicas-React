import React, { useState } from "react";
import "./song-form.css";

export const SongForm = ({ handleSearch }) => {

  const initialForm = {
    "artist": "",
    "song":""
  }

  const [form, setForm ] = useState(initialForm)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!form.artist || !form.song){
      alert("Faltan Datos")
      return
    } else {
      handleSearch(form);
      setForm(initialForm)
    }
  }

  const artist = () => input.value


  return (
    <>
      <h2>Formulario</h2>
      <form className="song-form" onSubmit={handleSubmit}>
        <label htmlFor="Artista">Artista</label>
        <input type="text" id="artist" placeholder="Nombre Del Interprete" onChange={handleChange} value={form.artist} />
        <label htmlFor="Cancion">Cancion</label>
        <input type="text" id="song" placeholder="Nombre de la cancion"  onChange={handleChange} value={form.song}/>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
