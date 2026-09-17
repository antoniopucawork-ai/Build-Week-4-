import HeroCard from "./herocard/HeroCard";
import Aside from "../Aside/Aside";
import { Row, Col, Container } from "react-bootstrap";

const MainSection = () => {
  
  return (
    <Container className="py-2">
      <Row>
        <Col md={8} className="mt-2 ColMain">
          <HeroCard />
        </Col>

        <Col md={4} className="mt-2 ColAside">
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
