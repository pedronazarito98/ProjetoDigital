import { ChakraProvider, Flex, Icon } from "@chakra-ui/react"
import { MdStar } from "react-icons/md"
import { Title, CommentCard, Content } from "./style";
/* import { topics } from "../../../Mocks/EcommercePage/Plan";
 */
export default function PaymentFormComponent(props) {

    /* function getTopics() {
        let array = [];

        topics.forEach(topic => {
            array.push(<ListItem color="white">{topic}</ListItem>);
        });

        return array;
    } */

    return (
        <ChakraProvider>
            <br /><br />
            <Flex alignItems="center" justifyContent="space-around" width="full" flexWrap="wrap">
                <CommentCard>
                    <Title>Regina Miles</Title>

                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#FFF" />

                    <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Content>
                </CommentCard>
                <CommentCard>
                    <Title>Regina Miles</Title>

                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#F2CD03" />
                    <Icon as={MdStar} w={8} h={8} color="#FFF" />

                    <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Content>
                </CommentCard>
            </Flex>
        </ChakraProvider>
    )
}