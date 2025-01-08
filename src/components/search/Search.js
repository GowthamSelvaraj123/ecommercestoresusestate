import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '../../asset/img/core-img/search.png';

export default function Search() {
  return (
    <div class="search-wrapper section-padding-100">
        <div class="search-close">
        <FontAwesomeIcon icon={faClose} />
        </div>
        <Container>
            <Row>
                <Col xs={12}>
                    <div class="search-content">
                        <Form>
                            <Form.Control size="lg" type="search" id="search" name="search" placeholder="Type your keyword..." />
                            <Button variant="primary"><img src={SearchIcon} alt="search" /></Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
