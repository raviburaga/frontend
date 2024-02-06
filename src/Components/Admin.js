import React, { useEffect, useState } from "react";

function Userdata() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const reqData = await fetch("http://localhost:5000/api/mongodb");
        const resData = await reqData.json();
        setUserData(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getUserData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sr. No</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Course</th>
              <th className="py-3 px-6 text-left">Branch</th>
              <th className="py-3 px-6 text-left">Dance</th>
              <th className="py-3 px-6 text-left">Cultural</th>
              <th className="py-3 px-6 text-left">Skits</th>
              <th className="py-3 px-6 text-left">Photography</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {userData.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.name}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.course}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.branch}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.dance ? "Yes" : "No"}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.cultural ? "Yes" : "No"}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.skits ? "Yes" : "No"}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.photography ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Userdata;
