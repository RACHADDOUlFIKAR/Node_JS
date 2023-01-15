
import Card from 'react-bootstrap/Card';

function Uti(props) {
  return (
    <Card ClassName='col-md-3' style={{ width: '18rem' ,margin:'10px'}}>
     
      <Card.Body>
        <Card.Title>{props.id}</Card.Title>
        <Card.Text>
          {props.title} 
          {props.body}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Uti;