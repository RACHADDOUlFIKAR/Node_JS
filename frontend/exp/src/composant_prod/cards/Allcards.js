import Container from 'react-bootstrap/esm/Container';
import Cards from './cards';
import Row from 'react-bootstrap/Row';



function Allcards() {
const cities = [
  {'nom':'Marrakech', 'hab':928850,'description':'','photo':'marrakech.jpg'},
  {'nom':'Agadir', 'hab':421844,'description':'','photo':'agadir.jpg'},
  {'nom':'Tanger', 'hab':947952,'description':'','photo':'tanger.jpg'},
  {'nom':'Fes', 'hab':1150000,'description':'','photo':'fes.jpg'},
  {'nom':'BeniMellal', 'hab':192676,'description':'','photo':'benimellal.jpg'},
  {'nom':'Essaouira', 'hab':77966,'description':'','photo':'essaouira.jpg'},
  {'nom':'Ouarzazate', 'hab':69420,'description':'','photo':'ouarzazat.jpg'},
  {'nom':'Dakhla', 'hab':106277,'description':'','photo':'dakhla.jpg'},
  {'nom':'Chefchaouan', 'hab':42786,'description':'','photo':'chefchaouan.jpg'},
  ];


const producti=cities.map(e=> <Cards nom={e.nom} hab={e.hab} description={e.description} photo={e.photo}></Cards>)



    return (
        <Container >
          <br></br>
          <h3>Creer Des Card Bootstrap En se Basant A Une Liste  :</h3>
          <br></br>
            <Row>
      {producti}
      </Row>
      </Container>
    );
  }
  export default Allcards;