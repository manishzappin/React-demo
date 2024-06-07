import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../images/4.jpg'

function Cardss() {
  return (
    <div style={{ padding: "10px" }} >
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ width: '18rem' }} variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary"  >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardss;