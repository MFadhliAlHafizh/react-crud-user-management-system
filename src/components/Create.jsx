import { useState } from "react";
import InputContainer from "../Elements/Input/InputContainer";
import { PrimaryButton, SecondaryButton } from "../Elements/Button/Button";
import axios from "axios";

function Create({ setAction, setData }) {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleCreate = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users", values)
      .then((res) => {
        console.log(res.data);
        setData((prev) => [...prev, res.data]);
        setAction(false);
        // navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center p-7">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-primaryColor font-bold mb-2 tracking-wider">
          Input Users
        </h1>
        <div className="h-2 w-24 rounded-full bg-primaryColor mb-4"></div>
        <p className="text-sm text-slate-500 max-w-lg mb-4 leading-normal tracking-wider">
          Please complete all required information correctly so that the data can be stored and used according to its function.
        </p>
        <form onSubmit={handleCreate}>
          <div className="max-w-full p-4 bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <InputContainer
              label="Name"
              name="name"
              type="text"
              placeholder="Jhon Doe"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <InputContainer
              label="Username"
              name="username"
              type="text"
              placeholder="Jhon1020"
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <InputContainer
              label="Email"
              name="email"
              type="email"
              placeholder="email@example.com"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <InputContainer
              label="Phone"
              name="phone"
              type="text"
              placeholder="0812345678910"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
            <InputContainer
              label="Website"
              name="website"
              type="text"
              placeholder="https://jhondoe.com"
              onChange={(e) => setValues({ ...values, website: e.target.value })}
            />
          </div>
          <div className="flex gap-2 mt-5">
            <PrimaryButton type="submit">Submit</PrimaryButton>
            <SecondaryButton onClick={() => setAction(null)}>
              Back
            </SecondaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
