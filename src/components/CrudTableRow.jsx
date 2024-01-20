import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

export const CrudTableRow = ({ el }) => {


  const {setDataToEdit, deleteData} = useContext(CrudContext)

  let{name, raza, id} = el

  return (
      <tr>
        <td>{name}</td>
        <td>{raza}</td>
        <td>
          <button onClick={()=> setDataToEdit(el)}>Editar</button>
          <button onClick={()=> deleteData(id)}>Eliminar</button>
        </td>
      </tr>
  );
};
