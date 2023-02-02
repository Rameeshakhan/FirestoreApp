import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";

const Form = () => {
  const firestore = useFirestore();
  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  });

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    firestore
      .add({ collection: "users" }, inputs)
      .then(() => {
        console.log("User added to Firestore");
      })
      .catch(error => {
        console.error("Error adding user: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={inputs.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
