import React from "react";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {

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
