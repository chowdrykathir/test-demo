import { useState } from "react";
function Adduser(){

    const[inputarr,setInputarr] =useState([])
    const[inputdata,SetInputdata] =useState({ name:"", role:"" })

    function changehandle(e){

        SetInputdata({inputdata,[e.target.name]:e.target.value})

    }
    
    let {name,role} =inputdata;

    function changhandle(){

        setInputarr([inputarr,{name,role}])
        
        console.log(inputdata,"input data what we Enter");
        SetInputdata({name:"",role:""})
      

    }

    function changhandle1(){
        console.log("Object store in array",inputarr);

    }

    return(
        
        <div>
          <input type="text" name="name" value={inputdata.name} onChange={changehandle} placeholder="name" /> <br /> <br /> <br /> 
          <input type="text" name="role" value={inputdata.role} onChange={changehandle} placeholder="role" /> <br /> <br /> <br />
          <button onClick={changhandle}>Add</button><br /> <br />
          <button onClick={changhandle1}>check array in console</button><br /> <br />


          <table border={1} width="30%" cellPadding={10}>
          
          <tbody>
          <tr>
          <td>Name</td>
          <td>Role</td>
         </tr>

         inputarr.map{
           (info,ind)=>{
               return (
                   <tr key={ind}>
                     <td>{info.name}</td>
                     <td>{info.role}</td>
                   </tr>
               )
           }
       }
          </tbody>
          
        
          </table>


          
        </div>

       
    );


}
export default Adduser;
