import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Design",
    description:
      "Your website will look and work great on every screen, from desktops to tablets and mobile phones.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative Design",
    description:
      "We design unique layouts and visuals that reflect your brand identity and keep visitors engaged.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimized",
    description:
      "Every page is built following SEO best practices, helping your site rank higher on search engines.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina Ready",
    description:
      "All graphics and images are optimized for high-resolution displays, keeping visuals sharp and clear.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Brower Compatibility",
    description:
      "We test across all major browsers to make sure your site works smoothly for every visitor.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Customer Support",
    description:
      "Our team is always available to help you with updates, fixes, and any questions after launch.",
  },
  {
    id: 7,
    icon: "fas fa-mobile-alt",
    title: "Mobile Friendly",
    description:
      "Built mobile-first, so your customers get a fast and smooth experience right from their phones.",
  },
];

export default function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">Services we provide</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
