import React from "react";
import { Jumbotron, Container } from "reactstrap";

export interface IHeader {
  title: string;
  subtitle?: string;
}

const Header: React.FC<IHeader> = ({ title, subtitle }) => {
  return (
    <Jumbotron fluid style={{backgroundColor:'#f4e9cd'}}>
      <Container fluid>
        <h1 className="display-3">{title}</h1>
        <p className="lead">{subtitle}</p>
      </Container>
    </Jumbotron>
  );
};

export default Header;
