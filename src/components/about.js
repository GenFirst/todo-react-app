import React, { Component } from 'react';
import { Col, Grid, Row, Panel, Image } from 'react-bootstrap';

class About extends Component {

  render() {
    return (
      <div>
          <Grid>
            <Row>
              <Col xs={12} mdOffset={2}>
                Application is created by:
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={2} mdOffset={2}>
                <Image responsive src="/img/ivasiljevic.jpg" rounded />
              </Col>
              <Col xs={12} md={6} >
                <Panel header="Ivan Vasilejvic">
                  <Row>
                    <Col xs={12}>
                      Software Engineer with lot of experience in home automation and web development. I love working on complex systems with high demands on scalability. In a team that I am working with, I enjoy discussing different design alternatives, and the trade-offs we make. Always in search to improve myself as a developer and to learn new things.
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={12}>
                      <a target="_blank" href="https://www.linkedin.com/in/ivasiljevic/"><i  className="fa fa-linkedin-square" aria-hidden="true"></i> ivasiljevic</a>
                    </Col>
                  </Row>
                </Panel>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={2} mdOffset={2}>
                <Image responsive src="/img/vdimitrieski.jpg" rounded />
              </Col>
              <Col xs={12} md={6} >
                <Panel header="Vladimir Dimitrieski">
                  <Row>
                    <Col xs={12}>
                      Enthusiastic full-stack software engineer and researcher with 5+ years of experience in web development and ERP systems. I am experienced in talking to clients, discussing their needs and soliciting requirements. With my team, I enjoy discussing alternative solutions to problems and their trade-offs. Trying to optimize everything. Time management freak.
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={12}>
                      <a target="_blank" href="https://www.linkedin.com/in/vdimitrieski/"><i className="fa fa-linkedin-square" aria-hidden="true"></i> vdimitrieski</a>
                    </Col>
                  </Row>
                </Panel>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default About;
