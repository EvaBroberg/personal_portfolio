import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import projImg1 from "../assets/img/projectThumbnails/project-img1.png"
import projImg2 from "../assets/img/projectThumbnails/project-img2.png"
import projImg3 from "../assets/img/projectThumbnails/project-img3.png"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/layout/color-sharp2.png"

export const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description 1',
            imgUrl: projImg1,
        },
        {
            title: 'Project 2',
            description: 'Description 2',
            imgUrl: projImg2,
        },
        {
            title: 'Project 3',
            description: 'Description 3',
            imgUrl: projImg3,
        },
        {
            title: 'Project 4',
            description: 'Description 4',
            imgUrl: projImg1,
        },
        {
            title: 'Project 5',
            description: 'Description 5',
            imgUrl: projImg2,
        },
        {
            title: 'Project 6',
            description: 'Description 6',
            imgUrl: projImg3,
        }
    ]

    return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit quibusdam nostrum reiciendis nisi voluptas possimus odit fugit qui blanditiis hic, nobis cumque facere unde tempora aspernatur provident accusamus commodi.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="gradient" />
    </section>
  );

}