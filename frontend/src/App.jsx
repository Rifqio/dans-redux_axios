import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import Page from "./Page";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Page title="Simple CRUD">
              <Header label={"Simple Crud App"}/>
              <UserList {...props} />
            </Page>
          )}
        />
        <Route
          path="/add-data"
          render={(props) => (
            <Page title="Add New Data">
              <Header label="Add New Data" />
              <AddData {...props} />
            </Page>
          )}
        />
        <Route
          path="/edit-data/:id"
          render={(props) => (
            <Page title="Update Your Data">
              <Header label="Edit Data" />
              <EditData {...props} />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
