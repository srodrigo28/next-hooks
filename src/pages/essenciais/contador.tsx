import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function(){
    let [count, setCount] = useState(0)
    return(
        <Pagina titulo="Contador 1" subtitulo="Entendo estaudos com useState 1">
            <Display texto={count} />
            <Flex gap={5}>
                <Botao 
                    redondo
                    icone={<IconMinus size={40} />}
                    cor="bg-blue-500"
                    onClick={ () => setCount(count-1) }
                ></Botao>

                <Botao 
                    redondo
                    icone={<IconPlus size={40} />}
                    cor="bg-red-500"
                    onClick={ () => count=0}
                ></Botao>

                <Botao 
                    redondo
                    icone={<IconMinus size={40} />}
                    cor="bg-green-500"
                    onClick={ () => setCount(count+1) }
                ></Botao>
            </Flex>
        </Pagina>
    )
}