import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function cards(props) {
  return (
    <Card ClassName='col-md-3' style={{ width: '18rem' ,margin:'10px'}}>
      <Card.Img variant="top" src={"assets/images/"+props.photo} style={{ height: '100%',padding:'10px' }}/>
      <Card.Body>
        <Card.Title>{props.nom}</Card.Title>
        <Card.Text>
          {props.hab} 
          {props.description}
        </Card.Text>
        <Button variant="success">VOIR MAINTENENT</Button>
      </Card.Body>
    </Card>
  );
}

export default cards;