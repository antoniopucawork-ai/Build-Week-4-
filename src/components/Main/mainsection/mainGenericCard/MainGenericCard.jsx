import { Container, Row, Col } from "react-bootstrap";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";
import "./MainGenericCard.css";

const MainGenericCard = ({ title }) => {
  return (
    <Container className="genericCard">
      <Row>
        <Col className="genericCardHeader">
          <h5>{title}</h5>
          <div>
            <LinkedinButton customVariant={BUTTON_VARIANT.ICON_ONLY.PLUS} />
            <LinkedinButton customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default MainGenericCard;
