import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

function Meme() {
  const [text, setText] = useState({
    topText: "",
    bottomText: "",
    caps: false,
    white: false,
    shadow: false,
    fontSize: 16
  });
  function handleChange(event) {
    if (event.target.checked) {
      setText({
        ...text,
        [event.target.name]: event.target.checked
      });
    } else {
      setText({
        ...text,
        [event.target.name]: event.target.value
      });
    }
  }
  console.log(text);
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="top">
              <Form.Label>Top </Form.Label>
              <Form.Control
                type="text"
                placeholder="Top Text"
                value={text.topText}
                name="topText"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bottom">
              <Form.Label>Bottom</Form.Label>
              <Form.Control
                type="text"
                placeholder="bottom text"
                name="bottomText"
                value={text.bottomText}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="reset">
              <Form.Control type="reset" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="caps">
              <Form.Check
                type="checkbox"
                label="caps"
                name="caps"
                value={text.caps.checked}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="white">
              <Form.Check
                type="checkbox"
                label="White Text"
                name="white"
                value={text.white.checked}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="shadow">
              <Form.Check
                type="checkbox"
                label="Shadow"
                name="shadow"
                value={text.shadow.checked}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="font-size">
              <label>Font Size</label>
              <input
                type="range"
                min="16"
                max="128"
                name="fontSize"
                value={text.fontSize.checked}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="font">
              <Form.Label>Select Font</Form.Label>
              <Form.Control as="select">
                <option value="DICTUM">Dictamen</option>
                <option value="CONSTANCY">Constancia</option>
                <option value="COMPLEMENT">Complemento</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col
          className="d-flex row space-between"
          md={6}
          style={{
            backgroundImage:
              "url(https://i.kym-cdn.com/entries/icons/original/000/020/002/memeeman.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p className="mt-5">{text.topText}</p>
          <p className="align-self-end" className="mt-5">
            {text.bottomText}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Meme;
