import Navbar from './composant_prod/navbar'
import Container from 'react-bootstrap/esm/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Allcards from './composant_prod/cards/Allcards';
import Alluti from './composant_prod/hoocs/tousuti';
import Photo from './composant_prod/photos';
import axios from 'axios';
import {  useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import { useForm } from 'react-hook-form';
import Db from './composant_prod/Basedonnee/db';


const api= axios.create({
  baseURL:'https://api.unsplash.com/search/photos'
})
function App() {

  const key="C8do7rYWidLAoBHHy2-dWQ_YLwsXmP-gbWCRoeTfGJo"
  const [val,setphotos]=useState([])

    //----------------------------------

  const [cle,setcle]=useState("sun")
  const {register,handleSubmit,watch}=useForm()

    //----------------------------------

  const onSub=(data)=>{
    console.log(data)
    console.log(watch('rech'))
    setcle(watch('rech'))
  }
    //------------------------------
  useEffect(
    ()=>{
     const getAllPhotos = async ()=>{
       await api.get('/?client_id='+key+'&query='+cle)
       .then((resp) => {
          console.log(resp.data.results)
          setphotos(resp.data.results)
      })
        
    }

    //-----------------------

  getAllPhotos()
  },[cle])

  return(
    <Container>
     
      <Navbar></Navbar> 
      <br></br>
      <Row>
      <h3>Api Unsplash :</h3>
      <form onSubmit={handleSubmit(onSub)}>
        <div class="input-group" >
          <div class="form-outline">
           <input id="search-input" type="search" class="form-control mt-3" placeholder="Rechercher" name="rech" {...register('rech')} required/>
          </div>
          <button  type="submit" class="btn btn-success mt-3">Search</button>
        </div>
      </form>
      </Row>
      <Row>
      {val.map(photo=> <Photo pic={photo.urls.small} name={photo.user.name} description={photo.alt_description} key={photo.id}></Photo>)}
      </Row>
      <br></br>
      <Db></Db>
      
      <Alluti></Alluti>
      
      <Allcards></Allcards>
    </Container>
  );
}

export default App;
