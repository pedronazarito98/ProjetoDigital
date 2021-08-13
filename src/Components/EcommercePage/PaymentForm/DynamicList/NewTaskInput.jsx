import React, { useState } from 'react';
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    extendTheme,
    Button
} from "@chakra-ui/react";

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
});

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const NewTaskInput = ({ onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    function submit(e) {
        e.preventDefault();
        onSubmit({ "fullName": fullName, "birthDate": birthDate });
    }

    return (
        <form onSubmit={submit}>
            <Flex width="full" align="center" justifyContent="flex-start" mt="4">
                <FormControl isRequired>
                    <FormLabel>Nome Completo</FormLabel>
                    <Input placeholder="" onChange={e => setFullName(e.target.value)} />
                </FormControl>
            </Flex>

            <Flex width="full" align="center" justifyContent="space-between">
                <FormControl isRequired width={{ sm: "100%", md: "100%", lg: "48%", xl: "48%" }} mt="4">
                    <FormLabel>Data de Nascimento</FormLabel>
                    <Input placeholder="" type="date" onChange={e => setBirthDate(e.target.value)} />
                </FormControl>

                <Button
                    width={{ sm: "100%", md: "100%", lg: "48%", xl: "48%" }}
                    mt="12"
                    ml="8"
                    bg="var(--blue)"
                    color="white"
                    type="submit"
                    _hover={{
                        color: "var(--blue)",
                        transform: "scale(0.98)",
                        bg: "#bec3c9"
                    }}
                >
                    Adicionar
                </Button>
            </Flex>
        </form>
    )
};

export default NewTaskInput;