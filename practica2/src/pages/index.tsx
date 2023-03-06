import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import IndexDetails from "@/components/IndexDetails";
import { destinos} from  "@/data/data";







export default function Home() {


  return(
    <>
    
    
    {destinos.map(n=>(
    <div>
    <div><Link href={`/viajedetallado/${n.id}`}><IndexDetails  Imagen={n.imagen_corta} Titulo={n.destino} Descripcion={n.descripcion_corta}></IndexDetails></Link></div>
    </div>
    ))}
    
    
    
    
    </>
  )
}
