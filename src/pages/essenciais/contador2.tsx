import Pagina from "@/components/template/Pagina";
import Flex from "@/components/template/Flex";
import { useState } from "react";

export default function(){
    let [count, setCount] = useState(0)

    function handleAdd(){
       //  alert('Add')
        if(count < 20){
            setCount(count+1)
        }else{
            alert('Máximo permitido é 20')
        }
    }

    function handleRemove(){
        if(count > 0) {
            setCount(count-1)
        }
    }
    return(
        <Pagina titulo="Contador 2" subtitulo="Entendo estaudos com useState 2">
            <h1 className="text-7xl">
                {count}
            </h1>
            <Flex gap={5}>
                <button onClick={handleAdd} className="bg-green-500 p-2 w-10 rounded-md">+</button>
                <button className="bg-red-500 p-2 w-16 rounded-md">reset</button>
                <button onClick={handleRemove} className="bg-blue-500 p-2 w-10 rounded-md">-</button> 
            </Flex>
        </Pagina>
    )
}