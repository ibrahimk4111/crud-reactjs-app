import React, { useState, useEffect } from "react";
import NoteItem from "../Components/NoteItem";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddNewNote from "../Components/AddNewNote";

const NotesListPages = () => {
  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();
    console.log(data)
    setNotes(data);
  };

  return (
    <div className="px-20">
      <div className=" p-1 flex items-center justify-between h-16 ">
        <h1 className=" mx-20 text-3xl font-bold ">
          &#9782; Total Notes: {Notes.length}
        </h1>
        <Link to='/note/add' className=" mx-20 p-1 hover:bg-slate-200 bg-slate-300">
          <h1>
            <AiOutlinePlus className=" text-3xl font-bold ">
              <AddNewNote />
            </AiOutlinePlus>
          </h1>
        </Link>
      </div>

      <div>
        {Notes.map((note, index) => (
          <NoteItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPages;
