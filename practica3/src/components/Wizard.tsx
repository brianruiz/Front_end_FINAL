import Link from "next/link"

const WizardList =({ data}: {
    data:Array<{
        name:string;
        id:string;
    }>;

}) => {
    return(
        <div>
            <h1>Wizards</h1>
            <ul>
                {data.map((wizard)=> (
                    <li key= {wizard.id}>
                        <Link href={`/wizard/${wizard.id}`}> <span className="magos">{wizard.firstName} {wizard.lastName}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default WizardList;