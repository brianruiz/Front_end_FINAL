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
    const res= await fetch (`https://wizard-world-api.herokuapp.com/Wizards/${id}`);
    const data = await res.json();
    return{
        props: {
            data
        }
    };
}

type WizardProps ={
    data: Array<{
      name:string;
    }>;
}
export default function Wizard (props: WizardProps){
    console.log(props.data);
    return(
        <>
        <ul>
            <div className="mago"key={props.data.id}>{props.data.lastName} </div><br/>
            <span className="subtitle">Potions:</span>   
            {props.data.elixirs.map((w)=> (
                <Link href={`/elixiris/${w.id}`} className="links"><li key={w.id}> {w.name}, </li></Link>
            ))}
            <br/>
        <Link href="/wizard/"> <div className="piepagina"> Magos </div></Link>
        </ul>
        </> 
    )
}