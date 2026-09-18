import MainLayout from "../../components/main/MainLayout"
import Aside from "../../components/Main/Aside/Aside";
import { StickyProfileBar } from "../../components/main/mainsection/stickyProfileBar/StickyProfileBar";
import { Row, Col, Container } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <StickyProfileBar />
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
    </>
  );
};

export default Profile;
