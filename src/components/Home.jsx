import axios from "axios";
import { useState, useEffect } from "react";
import { PrimaryButton } from "../Elements/Button/Button";
import Input from "../Elements/Input/Input";
import Create from "./Create";
import Update from "./Update";
import Detail from "./Detail";

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [action, setAction] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:5000/users/${id}`)
        .then(() => {
          setData(data.filter((item) => item.id !== id));
          // console.log(res);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center p-4 sm:p-7 relative bg-gray-50">
      {action && (
        <div className="absolute w-full h-full flex justify-center pt-8 bg-[#00000080]">
          <div className="bg-white w-4xl rounded-md h-fit relative">
            <button
              onClick={() => setAction(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-600 flex justify-center items-center text-white font-bold cursor-pointer"
            >
              X
            </button>
            {action === "create" && (
              <Create setAction={setAction} setData={setData} />
            )}

            {action === "update" && (
              <Update
                setAction={setAction}
                user={selectedUser}
                setData={setData}
              />
            )}

            {action === "detail" && (
              <Detail
                setAction={setAction}
                user={selectedUser}
                setData={setData}
              />
            )}
          </div>
        </div>
      )}
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-primaryColor font-bold mb-2 tracking-wider">
          Users Data
        </h1>
        <div className="h-2 w-24 rounded-full bg-primaryColor mb-4"></div>
        <p className="text-sm text-slate-500 max-w-lg mb-4 leading-normal tracking-wider">
          A list of all registered users used to manage user data stored in the system.
        </p>
        <div className="w-full">
          <div className="flex justify-between gap-3 mb-3">
            <Input
              type="search"
              name="search"
              placeholder="Search..."
              className="max-w-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
            <PrimaryButton onClick={() => setAction("create")}>Add +</PrimaryButton>
          </div>
          <div className="overflow-auto w-full rounded-md bg-white shadow-[0px_3px_6px_3px_rgba(0,_0,_0,_0.1)]">
            <table className="w-full">
              <thead>
                <tr className="bg-linear-to-br from-[#005F5A] to-[#0F3443] text-sm text-white font-semibold tracking-wide whitespace-nowrap">
                  <th className="p-4 text-center">No</th>
                  <th className="p-4 text-center">Email</th>
                  <th className="p-4 text-center">Name</th>
                  <th className="p-4 text-center">Phone</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-[#005f5a08] border-b border-primaryColor text-sm text-slate-800 whitespace-nowrap"
                    >
                      <td className="p-4 text-center">{index + 1}</td>
                      <td className="p-4">{item.email}</td>
                      <td className="p-4">{item.name}</td>
                      <td className="p-4 text-center">{item.phone}</td>
                      <td className="p-4 flex justify-center gap-1">
                        <div>
                          <button
                            onClick={() => {
                              setSelectedUser(item);
                              setAction("detail");
                            }}
                            className="w-10 h-10 flex justify-center items-center border-2 border-primaryColor rounded-md cursor-pointer hover:bg-linear-to-br hover:from-[#018A85] hover:to-[#0C4259] text-primaryColor hover:text-white"
                          >
                            <i className="bx bx-show text-lg"></i>
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setSelectedUser(item);
                              setAction("update");
                            }}
                            className="w-10 h-10 flex justify-center items-center border-2 border-primaryColor rounded-md cursor-pointer hover:bg-linear-to-br hover:from-[#018A85] hover:to-[#0C4259] text-primaryColor hover:text-white"
                          >
                            <i className="bx bx-edit text-lg"></i>
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="w-10 h-10 flex justify-center items-center border-2 border-primaryColor rounded-md cursor-pointer hover:bg-linear-to-br hover:from-[#018A85] hover:to-[#0C4259] text-primaryColor hover:text-white"
                          >
                            <i className="bx bx-trash text-lg"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center pt-8 pb-4 text-slate-500">
                      {search
                        ? "No matching users found."
                        : "No users available."
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
