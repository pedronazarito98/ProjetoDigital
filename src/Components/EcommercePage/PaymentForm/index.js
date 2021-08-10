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
                        <Stack direction="row">
                            <Radio value="1">First</Radio>
                            <Radio value="2">Second</Radio>
                            <Radio value="3">Third</Radio>
                        </Stack>
                    </RadioGroup>
                </ChakraProvider>
                
                Idade do Titular
                <Line />
                Cadastrar Dependentes
                <Line />
            </Content>
        </>
    )
}