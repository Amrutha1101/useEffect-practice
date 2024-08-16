import { useEffect, useState } from "react";

export const AutoSave = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    const savedData = localStorage.getItem("formdata");
    if (savedData) {
      setFormdata(JSON.parse(savedData));
    }
  }, []);
  useEffect(() => {
    const saveData = () => {
      localStorage.setItem("formdata", JSON.stringify(formdata));
    };
    const intervalID = setInterval(saveData, 2000);

    return () => clearInterval(intervalID);
  }, [formdata]);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          type="text"
          name="message"
          value={formdata.message}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
