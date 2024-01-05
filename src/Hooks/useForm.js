import React, { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState(null);


  // Detecta cuando estamos escribiendo y haga el cambio de valores
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Se hacen las validaciones
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleCheckboxChange = (e) => {
    
    setForm((prevForm) => {
      // Manejar cada opción de checkbox individualmente
      if (e.target.name === "opcionDulce" || e.target.name === "opcionSalada") {
        return {
          ...prevForm,
          [e.target.name]: e.target.checked,
        };
      }
  
      // Manejar otras opciones de checkbox aquí si es necesario
  
      return prevForm;
    });
  };
  

  //Envia el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
  
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/chrisgd10s@gmail.com", {
          body: form,
          opcionDulce: form.opcionDulce ? "Sí ha sido seleccionado" : "No ha sido seleccionado",
          opcionSalada: form.opcionSalada ? "Sí ha sido seleccionado" : "No ha sido seleccionado",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 4000);
        }).catch((error) => {
          console.error("Error en la solicitud:", error);
          setLoading(false);
          // Manejar el error según tus necesidades
        });
        
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCheckboxChange,
  };
};
