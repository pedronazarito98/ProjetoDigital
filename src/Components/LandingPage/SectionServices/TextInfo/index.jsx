import { Button } from "../../Button";
import { ContainerText } from "./styles";
import { CgPhone } from "react-icons/cg";

export function TextService() {
return(
        <ContainerText>
            <h1>
                A mais completa do mercado, os melhores planos para você.
            </h1>

            <p>
               Presente em vários estados brasileiros, o Grupo Zelo reune as
               melhores empresas do segmento para que você possa <strong> contar 
                com os melhores planos do mercado e a assistência mais completa. </strong>
                Hoje, são mais de 2.000 associados.
            </p>

            <p>
                E mais: com o Grupo Zelo você tem os melhores benefícios e 
                diferenciais no atendimento e no suporte, do início ao fim do processo.
            </p>
            
            <p>
                Ao todo são 2.000 cidades atendidas, e chegamos aonde você 
                precisar, em todo o Brasil, pois a nossa cobertura completa garante translado
                 ilimitado para a cidade do titular.
            </p>

            <article>
                <CgPhone/>
                <span>
                    <strong>
                        Uma central de óbitos funciona 24 horas por dia 
                    </strong>
                     {' '}para oferecer a você um atendimento e um suporte diferenciados.
                </span>
            </article>

            <h2>
                Nossos profissionais são preparados para atender você e sua familia, com atenção a todos 
                os detalhes e o carinho que todo mundo espera e precisa nessa hora tão difícil.
            </h2>
            <Button title='saiba mais sobre cada plano'/>
        </ContainerText>
    )
}