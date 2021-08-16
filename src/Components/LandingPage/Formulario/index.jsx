import React, { useState, useEffect } from 'react';
import useForm, { validateInfo } from '../../../Hooks/LandingPage/useForm/index.js';
import { Button } from '../Button/index.js';

import { FieldContainer, WrapperForm } from './styles.js';

import { states } from "../../../Mocks/LandingPage/brasilStates.js";
import sendRequest from '../../../Services/sendRequest';

export function Formulario() {
   const { handleChange, handleSubmit, values, errors } = useForm(validateInfo);

   //Campos do Formulário
   const [zipcode, setZipcode] = useState("");
   const [state, setState] = useState("");
   const [city, setCity] = useState("");

   //Opções de Estado
   const [States, setStates] = useState([<option value=''>Estado</option>]);
   //Opções de Cidade
   const [Cities, setCities] = useState([<option value=''>Cidade</option>]);
   //Bloqueio de Seleção
   const [lockFields, setLockFields] = useState(true);

   /*******************************************************************************************
   ************************************** RDStation *******************************************
   ********************************************************************************************/
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/21d8841a-20c5-4aa8-bba0-b43bd35c3461-loader.js";
      script.async = true
      document.body.appendChild(script);
   }, []);

   /*******************************************************************************************
   ************ OBSERVANDO ALTERAÇÕES NO CEP PARA PLOTAR O ESTADO E CIDADE ********************
   ********************************************************************************************/
   useEffect(() => {
      if (zipcode.length === 8) {
         getAddress();
      } else if (zipcode.length > 8) {
         alert("O CEP não pode ter mais que 8 dígitos.");
      }
   }, [zipcode]);

   /*******************************************************************************************
   ***************** OBSERVANDO ALTERAÇÕES NO ESTADO PARA MONTAR CIDADE ***********************
   ********************************************************************************************/
   useEffect(() => {
      if (state && !lockFields) {
         generateCities(state, "");
      }
   }, [state]);

   /*******************************************************************************************
   ****************************** BUSCANDO ESTADO E CIDADE ************************************
   ********************************************************************************************/
   async function getAddress() {
      try {
         const res = await sendRequest.getAddress({ "zipcode": zipcode });

         if (res && res.address && res.address.state && res.address.state.text) {
            setState(res.address.state.text);
            setLockFields(true);
            generateCities(res.address.state.text, res.address.city.text);
         } else {
            setState("");
            setCity("");
            setLockFields(false);
            console.log("Não achamos o CEP.");
         }
      } catch (error) {
         console.log(`Error: ${error}`)
      }
   }

   /*******************************************************************************************
   ************************** GERANDO COMPONENTE DAS CIDADES **********************************
   ********************************************************************************************/
   async function generateCities(currentState, currentCity) {
      try {
         //****************************************************************
         const res = await sendRequest.getAddress({ "state": currentState });
         //****************************************************************
         if (res && res.cities && res.cities.length > 0) {
            //Limpa o array de componentes ********************************
            do { Cities.pop() } while (Cities.length > 0);

            const itensCopy = Array.from(Cities);
            //Constrói o array de componentes *****************************
            itensCopy.push(<option value=''>Cidade</option>);
            //*************************************************************
            res.cities.forEach(city => {
               itensCopy.push(<option value={city.text}>{city.text}</option>);
            });
            //*************************************************************
            setCities(itensCopy);
            setCity(currentCity);
            //*************************************************************
         } else {
            console.log("Não achamos cidades para este estado");
         }
         //****************************************************************
      } catch (error) {
         console.log(`Error: ${error}`)
      }
   }

   /*******************************************************************************************
   ************************** GERANDO COMPONENTE DOS ESTADOS **********************************
   ********************************************************************************************/
   generateStateComponent();
   function generateStateComponent() {
      states.forEach(element => {
         States.push(<option value={element.nome}>{element.sigla} - {element.nome}</option>);
      });
   }

   return (
      <>
         <WrapperForm>
            <FieldContainer>
               <input
                  type="text"
                  name='Nome'
                  placeholder="Nome"
                  value={values.Nome}
                  onChange={handleChange}
               />
               <input
                  type="text"
                  name='Email'
                  placeholder="Email"
                  value={values.Email}
                  onChange={handleChange}
               />
            </FieldContainer>

            <div style={{ display: 'flex' }}>

               <select placeholder="Gênero">
                  <option value=''>Gênero</option>
                  <option value='Masculino'>Masculino</option>
                  <option value='Feminino'>Feminino</option>
                  <option value='Outros'>Outros</option>
               </select>

               <input
                  type="text"
                  placeholder="CEP"
                  onChange={value => setZipcode(value.target.value)}
                  value={zipcode}
               />

               <select
                  placeholder="Estado"
                  disabled={lockFields}
                  onChange={value => setState(value.target.value)}
                  value={state}
               >
                  {States}
               </select>
            </div>

            <FieldContainer>
               <select
                  placeholder="Cidade"
                  disabled={lockFields}
                  onChange={value => setCity(value.target.value)}
                  value={city}
               >
                  {Cities}
               </select>

               <select placeholder="Estado Civil">
                  <option value=''>Estado Civil</option>
                  <option value='Masculino'>Masculino</option>
                  <option value='Feminino'>Feminino</option>
                  <option value='Outros'>Outros</option>
               </select>
            </FieldContainer>


            <FieldContainer>
               <select placeholder="Tem filhos?">
                  <option value=''>Tem filhos?</option>
                  <option value='Masculino'>Masculino</option>
                  <option value='Feminino'>Feminino</option>
                  <option value='Outros'>Outros</option>
               </select>

               <select placeholder="Possui pai/mãe/sogro/ sogra vivos?">
                  <option value=''>Possui pai/mãe/sogro/ sogra vivos?</option>
                  <option value='Masculino'>Masculino</option>
                  <option value='Feminino'>Feminino</option>
                  <option value='Outros'>Outros</option>
               </select>
            </FieldContainer>

            <div style={{ marginTop: 20 }}>
               <Button title="Descubra o plano ideal pra você" />
            </div>

         </WrapperForm>


      </>
   )
}