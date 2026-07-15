import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assests/images/img-hero1.jpg"),
    title: "The perfect design for your website",
    description:
      "We craft clean, responsive websites tailored to your brand, helping you make a lasting first impression on every visitor.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assests/images/img-hero2.jpg"),
    title: "Start Your Future Financial Plan",
    description:
      "Let us help you turn your ideas into a solid digital strategy, built to grow with your business over time.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assests/images/img-hero3.jpg"),
    title: "Enjoy the Difference",
    description:
      "From design to development, we pay attention to every detail so your website stands out from the rest.",
    link: "https://www.twitter.com",
  },
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel data-bs-theme="dark" interval={4000} fade>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
