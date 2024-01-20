import React, { useEffect, useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Mesagge } from "./Mesagge";
import CrudContext, { CrudProvider } from "../context/CrudContext";

export const CrudApi = () => {

  const {createData}= useContext(CrudContext)
  return (
    <>
      <h2>Crud API</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <Mesagge
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}

      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}  
    </>
  );
};
