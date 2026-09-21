import MainLayout from "../../components/main/MainLayout";
import Aside from "../../components/Main/aside/Aside";
import { StickyProfileBar } from "../../components/main/mainsection/stickyProfileBar/StickyProfileBar";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useProfile } from "../../api/useProfile";

const Profile = () => {
  const { id } = useParams();

  const { profile, loading, error, fetchProfile } = useProfile(id);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return null;
  }
  return (
    <>
      <StickyProfileBar />
      <Container fluid="md" className="py-2 px-md-3 px-lg-5">
        <Row>
          <Col lg={8} className="mt-2 px-0">
            <MainLayout
              profile={profile}
              isOwnProfile={!id}
              fetchProfile={fetchProfile}
            />
          </Col>

          <Col lg={4} className="mt-2">
            <Aside profile={profile}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
