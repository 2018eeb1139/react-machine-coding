import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

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
  //   console.log(data.length);
  //   console.log(loading);
  if (loading) {
    return <p>Loading...</p>;
  } else if (users?.length === 0) {
    return <p>No Data</p>;
  } else {
    return (
      <div>
        <div className="flex justify-between mb-2">
          <h1>{title} Table</h1>
          <button className="border-1 rounded p-1 text-xs">Add {title}</button>
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
                  <button className="border-1 rounded p-1 text-xs">edit</button>
                  <button className="border-1 rounded p-1 text-xs">
                    {" "}
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Table;
