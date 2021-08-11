import { FaCity, FaAmbulance, FaMapMarkerAlt } from "react-icons/fa";
import { GiBrazil, GiReceiveMoney, GiTombstone } from "react-icons/gi";
import { IoIosPeople, IoMdPeople } from "react-icons/io";

import man from "../../Assets/LandingPage/man.png";
import lock from "../../Assets/LandingPage/lock.png";
import map from "../../Assets/LandingPage/map.png";
import mark from "../../Assets/LandingPage/mark.jpg";
import steve from "../../Assets/LandingPage/stevejobs.jpg";
import ellon from "../../Assets/LandingPage/ellon.jpg";

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
        icon: <FaMapMarkerAlt />,
        content: ' 150 unidades'
    },
    {
        icon: <FaCity />,
        content: ' 35 empresas'
    },
    {
        icon: <GiBrazil />,
        content: '8 estados, + Distrito Federal'
    },
    {
        icon: <GiReceiveMoney />,
        content: ' Preços que cabem no seu bolso'
    },
    {
        icon: <GiTombstone />,
        content: '+120.000 jazigos em 5 cemitérios própios'
    },
    {
        icon: <IoMdPeople />,
        content: '+1.800 colaboradores diretos'
    },
    {
        icon: <IoIosPeople />,
        content: '+2.000.000 clientes'
    },
    {
        icon: <FaAmbulance />,
        content: '+550 veículos exclusivos'
    },
];

export const employees = [
    {
        "img": mark,
        "name": "Mark Zuckerberg",
        "description": "Mark Elliot Zuckerberg é um programador e empresário norte-americano, que ficou conhecido internacionalmente por ser um dos fundadores do Facebook, a rede social mais acessada do mundo."
    },
    {
        "img": steve,
        "name": "Steve Jobs",
        "description": "Steven Paul Jobs foi um inventor, empresário e magnata americano no setor da informática. Notabilizou-se como co-fundador, presidente e diretor executivo da Apple Inc. e por revolucionar seis indústrias."
    },
    {
        "img": ellon,
        "name": "Ellon Musk",
        "description": "Elon Reeve Musk, é um empreendedor e filantropo sul-africano-canadense-americano. Ele é o fundador, CEO e CTO da SpaceX; CEO da Tesla Motors; vice-presidente da OpenAI, fundador e CEO da Neuralink."
    }
    ,
    {
        "img": ellon,
        "name": "Ellon Musk",
        "description": "Elon Reeve Musk, é um empreendedor e filantropo sul-africano-canadense-americano. Ele é o fundador, CEO e CTO da SpaceX; CEO da Tesla Motors; vice-presidente da OpenAI, fundador e CEO da Neuralink."
    }
];

export const plans = [
    {
        "img": lock,
        "title": "Seguradora",
        "text": "O auxílio funerário, nesse caso, é propocional ao valor do sinistro de seu seguro de vida, e nem sempre o benefício é extensivo aos seus dependentes."
    },
    {
        "img": man,
        "title": "Particular",
        "text": "Você deve conhecer antes a empresa com que vai contar, já que, no momento, você e sua família podem estar fragilizados para fazerem escolhas que podem sair muito caras."
    },
    {
        "img": map,
        "title": "Municipal",
        "text": "Você tem que lidar com as limitações das homenagens que deseja para seu ente querido, nem sempre conta com a privacidade e o conforto que precisa e pode ter que arcar com custos traslado."
    }
];