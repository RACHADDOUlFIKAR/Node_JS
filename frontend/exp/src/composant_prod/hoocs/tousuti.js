import Container from 'react-bootstrap/esm/Container';
import Uti from './uti';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';



function Alluti() {

  const [user,setuser]=useState([])

  useEffect(()=>{getuser()},[])
  const getuser=async()=>{

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response)=>response.json()).then((data)=>{
        setuser(data)

    }).catch((err)=>{
        console.log(err)

    })
  }


const tti=user.map(u=> <Uti id={u.id} title={u.title} body={u.body} ></Uti>)



    return (
        <Container >
       <h3>Get Info Json :</h3>   
      <Row>
      {tti}
      </Row>
      </Container>
    );
  }
  export default Alluti;