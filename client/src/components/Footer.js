import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "../stylesheets/Footer.css";

const FooterPage = () => {
  return (
    // <div id="footerContainer" className="footer">
    <MDBFooter
      id="footer"
      color="special-color-dark
      "
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>    
          <MDBCol>
            <h5 id="FooterTitle" className="title">
              Finmoji - Finance, simplified. <span role="img" aria-label="finmoji-icon">&#128176;</span>
            </h5>
            <p>
              Securing the bag is hard enough. We're here to make sure you hold
              on to it.
            </p>
            <p>
              Through our unique approach to personal finance, we aim to make it
              a much more approachable topic for individuals that are
              unfamiliar.
            </p>
          </MDBCol>
          <MDBCol />
          <MDBCol>
            <h5 className="title">Resources <span role="img" aria-label="resources-icon">&#128170;</span></h5>
            <ul>
              <li className="list-unstyled">
                <a
                  id="robinhood"
                  href="https://robinhood.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  1. Robinhood - Stocks and options with no fees{" "}
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  id="simpledollar"
                  href="https://www.thesimpledollar.com/blog-overview/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  2. Simple Dollar - Free courses relating to finance{" "}
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  id="stackingbenjamins"
                  href="https://www.stackingbenjamins.com/about/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  3. Stacking Benjamins - Personal finance podcast
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  id="learnvest"
                  href="https://www.reddit.com/r/beermoney/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  4. Beermoney - Earn extra income{" "}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Social <span role="img" aria-label="social-icon">&#128526;</span></h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">
                  <i className="fab fa-instagram" /> Instagram{" "}
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">
                  <i className="fab fa-facebook" /> Facebook{" "}
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">
                  <i className="fab fa-twitter" /> Twitter{" "}
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">
                  <i className="fab fa-snapchat-ghost" /> Snapchat{" "}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Team <span role="img" aria-label="team-icon">&#128400;</span></h5>
            <ul>
              <li className="list-unstyled">
                <a
                  id="bogac"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/BogacSabuncu"
                >
                  Bogac Sabuncu
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  id="enzo"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/enzofass"
                >
                  Enzo Fassioli
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  id="natalia"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/natalliasdh"
                >
                  Natallia Harmon
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  id="oscar"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/olanza"
                >
                  Oscar Lanza
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  id="fang"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fyeh0"
                >
                  Fang Yeh
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Stylized with{" "}
          <MDBIcon id="heart" icon="heart" /> utilizing{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap</a> <br />
        </MDBContainer>
      </div>
    </MDBFooter>
    // </div>
  );
};

export default FooterPage;
