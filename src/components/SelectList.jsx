import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { Loader } from "./Loader";
import { Mesagge } from "./Mesagge";

export const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  if (!data) return null;
  if (error) {
    return <Mesagge msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />;
  }

  let id = `select - ${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name="" id={id} onChange={handleChange}>
        <option value="">Elige una {title}</option>
        {data && options.map((el) => <option value={el}>{el}</option>)}
      </select>
    </>
  );
};
