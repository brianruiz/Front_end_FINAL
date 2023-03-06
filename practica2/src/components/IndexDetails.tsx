type IndexDetailsProps ={
    Titulo:string;
    Descripcion:string;
    Imagen: string;
}

const IndexDetails =(props: IndexDetailsProps) => {
    return(
        <>
    <div className ="Fila">
        <img className="Image"  src={props.Imagen}></img>
            <div className ="Texto">
                <div className="Titulo"> {props.Titulo}</div>
                <div className="Desc">{props.Descripcion}</div>
            </div>
    </div>
        </>
    )
}

export default IndexDetails;