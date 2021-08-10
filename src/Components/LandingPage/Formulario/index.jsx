import { useEffect } from 'react';
import useForm, { validateInfo } from '../../../Hooks/LandingPage/useForm/index.js';
import { Button } from '../Button/index.js';

import { FieldContainer, WrapperForm } from './styles.js';


export function Formulario() {
   const { handleChange, handleSubmit, values, errors } = useForm(validateInfo);

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/21d8841a-20c5-4aa8-bba0-b43bd35c3461-loader.js";
      script.async = true
      document.body.appendChild(script);
   }, []);

   return (
      <>
      <WrapperForm>

         <FieldContainer>
            <input
               type="Nome"
               name='Nome'
               placeholder="Nome"
               value={values.Nome}
               onChange={handleChange}
            />
            <input
               type="email"
               name='Email'
               placeholder="Email"
               value={values.Email}
               onChange={handleChange}
            />
         </FieldContainer>

         <div style={{display:'flex'}}>

            <select placeholder="Gênero">
               <option value=''>Gênero</option>
               <option value='Masculino'>Masculino</option>
               <option value='Feminino'>Feminino</option>
               <option value='Outros'>Outros</option>
            </select>

            <input
               type="Cep"
               name='Cep'
               placeholder="Cep"
               value={values.Cep}
               onChange={handleChange}
            />

            <select placeholder="Estado">
               <option value=''>Estado</option>
               <option value='Masculino'>Masculino</option>
               <option value='Feminino'>Feminino</option>
               <option value='Outros'>Outros</option>
            </select>
         </div>

         <FieldContainer>
            <select placeholder="Cidade">
               <option value=''>Cidade</option>
               <option value='Masculino'>Masculino</option>
               <option value='Feminino'>Feminino</option>
               <option value='Outros'>Outros</option>
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

         {/* <button type="submit">
            cadastrar

         </button> */}
         <div style={{marginTop:20}}>
            <Button title="Descubra o plano ideal pra você"/>
         </div>


      </WrapperForm>
   
    
      </>
   )
}