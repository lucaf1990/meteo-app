import { Col, Row, Container } from "react-bootstrap";
import MainCityCard from "./MainCityCard";

const MyContainer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row className="mt-5   ">
            <Col xs={3}>
              <MainCityCard city={"Milan"} />
            </Col>
            <Col xs={3}>
              <MainCityCard city={"New York"} />
            </Col>
            <Col xs={3}>
              <MainCityCard city={"Amsterdam"} />
            </Col>
            <Col xs={3}>
              <MainCityCard city={"London"} />
            </Col>

            <Col className="mt-5 ">
              <MainCityCard xs={3} city={"Los Angeles"} />
            </Col>
            <Col className="mt-5 mb-5">
              <MainCityCard xs={3} city={"Paris"} />
            </Col>
            <Col className="mt-5 mb-5">
              <MainCityCard xs={3} city={"Rome"} />
            </Col>
            <Col className="mt-5 mb-5">
              <MainCityCard xs={3} city={"Tokyo"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MyContainer;
