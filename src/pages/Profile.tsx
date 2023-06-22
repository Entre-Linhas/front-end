import {Header} from "../components/Header"


// interface ProfileProps {
//     username : string,
//     age: string,
//     exemple : string,
// }


export default function Profile() {

return (
<>

    <Header />

    <div className="px-8 py-40 max-w-xs flex flex-col gap-10 shadow-md border solid black">
        <div className="min-w-[18rem] h-96 bg-black"> 
         <img src=""/>
        </div>

        <div> 
            <h2 className="font-bold">Username</h2>
            <span>Membro</span>
        </div>
        <p>Olá! Me chamo username, tenho age, atuo no ramo exemple...</p>


        
        <ul>
            <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-black"></div>
                <span>Rede 01</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-black"></div>
                <span>Rede 02</span>
            </li>

            <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-black"></div>
                <span>Rede 03</span>
            </li>
        </ul>

        <ul>
         <li className="flex flex-col py-3">
            <span className="font-semibold">Nível</span>
            <span>01 - Aprendiz</span>
         </li>
         <li className="flex flex-col py-3">
            <span className="font-semibold">Membro desde</span>
            <span>00/00/00</span>
         </li>
        <li className="flex flex-col py-3">
            <span className="font-semibold">Nível</span>
            <span>07 dias</span>
            <span></span>
            <span></span>
         </li>
        </ul>

    </div>



</>
);


}