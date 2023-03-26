import WizardsList from "@/components/Wizards";
import Link from "next/link";
import {useRouter} from 'next/router'
import styles from '@/styles/Home.module.css'


type ServerSideProps= {
    params:{
            id:string;
    }
}

export async function getServerSideProps(props: ServerSideProps){
    const id = props.params.id;
    const res= await fetch (`https://wizard-world-api.herokuapp.com/Elixirs/${id}`);
    const data = await res.json();
    return{
        props: {
            data
        }
    };
}

type ElixirProps ={
    data: Array<{
      name:string;
    }>;
}
export default function Elixir (props: ElixirProps){
    console.log(props.data);
    return(
        <>
        <ul>
            <div key={props.data.id}><span className="mago">{props.data.name}</span><br/>
            <span className="subtitle">Effects: </span><span>{props.data.effect}</span><br/>
            <span className="subtitle">SideEffects: </span><span>{props.data.SideEffect}</span><br/>
            <span className="subtitle">Characteristics: </span><span>{props.data.characteristics}</span><br/>
            <span className="subtitle">Time: </span><span>{props.data.Time}</span><br/>
            <span className="subtitle">Difficulty: </span><span>{props.data.difficulty}</span><br/>
            <span className="subtitle">Manufacturer: </span><span>{props.data.manufacturer}</span><br/>
            <span className="subtitle">Ingredients: </span>
            {props.data.ingredients.map((w)=> (
                <span  key={w.id}> {w.name} </span>
            ))}
            <br/><span className="subtitle">Inventors: </span>

            {props.data.inventors.map((w)=> (
                <span  key={w.id}> {w.firstName} {w.lastName}</span>
            ))}
            </div>
            <Link href={`/wizard/`}> <div className="piepagina"> Magos </div></Link>
        </ul>
        </> 
    )
}
