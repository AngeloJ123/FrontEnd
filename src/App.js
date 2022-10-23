import axios from "axios";
import { useState } from "react";



function App() {
  return (
    <div>
      <h1 style={{"text-align":"center"}}>Student Registration</h1>
      <GetAll/>
    </div>
  );
}


const GetAll = () =>{
  const [data,setData] = useState([])
  
  axios.get("https://ec2-3-209-181-196.compute-1.amazonaws.com/api/v1/student")
  .then(
    response => setData(response.data)
  )

  return( 
  <div>
    {data.map(e=><Student name={e.name} email ={e.email} dob = {e.dob} age = {e.age} />)}
  </div>
  )
}

const Student = ({name,email,dob,age}) =>{
  return(
    <div>{name} {email} {dob} {age}</div>
  )
}

export default App;
