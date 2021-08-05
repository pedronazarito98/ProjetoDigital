import { FaCity, FaAmbulance, FaMapMarkerAlt } from "react-icons/fa";
import { GiBrazil, GiReceiveMoney, GiTombstone } from "react-icons/gi";
import { IoIosPeople, IoMdPeople } from "react-icons/io";
export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1180 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1180, min: 685 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 685, min: 0 },
        items: 1
    }
};

export const cremationTitle01 = "A vida é feita de escolhas.";
export const cremationTitle02 = "O nosso amanhã também.";

export const cremationBoldText = "O mundo inteiro vem considerando, cada vez mais, a opção de cremação.";
export const cremationText01 = " Além do aspecto sustentável, ela elimina despesas de jazigo, manutenção, e a família decide exatamente o que fazer com as cinzas. Nessa opção, há diversas possibilidades de homenagem póstuma, e a cremação é aceita pela maioria das religiões.";
export const cremationText02 = "O Grupo Zelo possui uma estrutura exclusiva, que oferece a tranquilidade e a segurança necessárias.";



export const DataIcons = [
    {
        icon:<FaMapMarkerAlt/>,
        content:' 150 unidades'
    },
    {
        icon:<FaCity/> ,
        content:' 35 empresas'
    },
    {
        icon:<GiBrazil/> ,
        content:'8 estados, + Distrito Federal'
    },
    {
        icon:<GiReceiveMoney/> ,
        content:' Preços que cabem no seu bolso'
    },
    {
        icon:<GiTombstone/> ,
        content:'+120.000 jazigos em 5 cemitérios própios'
    },
    {
        icon:<IoMdPeople/> ,
        content:'+1.800 colaboradores diretos'
    },
    {
        icon:<IoIosPeople/> ,
        content:'+2.000.000 clientes'
    },
    {
        icon:<FaAmbulance/> ,
        content:'+550 veículos exclusivos'
    },
]