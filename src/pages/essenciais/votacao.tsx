import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";

export default function(){
    return(
        <Pagina titulo="Votação" subtitulo="Usando estado com objeto">
            <Flex col center>
                <Display texto="Qual melhor cor?" textoComplementar={`Verde:Y | Roxo: X`} />
            </Flex>
        </Pagina>
    )
}