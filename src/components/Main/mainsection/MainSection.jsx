import { Row, Col, Container } from "react-bootstrap";
import Aside from "../aside/Aside";
import MainLayout from "../MainLayout";
import { useProfile } from "../../../api/useProfile";


/* 
La home mostra il profilo dell'utente autenticato e
Senza questa fetch MainLayout riceveva profile undefined,
quindi HeroCard usciva con return null e la pagina restava senza intestazione
*/
const MainSection = () => {
  const { profile, loading, error, fetchProfile } = useProfile();

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
    <Container className="py-2">
      <Row>
        <Col md={8} className="mt-2">
          <MainLayout
            profile={profile}
            isOwnProfile
            fetchProfile={fetchProfile}
          />
        </Col>

        <Col md={4} className="mt-2">
          <Aside profile={profile} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
