import axios from "axios";
import { useState, useEffect } from "react";
import InputContainer from "../Elements/Input/InputContainer";
import { PrimaryButton, SecondaryButton } from "../Elements/Button/Button";

function Update({ setAction, user, setData }) {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    if (user) {
      setValues({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/users/${user.id}`, values)
      .then((res) => {
        console.log(res.data);
        setData((prev) =>
          prev.map((item) => (item.id === user.id ? res.data : item))
        );
        setAction(null);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center p-7">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-primaryColor font-bold mb-2 tracking-wider">
          Update Users
        </h1>
        <div className="h-2 w-24 rounded-full bg-primaryColor mb-4"></div>
        <p className="text-sm text-slate-500 max-w-lg mb-4 leading-normal tracking-wider">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
          nisi. Eligendi quas et iure ipsam cumque sunt.
        </p>
        <form onSubmit={handleUpdate}>
          <div className="max-w-full p-4 bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <InputContainer
              label="Name"
              name="name"
              type="text"
              placeholder="Jhon Doe"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <InputContainer
              label="Username"
              name="username"
              type="text"
              placeholder="Jhon1020"
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <InputContainer
              label="Email"
              name="email"
              type="email"
              placeholder="email@example.com"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <InputContainer
              label="Phone"
              name="phone"
              type="text"
              placeholder="0812345678910"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
            <InputContainer
              label="Website"
              name="website"
              type="text"
              placeholder="https://jhondoe.com"
              value={values.website}
              onChange={(e) => setValues({ ...values, website: e.target.value })}
            />
          </div>
          <div className="flex gap-2 mt-5">
            <PrimaryButton type="submit">Update</PrimaryButton>
            <SecondaryButton onClick={() => setAction(null)}>
              Back
            </SecondaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
