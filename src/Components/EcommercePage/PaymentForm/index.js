import { useState } from "react";
import { Title, Content, Line } from "./style";
import { ChakraProvider, Radio, RadioGroup, Stack } from "@chakra-ui/react";

export default function PaymentFormComponent(props) {
    const [value, setValue] = useState(1);

    return (
        <>
            <Title>Complemente seu plano</Title>
            <Content>
                Cremação
                <Line />
                <ChakraProvider>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="row" spacing="50%">
                            <Radio value="1">Sem Cremação</Radio>
                            <Radio value="2">Com Cremação</Radio>
                        </Stack>
                    </RadioGroup>
                </ChakraProvider>
                <br />

                Idade do Titular
                <Line />
                <ChakraProvider>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="row" spacing="46.5%">
                            <Radio value="1">64 anos ou menos</Radio>
                            <Radio value="2">65 anos ou mais</Radio>
                        </Stack>
                    </RadioGroup>
                </ChakraProvider>
                <br />

                Cadastrar Dependentes
                <Line />
            </Content>
        </>
    )
}