import { ChakraProvider, ListItem, UnorderedList, Flex } from "@chakra-ui/react"
import { topics } from "../../../Mocks/EcommercePage/Plan";

export default function PaymentFormComponent(props) {

    function getTopics() {
        let array = [];

        topics.forEach(topic => {
            array.push(<ListItem color="white">{topic}</ListItem>);
        });

        return array;
    }

    return (
        <ChakraProvider>
            <br /><br />
            <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" width="full" backgroundColor="var(--blue)" borderTopRadius="20">
                <UnorderedList mt="8" mb="8" ml="16" mr="8">
                    {getTopics()}
                </UnorderedList>
            </Flex>
            <div style={{ width: "100%", height: "10px", backgroundColor: "#D9A973", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} />

        </ChakraProvider>
    )
}