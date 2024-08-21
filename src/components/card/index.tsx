import "./styles.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function MainCard() {
  return (
    <>
      <Col sm={6} lg={4} className="alig-items-center justify-content-center">
        <Link to="/post" className="text-decoration-none">
          <div className="card-wrapper">
            <Card className="text-center card-main">
              <div className="card-img_ctn">
                <Card.Img
                  variant="top"
                  src="../../../assets/images/witch.jpg"
                  className="card-img"
                />
              </div>
              <Card.Title className="fs-2 mt-3 mb-2">Title</Card.Title>
              <Card.Text className="mx-3 mb-3 text-light">
                8 milhões de testes aplicados todos os anos em mais de 14.000
                organizações de 160 países. O teste mais reconhecido do mundo
                para avaliação de proficiência em inglês.
              </Card.Text>
            </Card>
          </div>
        </Link>
      </Col>
    </>
  );
}

export default MainCard;
