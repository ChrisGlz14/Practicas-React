import React, { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
  id : null,
  name : "",
  raza: "",
}

export const CrudForm =  () => {


  const {createData, updateData, dataToEdit, setDataToEdit} = useContext(CrudContext)

  const [form, setForm] = useState(initialForm);

  
  useEffect(()=> {
    if (dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  },[dataToEdit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };


    const handleSubmit = (e) => {
      e.preventDefault();

      if (!form.name || !form.raza) {
        alert("Datos incompletos")
        return;
      }

      if(form.id === null) {
        createData(form)
      } else {
        updateData(form)
      }
      handleReset();
  };


  const handleReset = (e) => {
    setForm(initialForm)
    setDataToEdit(null)
  };

  return (
    <>
      <div>
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="raza"
            placeholder="Raza"
            value={form.raza}
            onChange={handleChange}
          />
          <input type="submit" value="Enviar"/>
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </form>
      </div>
    </>
  );
};
