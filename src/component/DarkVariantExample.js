import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/4.jpg'
import img2 from '../images/5.jpg'
import img3 from '../images/6.jpg'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" style={{ padding: "10px", borderRadius: "50px" }} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: '600px', width: '500px', borderRadius: "50px", overflow: "hidden" }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ height: '600px', width: '500px', borderRadius: "50px", overflow: "hidden" }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ height: '600px', width: '500px', borderRadius: "50px", overflow: "hidden" }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;