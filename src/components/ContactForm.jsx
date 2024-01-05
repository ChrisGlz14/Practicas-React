
import { useForm } from "../Hooks/useForm";
import { Loader } from "./Loader";
import { Mesagge } from "./Mesagge";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  opcionDulce: false,
  opcionSalada: false,
  comments: "",
};



const validationsForm = (form) => {
  let errors = {};
  //Expresiones regulares (validaciones que permiten los caracteres que deseemos)
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,155}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo Email no es valido";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "Falta escribir un comentario";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo comentarios solo acepta 155 caracteres";
  }

  if (form.opcionDulce && form.opcionSalada) {
    errors.opcion1 = "Debes elegir solo una opción";
  } else if (!form.opcionDulce && !form.opcionSalada) {
    errors.opcion2 = "Debes elegir al menos una opcion"
  }
  
  return errors;
};

let styles = {
  fontWeight: "Bold",
  color: "#dc3545",
};

let warning = {
  fontWeight: "Bold",
  color: "#dc8e35",
};

export const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCheckboxChange,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu Nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Escribe tu Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Escribe tu asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        <hr />
         <p>Elegir una opcion:</p>
        <label htmlFor="">
          Dulce
          <input
           type="checkbox"
           name="opcionDulce"
           checked={form.opcionDulce}
           onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="">
          Salado
          <input
           type="checkbox"
           name="opcionSalada"
           checked={form.opcionSalada}
           onChange={handleCheckboxChange}
          />
        </label>
        {errors.opcion1 && <p style={styles}>{errors.opcion1}</p>}
        {errors.opcion2 && <p style={warning}>{errors.opcion2}</p>}
        <hr />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>

      {loading && <Loader />}
      {response && (
        <Mesagge msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </>
  );
};
