import { useState } from 'react';
function Arole(){

    const[name,setName]=useState("");
const[arole,setArole]=useState("");
const[list,setList]=useState([]);

const handleSumbit =(e)=>{
    e.preventDefault();
    console.log(name,arole);
    const data ={name,arole}
    if(name && arole)
{
    setList((ls)=>[ls,data])
    setName("")
    setArole("")
}
}

return(
    <div>
      <h1>AddRole</h1>
       <form onSubmit={handleSumbit}>
       <input name ="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
       <br /><br /><br />
       <input name ="arole" placeholder="arole" value={arole} onChange={(e)=>setArole(e.target.value)} />
       <br /><br />

       <button>Add</button>
       
       </form>
       
       {
        list.map((a)=>
        <div>
         <table>
         <tbody>
           <tr>
             <td>{a.name}</td>
             <td>{a.arole}</td>
             
           
           </tr>
         </tbody>
         
         </table>
        
        
        </div>
        
        )
       }
      

    </div>
);


}
export default Arole;