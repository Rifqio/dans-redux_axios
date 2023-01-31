const instance = require("../module/httpModule");

// GET
exports.getUser = async (req, res) => {
  try {
    const response = await instance.get("/users");
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await instance.get(`/users/${id}`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

// POST
exports.addUser = async (req, res) => {
  try {
    const data = {
      id: req.body.id,
      name: req.body.name,
      address: req.body.address,
    };
    const response = await instance.post("/users", data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

// PATCH
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = {
      id: req.body.id,
      name: req.body.name,
      address: req.body.address,
    };
    const response = await instance.patch(`/users/${id}`, data)
    res.json(response.data)
  } catch (error) {
    console.log(error);
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await instance.delete(`/users/${id}`)
    res.json({msg: `User with id ${id} has been deleted`})
  } catch (error) {
    console.log(error);
  }
}