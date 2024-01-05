import React, { useEffect, useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { Loader } from "./Loader";
import { Mesagge } from "./Mesagge";

export const CrudApi = () => {
  const [db, setDb] = useState(null);

  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/characters";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    // console.log("Datos a crear:", data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endPoint = `${url}/${data.id}`;
    //console.log(endPoint)
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endPoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = confirm("Estas seguro que deseas eliminar este elemento ?");

    if (isDelete) {
      let endPoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };


      api.del(endPoint,options).then((res)=> {
        if(!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res)
        }
      });
}



   
  };

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
