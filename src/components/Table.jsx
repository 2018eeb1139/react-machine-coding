import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./styles.css";

const mockUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          name: "Aman",
          email: "aman@gmail.com",
          age: 23,
        },
        {
          name: "Harshit",
          email: "harshit@gmail.com",
          age: 24,
        },
        {
          name: "Vivek",
          email: "vivek@gmail.com",
          age: 25,
        },
      ];
      resolve(data);
    }, 1000);
  });
};

const Table = ({ title }) => {
  const { users, setUsers } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const res = await mockApi();
        const res = await mockUserData();
        console.log(res);
        // setItems(res);
        setUsers(res);
      } catch (error) {
        // setItems([]);
        setUsers(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleDelete = (name) => {
    setUsers(users.filter((user) => user.name !== name));
  };
  const handleAdd = () => {
    setOpen(true);
  };
  const handleEdit = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
    setOpen1(true);
  };
  const handleAddUser = () => {
    const newUser = { name, email, age };
    setUsers([...users, newUser]);
    setOpen(false);
  };

  const handleSaveUser = (e) => {
    e.preventDefault();
    if (!selectedUser) return;
    const updatedUser = { name, email, age };
    setUsers(
      users.map((user) =>
        user.name === selectedUser.name ? updatedUser : user
      )
    );
    setOpen1(false);
    setSelectedUser(null);
    setName("");
    setEmail("");
    setAge("");
  };
  if (loading) {
    return <p>Loading...</p>;
  } else if (users?.length === 0) {
    return <p>No Data</p>;
  } else {
    return (
      <div>
        <div className="flex justify-between mb-2">
          <h1>{title} Table</h1>
          <button className="border-1 rounded p-1 text-xs" onClick={handleAdd}>
            Add {title}
          </button>
        </div>
        <table className="border-1 border-collapse">
          <tbody>
            <tr>
              <th className="border-1 border-collapse">Name</th>
              <th className="border-1 border-collapse">Email</th>
              <th className="border-1 border-collapse">Age</th>
              <th className="border-1 border-collapse">Actions</th>
            </tr>

            {users?.map((item) => (
              <tr key={item.name}>
                <td className="border-1 border-collapse">{item.name}</td>
                <td className="border-1 border-collapse">{item.email}</td>
                <td className="border-1 border-collapse">{item.age}</td>
                <td className="border-1 border-collapse">
                  <button
                    className="border-1 rounded p-1 text-xs"
                    onClick={() => handleEdit(item)}
                  >
                    edit
                  </button>
                  <button
                    className="border-1 rounded p-1 text-xs"
                    onClick={() => handleDelete(item.name)}
                  >
                    {" "}
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && (
          <div className="modal-overlay">
            <div className="modal-content flex flex-col">
              <button onClick={() => setOpen(false)} className="border">
                close
              </button>
              <form className="flex items-center justify-center">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border"
                />
              </form>
              <div className="flex items-center justify-center">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="border"
                />
              </div>
              <button
                className="border"
                onClick={handleAddUser}
                disabled={!name || !email || !age}
              >
                Add
              </button>
            </div>
          </div>
        )}
        {open1 && selectedUser && (
          <div className="modal-overlay">
            <div className="modal-content flex flex-col">
              <button onClick={() => setOpen1(false)} className="border">
                close
              </button>
              <form onSubmit={handleSaveUser}>
                <div className="flex items-center justify-center">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border"
                  />
                </div>
                <button
                  className="border"
                  type="submit"
                  disabled={!name || !email || !age}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Table;
