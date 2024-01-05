import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Goku",
    raza: "Saiyan",
  },
  {
    id: 2,
    name: "Vegeta",
    raza: "Saiyan",
  },
  {
    id: 3,
    name: "Piccolo",
    raza: "Namekian",
  },
  {
    id: 4,
    name: "Bulma",
    raza: "Human",
  },
  {
    id: 5,
    name: "Frieza",
    raza: "Frieza Race",
  },
];

export const CrudApp = () => {


  
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now()
    // console.log("Datos a crear:", data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el)

    setDb(newData); 
  };

  const deleteData = (id) => {
    let isDelete = confirm("Estas seguro que deseas eliminar este elemento ?") 
    if (isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    }else {
      return
    }
  };



  return (
    <>
      <h2>Crud App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};
