import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList";
import Page from "./Page";
import AddData from "./components/AddData";
import EditData from "./components/EditData";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Page title="Simple CRUD">
              <UserList {...props} />
            </Page>
          )}
        />
        <Route
          path="/add-data"
          render={(props) => (
            <Page title="Add New Data">
              <AddData {...props} />
            </Page>
          )}
        />
        <Route
          path="/edit-data/:id"
          render={(props) => (
            <Page title="Update Your Data">
              <EditData {...props} />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
