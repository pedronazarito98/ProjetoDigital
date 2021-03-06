import { useState } from "react";
import { Title, Content, Line } from "./style";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export default function PaymentFormComponent(props) {
    const [value, setValue] = useState(1);

    return (
        <>
            <Title>Complemente seu plano</Title>
            <Content>
                Cremação
                <Line />
                
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row">
                        <Radio value="1">First</Radio>
                        <Radio value="2">Second</Radio>
                        <Radio value="3">Third</Radio>
                    </Stack>
                </RadioGroup>

                Idade do Titular
                <Line />
                Cadastrar Dependentes
                <Line />
            </Content>
        </>
    )
}