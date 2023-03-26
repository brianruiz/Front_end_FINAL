import styles from '@/styles/Home.module.css'
import {HouseAPI} from "@/types";
import WizardList from "@/components/Wizard"
import Link from "next/link"



export async function getServerSideProps(){
    const props: Array<{
      name:string
  }> =[];
  
      const res= await fetch ("https://wizard-world-api.herokuapp.com/Wizards");
      const data = await res.json();
      props.push(
        data.map((house) => {
          const elixir= house.elixirs
          const first= house.firstName
          const last= house.lastName
              
          return{elixir, first, last};
        })
      );
       
        return{
          props:{
            data
          }
        };
  }
  
  
  type WizarProps ={
      data: Array<{
        name:string;
      }>;
  };
  export default function Houses(props:WizarProps) {
    return (
      <>
      <WizardList data= {props.data}></WizardList>
      <ul>
      <Link href="/"><div className="piepagina">Inicio</div></Link>
      </ul>
  
      </>
    )
  }