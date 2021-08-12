import { useState } from "react";
import { Title, Content, Line } from "./style";
import {
    ChakraProvider, Radio, RadioGroup, Stack,
    FormControl,
    FormLabel,
    Input, Button, Flex, Center
} from "@chakra-ui/react";

export default function PaymentFormComponent(props) {
    const [cremationValue, setCremationValue] = useState(1);
    const [yearsValue, setYearsValue] = useState(1);

    return (
        <ChakraProvider>
            <Title>Complemente seu plano</Title>
            <Content>
                Cremação
                <Line />

                <RadioGroup onChange={setCremationValue} value={cremationValue}>
                    <Stack direction="row" spacing="50%">
                        <Radio value="1">Sem Cremação</Radio>
                        <Radio value="2">Com Cremação</Radio>
                    </Stack>
                </RadioGroup>

                <br />

                Idade do Titular
                <Line />
                <RadioGroup onChange={setYearsValue} value={yearsValue}>
                    <Stack direction="row" spacing="46.5%">
                        <Radio value="1">64 anos ou menos</Radio>
                        <Radio value="2">65 anos ou mais</Radio>
                    </Stack>
                </RadioGroup>
                <br />

                Cadastrar Dependentes
                <Line /><br />

                <form>
                    <Flex width="full" align="center" justifyContent="flex-start">
                        <FormControl id="first-name" isRequired>
                            <FormLabel>Nome Completo</FormLabel>
                            <Input placeholder="" type="text" />
                        </FormControl>
                    </Flex>

                    <Flex width="full" align="center" justifyContent="center" mt="2">
                        <Center w="50%">
                            <FormControl id="date" isRequired>
                                <FormLabel>Data de Nascimento</FormLabel>
                                <Input placeholder="" type="date" />
                            </FormControl>
                        </Center>

                        <Center w="30%" mt="8" ml="2">
                            <Button width="full" type="submit">
                                ADICIONAR
                            </Button>
                        </Center>

                        <Center w="20%" mt="8" ml="2">
                            <Button width="full" type="submit">
                                ENVIAR
                            </Button>
                        </Center>
                    </Flex>
                </form>
            </Content>
        </ChakraProvider>
    )
}