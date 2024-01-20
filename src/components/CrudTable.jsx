import React, { useContext } from "react";
import { CrudTableRow } from "./CrudTableRow";
import CrudContext from "../context/CrudContext";

export const CrudTable = () => {

  const { db:data } = useContext(CrudContext)

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre:</th>
            <th>Raza</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
