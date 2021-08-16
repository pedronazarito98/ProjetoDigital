import FamilyKid from '../../../../../Assets/EcommercePage/familyKid.png';

import { Container, WrapperContent, WrapperImg } from './style';

export function InfoPlanos() {

    return (
        <>
            <Container>
                <WrapperImg>
                    <img src={FamilyKid} alt="" />
                </WrapperImg>

                <WrapperContent>
                    <h1>Mais de 2 milhões de pessoas já contam com a tranquilidade de ser clientes do Grupo Zelo!</h1>

                    <h3>Mais de 2 milhões de pessoas já contam com a tranquilidade de ser clientes do Grupo Zelo!</h3>

                    <p>Somos a escolha perfeita em planos funerários, com infraestrutura de primeira qualidade, atendimento diferenciado e com preços justos.</p>

                    <p> Reunimos as melhores empresas do segmento, especialmente para que você e as pessoas que você ama tenham a assistência mais completa no momento que mais precisar.</p>
                </WrapperContent>
            </Container>
        </>
    )

}