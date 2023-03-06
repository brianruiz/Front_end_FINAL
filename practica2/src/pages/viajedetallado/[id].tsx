import IndexDetails from "@/components/IndexDetails";
import Link from "next/link";
import {useRouter} from 'next/router'
import { destinos} from  "@/data/data";



const Post = () => {
    const router = useRouter();
    const {id} =router.query;
    const destinoss= destinos.find((e)=>e.id===id);

    
    return( 
    <>  
        <div className= "Caja">
        <img className="LargeImage" src={destinoss?.imagen_larga}></img>
        <div className ="LargeText">
            <div className="Titulo">{destinoss?.destino}</div>
            <div className ="Desc">{destinoss?.descripcion_larga}</div>
        </div>
    </div>       
    <button className="boton" onClick={()=> router.push('/')}>Volver</button>
   
   
   
    </>
)
}

export default Post;
 
/*
type PageProps ={
    Titulo: string;
    Descripcion: string
    Imagen: string;
}
export default function Page(props:PageProps) {

    return(
        <>  
        <button type="button" onClick={()=> router.push('/')}>Volver</button>
        <div className= "Caja">
            <div className="LargeImage"> {props.Imagen}</div>
            <div className ="LargeText">
                <div className="Titulo">TITULO</div>
                <div className ="Desc"></div>
            </div>
        </div>    
        </> 
    )
}
*/
