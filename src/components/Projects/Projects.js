import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import highfive from "../../Assets/Projects/high-five.jpeg";
import portfolio from "../../Assets/Projects/portfolio.png";
import calculator from "../../Assets/Projects/calculator.png";
import mentorship from "../../Assets/Projects/mentorship.png";
import todo from "../../Assets/Projects/todo.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={highfive}
              isBlog={false}
              title="High-Five"
              description="High Five is an online platform for hackathons where you can Participate or conduct a hackathon.At High Five, Judges can directly connect with particpants through video call where participants can explain their projects by sharing on thier screen.It uses mern stack"
              link="https://github.com/devanshi-code/high-five"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO-APP"
              description="ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. It uses html,css,js"
              link="https://github.com/devanshi-code/Todo-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Portfolio displays about my skills,projects,tools ,experiences and blogs.It also displays about my education and previous experiences. This portfolio is made using react js.I have also used express,node and git to make this portfolio more attractive and efficient.By clicking on below link you can see what I have done as a beginner."
              link="https://portfoliomine-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description=" A calculator is a device that performs arithmetic operations on numbers. The simplest calculators can do only addition, subtraction, multiplication, and division.I have used React Js to implement this app . More varieties can be added in it . I am working still to make this project better."
              link="https://github.com/devanshi-code/CALCULATOR-APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentorship}
              isBlog={false}
              title="Mentorship Page"
              description="Mentorship Page is made using HTML,CSS AND JS. In this mentorship page I have included how can you join the courses, courses available,reviews about the courses and a footer which includes about,quick links,get in touch and adress information.This is a demo website made under internship . I learnt a lot while making this project and would love to make same for you too.Contact me for making such more interactive website."
              link="https://mentorship-page.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
