import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../redux/userSlice";
import { Link, useHistory } from "react-router-dom";

function AddData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const history = useHistory();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const userId = Math.floor(Math.random() * 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, address);
    dispatch(addUserData({ id: userId, name, address }));
    setName("");
    setAddress("");
    // history.push("/");
  };

  return (
    <Container className="my-4 w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button disabled={data.loading ? true : false} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddData;
