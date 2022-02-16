import React from "react";

import "./style.css";

import { Container, Col, Row } from "react-bootstrap";
import StayFilter from "./Filters/StayFilter";
import GenderFilter from "./Filters/GenderFilter";
import PreferredFilter from "./Filters/Preferred";
import RoomFilter from "./Filters/RoomFilter";
import HouseFilter from "./Filters/HouseFilter";
import HousePreferredFilter from "./Filters/HousePreferred";
import AreaTypeFilter from "./Filters/AreaType";
import TopLocations from "./Filters/TopLocations";
import SearchLocation from "./Filters/SearchLocation";
import HouseResults from "./HouseResults";
import PgResults from "./PgResults";

import { useSelector } from "react-redux";

function Home() {
  const pgClicked = useSelector((state) => state.Pg.pgClick);

  return (
    <>
      <Container className="container-box">
        <Row className="locations">
          <Col className="location">
            <TopLocations />
          </Col>
          <Col className="location">
            <SearchLocation />
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={3} sm={4} className="filters-section">
            <h5>Filters</h5>
            <StayFilter />
            {!pgClicked ? (
              <>
                <div className="form-box">
                  <HouseFilter />
                </div>
                <div className="form-box">
                  <HousePreferredFilter />
                </div>
                <div className="form-box">
                  <AreaTypeFilter />
                </div>
              </>
            ) : (
              <>
                <div className="form-box">
                  <GenderFilter />
                </div>
                <div className="form-box">
                  <PreferredFilter />
                </div>
                <div className="form-box">
                  <RoomFilter />
                </div>
                <div className="form-box">
                  <AreaTypeFilter />
                </div>
              </>
            )}
          </Col>
          <Col>
            <HouseResults />
            <PgResults />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
