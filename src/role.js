function Role(props){
    console.log("Role List--->",props.RoleList);

  return(
  
    <div>
      <table border={1}>
      <h1>RoleLIST</h1>
        <tr>
         <td>Id</td>
          <td>Role</td>
          <td>Name</td>
          <td>Action</td>
        </tr>
        {props.RoleList.map((role,i) => (
            <tr>
              <td>{role.Id}</td>
              <td>{role.Role}</td>
              <td>{role.Name}</td>
              <td>
              <button>Edit</button>
              <button>Delete</button>

              </td>
            </tr>
          
          ))}
      
        
        </table>

        
       </div>
  
  
  
  
  
  
  
      );
  
  
  }
  
  export default Role;