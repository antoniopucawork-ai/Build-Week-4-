import HeroCard from "../../components/Main/MainSection/herocard/HeroCard";
import Aside from "../../components/Main/Aside/Aside";
import { Row, Col, Container } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="py-2">
      <Row>
        <Col md={8} className="mt-2">
          <HeroCard />
        </Col>

        <Col md={4} className="mt-2">
          <Aside />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
