import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Sty(props) {
  return (
    <Card ClassName='col-md-3' style={{ width: '18rem' ,margin:'10px'}}>
    <Card.Img variant='top' src={"assets/images/"+props.pic} style={{ height: '12rem',padding:'10px',borderRadius:'20px' }}/>

      <Card.Body>
        <Card.Title>{props.libele}</Card.Title>
        <Card.Text>
          <p><b>Categorie : </b>{props.categorie} </p>
          <p><b>Prix :</b> {props.prix} DH</p>
        </Card.Text>
        
        <Button variant="primary">Acheter Maintenent</Button>
      </Card.Body>
    </Card> 
  );
}

export default Sty;