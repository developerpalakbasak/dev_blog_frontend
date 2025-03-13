"use client"

import { useState } from "react";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file || !title || !description) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:4000/blog/byform", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
    //   console.log(result);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="border border-black"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
      className="border border-black"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />


      <input
       type="file"
        onChange={handleFileChange} 
        />


      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
