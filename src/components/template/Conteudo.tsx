import Flex from "./Flex";

interface ConteudoProps {
    children?: React.ReactNode
}

export default function Conteudo(props:ConteudoProps) {
    return (
        <Flex col center className="flex-1 text-gray-200">
            {props.children}
        </Flex>
    );
}
