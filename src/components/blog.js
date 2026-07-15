import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const blogData = [
  {
    id: 1,
    image: require("../assests/images/blog1.jpg"),
    time: "15 Nov 2016",
    readTime: "3 min read",
    title: "Coffee Lovers",
    description:
      "Discover how a good cup of coffee can boost your creativity and productivity during long design and coding sessions.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assests/images/blog2.jpg"),
    time: "10 Nov 2016",
    readTime: "5 min read",
    title: "Tips for UI Design",
    description:
      "A few practical tips to help you design cleaner, more intuitive user interfaces that visitors actually enjoy using.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assests/images/blog3.jpg"),
    time: "07 Nov 2016",
    readTime: "2 min read",
    title: "Beautiful Day",
    description:
      "Sometimes the best ideas come from stepping away from the screen. Here's why breaks matter for creative work.",
    link: "https://www.twitter.com",
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>latest from blog</h2>
          <div className="subtitle"> get our latest news from blog</div>
        </div>

        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <span className="read-time">{blog.readTime}</span>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      ;
    </section>
  );
}
