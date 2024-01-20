import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Mesagge } from "./Mesagge";
import CrudContext from "../context/CrudContext";
import { useContext } from "react";

export const CrudApi = () => {
  const { db, error, loading } = useContext(CrudContext);

  return (
    <>
      <h2>Crud API</h2>
      <CrudForm />
      {loading && <Loader />}
      {error && (
        <Mesagge
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}

      {db && <CrudTable />}
    </>
  );
};
