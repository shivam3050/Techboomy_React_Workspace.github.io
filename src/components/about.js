import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assests/images/img1.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function AppAbout() {
  const html = 80;
  const resp = 95;
  const photo = 60;
  const uiux = 85;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle"> learn more about us </div>
        </div>
        <Row>
          <Col>
            <Image src={img1} />
          </Col>
          <Col>
            <p>
              We are a team of passionate designers and developers dedicated
              to building modern, user-friendly websites for businesses of
              every size. From concept to launch, we focus on clean design,
              fast performance, and a smooth experience for every visitor.
            </p>
            <p>
              Over the years we have helped startups and established brands
              alike bring their ideas to life online, combining creative
              design with reliable, scalable technology to deliver results
              our clients can count on.
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>Responsive</h4>
              <ProgressBar now={resp} label={`${resp}%`} />
            </div>
            <div className="progress-block">
              <h4>Photoshop</h4>
              <ProgressBar now={photo} label={`${photo}%`} />
            </div>
            <div className="progress-block">
              <h4>UI / UX Design</h4>
              <ProgressBar now={uiux} label={`${uiux}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
