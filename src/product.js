function Product(props){
    console.log("Product List--->",props.ProductList);

  return(
  
    <div>
      <table border={1}>
      <h1>PRODUCTLIST</h1>
        <tr>
         <td>code</td>
         <td>Name</td>
         
          <td>Action</td>
        </tr>
        {props.ProductList.map((product,i) => (
            <tr>
              <td>{product.code}</td>
              <td>{product.Name}</td>
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
  
  export default Product;