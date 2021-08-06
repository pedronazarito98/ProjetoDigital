import {  ContainerText } from "./style";

import {Button}  from '../Button/index'

export function TextInfo() {
    return(
        <ContainerText>
            <h1>
                Você já precisou lidar <br/>
                com um <strong> serviço funerário?</strong>
            </h1>

            <p>
               Se não, já imaginou o quanto é dificil <strong> resolver questões 
                legais, tomar decisões sobre velório, sepultamento e
                burocracias, como certidão de óbito?</strong> E o pior: nessa
                situação, as pessoas acabam pagando <strong>valores abusivos e indevidos </strong>
                porque não há tempo para pesquisar ou pensar com calma.
            </p>
            <p>
                Então, quando não têm um plano de assistência funerária, 
                você e sua família podem precisar arcar com diversas 
                <strong> despesas, gastos extras e inesperados.</strong>
            </p>

            <h2>
                Quem vai amparar a sua família no momento mais dificil?
            </h2>
            <Button title='saiba mais sobre cada plano'/>
        </ContainerText>
    )
}