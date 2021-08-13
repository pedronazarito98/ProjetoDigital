import React from 'react';

import { createBreakpoints } from "@chakra-ui/theme-tools";

import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react";

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
});

const ListItem = ({ onFullNameChange, onBirthDateChange, onDelete, value }) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <b>Dependente:</b> {value.fullName} ({value.birthDate})
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>

                <Flex width="full" align="center" justifyContent="flex-start" mt="4">
                    <FormControl isRequired>
                        <FormLabel>Nome Completo</FormLabel>
                        <Input
                            placeholder=""
                            value={value.fullName}
                            onChange={onFullNameChange}
                        />
                    </FormControl>
                </Flex>

                <Flex width="full" align="center" justifyContent="space-between">
                    <FormControl isRequired width={{ sm: "100%", md: "100%", lg: "48%", xl: "48%" }} mt="4">
                        <FormLabel>Data de Nascimento</FormLabel>
                        <Input
                            placeholder=""
                            type="date"
                            value={value.birthDate}
                            onChange={onBirthDateChange}
                        />
                    </FormControl>

                    <Button
                        width={{ sm: "100%", md: "100%", lg: "48%", xl: "48%" }}
                        mt="12"
                        ml="8"
                        colorScheme="red"
                        onClick={onDelete}
                    >
                        Excluir
                    </Button>
                </Flex>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default ListItem;