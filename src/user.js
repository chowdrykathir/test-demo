
function User(props){
    console.log("User List--->",props.UserList);

  return(
  
    <div>
      <table border={1}>
      <h1>USERLIST</h1>
        <tr>
         <td>Id</td>
          <td>Role</td>
          <td>Name</td>
          <td>Mobile</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
        {props.UserList.map((user,i) => (
            <tr>
              <td>{user.Id}</td>
              <td>{user.Role}</td>
              <td>{user.Name}</td>
              <td>{user.Mobile}</td>
              <td>{user.Email}</td>
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
  
  export default User;

 /*
          {props.userList}
          {props.userList.map=(user) =>{
            console.log("user",user);
          }}  

        */

/*{props.userList.map((user) => {
          return(
            <tr>
              <td>{user.Id}</td>
              <td>{user.Role}</td>
              <td>{user.Name}</td>
              <td>{user.Mobile}</td>
              <td>{user.Email}</td>
              <td>{user.Edit}</td>
            </tr>
          )
        })}
*/