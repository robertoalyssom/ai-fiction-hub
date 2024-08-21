import { Link } from "react-router-dom";
import { postText } from "../../storyTextTemp";
import "./styles.css";

export default function Post() {
  const phasesArray = postText.split(". ");
  const pElements = phasesArray.map((paragraph, index) => (
    <p key={index} className="post-txt">
      {paragraph}
    </p>
  ));

  return (
    <section className="post d-flex flex-column align-items-center">
      <div className="post-ctn col-12 col-sm-11 col-md-10 col-xl-9 col-xxl-8 -">
        <h1 className="w-auto text-center mt-3">Post Title</h1>
        <img
          src="../../../assets/images/witch.jpg"
          alt=""
          className="post-img post mt-4 w-100"
        />
        <div className="my-4 my-sm-5 ms-3 ms-sm-0">
          <p className="post-details">
            Por{" "}
            <Link to={"#"} className="post-link">
              Robrt Paiva{" "}
            </Link>{" "}
            | 20/08/2024 |{" "}
            <Link to={"#"} className="post-link">
              Fantasia
            </Link>
          </p>
        </div>
        <div className="post-txt_ctn mb-5 mx-md-5 px-3 px-sm-0">
          {pElements}
        </div>
      </div>
    </section>
  );
}
