import "./styles.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { postText } from "../../storyTextTemp";

export default function MainCard() {
  const textArray = postText.split(" ");
  const stringArr = textArray.slice(0, 50);
  const textPiece = stringArr.join(" ");
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
              <Card.Text className="card-txt mx-3 mb-3 text-light">
                {textPiece.concat("...")}
              </Card.Text>
            </Card>
          </div>
        </Link>
      </Col>
    </>
  );
}
