import { ChakraProvider, UnorderedList, Flex } from "@chakra-ui/react"
import { informations } from "../../../Mocks/EcommercePage/Plan";
import { Title, Content} from "./style";

export default function PaymentFormComponent(props) {

    function getTopics() {
        let array = [];

        informations.forEach(information => {
            array.push(
                <Flex flexDirection="column" textAlign="justify">
                    <Title>{information.title}</Title>
                    <Content>{information.description}</Content>
                    <br/>
                </Flex>
            );
        });

        return array;
    }

    return (
        <ChakraProvider>
            <br /><br />
            <Flex flexDirection="column" alignItems="center" justifyContent="flex-start" width="full">
                {getTopics()}
            </Flex>
        </ChakraProvider>
    )
}