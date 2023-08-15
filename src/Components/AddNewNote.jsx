import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const AddNewNote = () => {

  // adding textbox's value as new note body
  const [note, setNote] = useState(null);
  
  const addTextToNote = (e) => {
    const text = e.target.value;
    setNote({ ...note, 'body': text });
  };

  // Navigate to the back
  const navigate = useNavigate();
  function handleCreate() {
    // call backend url and create model object to database
    fetch("/api/notes/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  }

  return (
    <div className="px-20">
      <div className=" p-1 flex items-center justify-between h-16 ">
        <span onClick={handleCreate} className=" mx-20 cursor-pointer ">
          <h1 className=" text-3xl font-bold ">&#9782; Add To Note</h1>
        </span>
        <Link
          to="/"
          className=" mx-20 p-1 hover:bg-slate-200 bg-slate-300 cursor-pointer"
        >
          <h1>
            <BiArrowBack className=" text-3xl font-bold " />
          </h1>
        </Link>
      </div>

      <textarea
        className=" h-96 text-justify w-full px-20 py-5 focus:outline-none rounded-md bg-slate-800 text-white"
        placeholder=" T e x t   h e r e . . . "
        onChange={(e) => addTextToNote(e)}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default AddNewNote;
