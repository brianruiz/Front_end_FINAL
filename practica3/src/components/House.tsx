import Link from "next/link"

const HouseList =({ data}: {
    data:Array<{
        name:string;
        id:string;
    }>;
    traits:Array<{
        name:string;
        id:string;
    }>;
    heads:Array<{
        firstName:string;
        lastName:string;
        id:string;
    }>;
}) => {
    return(
        <div>
            <h1>Houses</h1>
            <ul>
                {data.map((house)=> (
                    <li key= {house.id}>
                        <h3> {house.name}</h3>
                        <span className="subtitle">Founder: </span>{house.founder}<br/>
                        <span className="subtitle"> CommonRoom: </span>{house.commonRoom}<br/>
                        <span className="subtitle">Traits: </span>
                        {house.traits.map((n)=> {
                            return <span key={n.id}>{n.name},  </span>//otro.map para los arrays
                        })}
                        <br/><span className="subtitle">Heads: </span>
                        {house.heads.map((n)=> {
                            return <span key={n.id}>{n.firstName}, </span>//otro.map para los arrays
                        })}
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default HouseList;