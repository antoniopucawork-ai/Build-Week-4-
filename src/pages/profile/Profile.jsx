import MainLayout from "../../components/main/MainLayout";
import Aside from "../../components/main/aside/Aside";
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
      <StickyProfileBar profile={profile} isOwnProfile={!id} />
      <Container className="py-2">
        <Row>
          <Col md={8} className="mt-2">
            <MainLayout
              profile={profile}
              isOwnProfile={!id}
              fetchProfile={fetchProfile}
            />
          </Col>

          <Col md={4} className="mt-2">
            <Aside profile={profile}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
