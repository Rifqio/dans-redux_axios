import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, updateUserData } from "../redux/userSlice";

function EditData() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(id);
  const [address, setAddress] = useState("");
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(data);
  console.log(id);
  useEffect(() => {
    const res = async () => {
      const dataById = await dispatch(fetchUserById(id));
      const result = await dataById.payload;
      console.log(result);
      setName(result.name);
      setAddress(result.address);
    };
    res();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: userId,
      name,
      address,
    };
    dispatch(updateUserData(payload))
  };
  return (
    <Container className="my-4 w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-4">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="number"
            value={id}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Form.Group>
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
        {data.success && <p className="text-center">User has been updated successfully</p>}
      </Form>
    </Container>
  );
}

export default EditData;
