import HeroCard from "./herocard/HeroCard";
import Aside from "../Aside/Aside";
import { Row, Col, Container } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="mt-4">
          <HeroCard />
        </Col>

        <Col md={4} className="mt-4">
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
