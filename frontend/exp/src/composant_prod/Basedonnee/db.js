
import Container from 'react-bootstrap/esm/Container';
import Sty from './sty';
import axios from 'axios';
import {  useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Pagination from 'react-bootstrap/Pagination';

const api= axios.create({
  baseURL:'http://localhost:4000/api/rachad'
})
function Db() {
  
  const [val,setproduits]=useState([])
  const [page,setpage]=useState(1)
  const [totapage,totasetpage]=useState(2)

  
  
  useEffect(
    ()=>{
    //------------------------------
     const getAllProduct = async ()=>{
       api.get('/products?page='+page+'&limit=2')
       .then((resp) => {
          console.log(resp.data.produits)
          setproduits(resp.data.produits)
      })
      
     

     
        
    }

    //-----------------------
  getAllProduct() 
  
  },[page])
let items = [];
      for (let number = 1; number <= totapage; number++) {
        items.push(
          <Pagination.Item onClick={()=>setpage(number)} key={number} active={number === page}>
            {number}
          </Pagination.Item>,
        );
      }
  return(
    <Container>
     
      
      
     <h3>Les Produits de la Base De Donnée :</h3>
      <Row>
      {val.map(produit=> <Sty pic={produit.picture} categorie={produit.categorie} libele={produit.libele}  prix={produit.prix} ></Sty>)}
      </Row>
      <div>
          <Pagination>{items}</Pagination>
          <br />

         
        </div>
      
    </Container>
  );
}

export default Db;
