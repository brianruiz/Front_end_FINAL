import styles from '@/styles/Home.module.css'
import {HouseAPI} from "@/types";
import HouseList from "@/components/House"
import Link from "next/link"




export async function getServerSideProps(){
  const props: Array<{
    name:string
}> =[];

    const res= await fetch ("https://wizard-world-api.herokuapp.com/Houses");
    const data: HouseAPI = await res.json();
    props.push(
      data.map((house) => {
        const name= house.name
        const founder= house.founder
        const room= house.commonRoom
        const traits=house.traits
        	
        return{name, founder, room, traits};
      })
    );
     
      return{
        props:{
          data
        }
      };
}


type HouseProps ={
    data: Array<{
      name:string;
    }>;
};
export default function Houses(props:HouseProps) {
  return (
    <>
    <HouseList data= {props.data}></HouseList>
    <ul>
    <Link href="/wizard/"> <div className="piepagina"> Magos </div></Link>
    </ul>
    </>
  )
}