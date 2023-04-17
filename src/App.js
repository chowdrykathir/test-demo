import User from './user.js';
import Role from './role.js';
import Customer from './customer.js';
import Product from './product.js';
import Arole from './arole.js';
// Just for testing purposes
// update our code for compare with existing branch
function App(){

    var user = [{
        Id:101,
        Role:'Manager',
        Name:'surya',
        Mobile:9000002220,
        Email:'surya@gmail.com'
    },
    {
        Id:102,
        Role:' Asst.Manager',
        Name:'ajith',
        Mobile:9000002221,
        Email:'ajith@gmail.com'
    },
    {
        Id:103,
        Role:'TL',
        Name:'vijay',
        Mobile:9000002222,
        Email:'vijay@gmail.com'
    },
    {
        Id:104,
        Role:'ios developer',
        Name:'arun',
        Mobile:9000002223,
        Email:'arun@gmail.com'
    },
    {
        Id:105,
        Role:'android developer',
        Name:'rahul',
        Mobile:9000002224,
        Email:'rahul@gmail.com'
    },
    {
        Id:106,
        Role:'reactjs',
        Name:'virat',
        Mobile:9000002225,
        Email:'virat@gmail.com'
    },
    {
        Id:107,
        Role:'java developer',
        Name:'dhoni',
        Mobile:9000002226,
        Email:'dhoni@gmail.com'
    },
    {
        Id:108,
        Role:'testing',
        Name:'siva',
        Mobile:9000002227,
        Email:'siva@gmail.com'
    },
    {
        Id:109,
        Role:'testing',
        Name:'vijay',
        Mobile:9000002228,
        Email:'vijay@gmail.com'
    },
    {
        Id:110,
        Role:'Admin',
        Name:'karthi',
        Mobile:9000002229,
        Email:'karthi@gmail.com'
    }
    
    ]

    var role = [{
        Id:101,
        Role:'Manager',
        Name:'surya',
       
    },
    {
        Id:102,
        Role:'Admin',
        Name:'vijay',
       
    },

    {
        Id:103,
        Role:'HR',
        Name:'Ajth',
       
    },
]

var customer = [{
    cId:100001,
    Name:'surya',
    Investment:10000000,
    Mobile:9000002220,
    Email:'surya@gmail.com'

},

{
    cId:100002,
    Name:'arun',
    Investment:20000000,
    Mobile:9000002298,
    Email:'arun@gmail.com'

},

{
    cId:100003,
    Name:'vijay',
    Investment:30000000,
    Mobile:9000002209,
    Email:'vijay@gmail.com'

}]

var product = [{
    code:100011,
    Name:'coffee',
    

},
{
    code:100022,
    Name:'tea',
    

},

]




    console.log("user List", user);
    console.log("role List", role);
    console.log("customer List", customer);
    console.log("product List", product);
  

return(
   
    <div>

            <User UserList={user} />
            <Role RoleList={role} />
            <Customer CustomerList={customer} />
            <Product ProductList={product} />
            <Arole />
           
    </div>
)
    


}
export default App;