import React from 'react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { FormContainer } from './style';
import { ContactCard } from './style';


const Contact = () => {
  return(
    <>
      <Nav />
      <FormContainer>
        <h1>Contact</h1>
        <p>Preencha o formulário e realize o envio:</p>
        <ContactCard>
          <form className="formulario">
            <input type="text" placeholder="Informe seu nome"/>
            <input type="text" placeholder="Informe seu e-mail"/>
            <input type="text" placeholder="Informe seu telefone"/>
            <input type="submit" value="Enviar"/>
          </form>
        </ContactCard>
      </FormContainer>
      <Footer/>
    </>
  )
}

export default Contact;