import { useState } from "react";
import { Title, Form, Line } from "./style";
import { ChakraProvider, Radio, RadioGroup, Flex, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import DynamicList from "./DynamicList";

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
})
// 3. Extend the theme
const theme = extendTheme({ breakpoints })

export default function PaymentFormComponent(props) {
    const [cremationValue, setCremationValue] = useState(1);
    const [yearsValue, setYearsValue] = useState(1);

    return (
        <ChakraProvider>
            {/* <Title>Complemente seu plano</Title> */}
            <Form style={{ "marginTop": 16 }}>
                Cremação
                <Line />
                <RadioGroup onChange={setCremationValue} value={cremationValue}>
                    <Flex width="full" align="center" justifyContent="space-between" flexWrap="wrap">
                        <Radio value="1">Sem Cremação</Radio>
                        <Radio value="2">Com Cremação</Radio>
                    </Flex>
                </RadioGroup>
                <br />
                Idade do Titular
                <Line />
                <RadioGroup onChange={setYearsValue} value={yearsValue}>
                    <Flex width="full" align="center" justifyContent="space-between" flexWrap="wrap">
                        <Radio value="1">64 anos ou menos</Radio>
                        <Radio value="2">65 anos ou mais</Radio>
                    </Flex>
                </RadioGroup>
                <br />
                Cadastrar Dependentes
                <Line />

                <DynamicList />

            </Form>

        </ChakraProvider>
    )
}