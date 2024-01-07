// Modals.js
import React from 'react';
import Modal from './Modal';
import { useModal } from '../Hooks/useModal';
import { ContactForm } from './ContactForm';

export const Modals = () => {
  // Forma con arreglo
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  const [isOpenForm, openModalForm, closeModalForm] = useModal(false)

  // Forma con objetos
  // const modal1 = useModal(false);
  // const modal2 = useModal(false);

  return (
    <>
     <h2>modales</h2>
    <button onClick={openModal1}>Modal 1</button>
    <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
      <h3>Modal Children 1</h3>
      <p>Hola este es el contenido de mi modal 1</p>
      <img src="https://images.dog.ceo/breeds/rottweiler/n02106550_8776.jpg" alt="" />
    </Modal>
      <button onClick={openModal2}>Modal 2</button>
    <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
      <h1>Modal Children 2</h1>
      <p>Hola este es el contenido de mi modal 2</p>
      <img src="https://images.dog.ceo/breeds/rottweiler/n02106550_8776.jpg" alt="" />
    </Modal> 
      <button onClick={openModalForm}>Formulario</button>
      <Modal isOpen={isOpenForm} closeModal={closeModalForm}>
        <ContactForm />
      </Modal>

     
     
     
     
     {/* Forma con objetos:  */}
      {/* <h2>modales</h2>
      <button onClick={modal1.openModal}>Modal 1</button>
      <Modal isOpen={modal1.isOpenModal} closeModal={modal1.closeModal}>
        <h3>Modal Children 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://images.dog.ceo/breeds/rottweiler/n02106550_8776.jpg" alt="" />
      </Modal>
      <button onClick={modal2.openModal}>Modal 2</button>
      <Modal isOpen={modal2.isOpenModal} closeModal={modal2.closeModal}>
        <h1>Modal Children 2</h1>
        <p>Hola este es el contenido de mi modal 2</p>
        <img src="https://images.dog.ceo/breeds/rottweiler/n02106550_8776.jpg" alt="" />
      </Modal> */}
    </>
  );
};
