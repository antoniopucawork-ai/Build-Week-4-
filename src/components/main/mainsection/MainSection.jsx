import Aside from "../aside/Aside"
import { Row, Col, Container } from "react-bootstrap";
import MainLayout from "../MainLayout"
const MainSection = () => {
  
  return (
    <Container className="py-2">
      <Row>
        <Col md={8} className="mt-2">
          <MainLayout />
        </Col>

        <Col md={4} className="mt-2">
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
