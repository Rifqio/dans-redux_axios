import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, deleteData } from "../redux/userSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function UserList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  const handleDelete = async (id) => {
    dispatch(deleteData(id));
    dispatch(fetchUserData());
  };
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <Container className="my-4 text-center">
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {user.loading && <h3>Loading the data...</h3>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!user.loading && user.user && user.user.length ? (
            user.user.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>
                  <Link to={`/edit-data/${data.id}`}>
                    <Button className="mx-2">Edit</Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data</td>
            </tr>
          )}
        </tbody>
      </Table>
      <span>
        <Link to="/add-data"> Add new data </Link>
      </span>
    </Container>
  );
}

export default UserList;
