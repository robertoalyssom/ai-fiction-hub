import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MainCard from "../card";

const Main: React.FC = () => {
  return (
    <main className="text-center">
      <h2 className="my-5 fs-1">All Stories</h2>
      <section className="section-stories d-flex flex-wrap justify-content-center">
        <Container>
          <Row className="mb-5 row-gap-5">
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Main;
