import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
    const data = { name, email, phone, desc }
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting us.");
        setDesc('');
        setEmail('');
        setName('');
        setPhone(''); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "desc":
        setDesc(value);
        break;
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact </h1>
      <form onSubmit={handleSumbit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>
            Phone No.
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Enter Phone No."
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="comment" className={styles.formLabel}>
            Comment
          </label>
          <textarea
            className="form-control"
            id="desc"
            placeholder="Write your comments here"
            onChange={handleChange}
            value={desc}
            name="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
