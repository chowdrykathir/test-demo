function Customer(props){
    console.log("Customer List--->",props.CustomerList);

  return(
  
    <div>
      <table border={1}>
      <h1>CUSTOMERLIST</h1>
        <tr>
         <td>cId</td>
         <td>Name</td>
         <td>Investment</td>
          <td>Mobile</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
        {props.CustomerList.map((customer,i) => (
            <tr>
              <td>{customer.cId}</td>
              <td>{customer.Name}</td>
              <td>{customer.Investment}</td>
              <td>{customer.Mobile}</td>
              <td>{customer.Email}</td>
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
  
  export default Customer;