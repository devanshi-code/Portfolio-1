import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Devanshi Mishra </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am currently pursuing B.Tech Computer Science 
            and Information Technology from Dronacharya College Of Engineering,Gurgaon.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To start the things is first step towards achieving your goals."{" "}
          </p>
          <footer className="blockquote-footer">Devanshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
