import { FC } from "react";
import { Col, Form, Row } from "react-bootstrap";

export const SearchBar: FC<{ handleSearch: (str: string) => void }> = ({
  handleSearch,
}) => (
  <Form>
    <Row>
      <Col md={4} className="d-flex">
        <Form.Control
          onChange={(str) => handleSearch(String(str.target.value))}
          placeholder="Buscar por nombre"
          type="text"
        />
      </Col>
    </Row>
  </Form>
);
