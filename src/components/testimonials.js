import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

var testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "The team understood our requirements perfectly and delivered a website that exceeded our expectations. Communication throughout the project was excellent.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "Working with this team was a smooth experience from start to finish. They were responsive, professional, and delivered exactly what we needed on time.",
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "Our new website has significantly improved how customers view our brand. The design quality and attention to detail really stood out.",
    designation: "CEO",
  },
  {
    id: 4,
    name: "Olivia Turner",
    description:
      "Since launching our new site, we have seen a noticeable increase in inquiries. Highly recommend this team for any web project.",
    designation: "Marketing Head",
  },
];

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>

        <Carousel data-bs-theme="dark">
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
