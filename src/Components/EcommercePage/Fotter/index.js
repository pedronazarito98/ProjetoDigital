// Styles ********************************************************
import { Fotter, CallCenter, Title } from "./style";
//****************************************************************
import { contacts } from "../../../Mocks/EcommercePage/Plan";

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

export default function PaymentPage(props) {

    function getCallCenter01() {
        let array = [];

        contacts.forEach(contact => {
            let numbers = contact.numbers.map(number => <div>{number}<br /></div>);

            array.push(
                <div>
                    <b>{contact.title}</b><br />
                    {numbers} <br />
                </div>
            );
        });

        return array;
    }

    return (
        <Fotter>
            {/* Central de Atendimento */}
            <CallCenter>
                <Title>Central de Atendimento</Title>
                {getCallCenter01()}
            </CallCenter>

            <CallCenter>
                <Button
                    width={{ sm: "100%", md: "100%", lg: "48%", xl: "48%" }}
                    bg="white"
                    color="var(--blue)"
                    type="submit"
                >
                    Adicionar
                </Button>
            </CallCenter>

        </Fotter>
    )
}