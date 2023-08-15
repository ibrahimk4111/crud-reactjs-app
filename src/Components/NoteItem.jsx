import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (

    
    <Link to={`/note/${note.id}`}>
      <div className=" p-3 border-2 text-white border-b-white bg-slate-800  hover:bg-slate-700 ">
        {/* <h1>{note.title}</h1> */}
        <p>{note.body}</p>
        <div className="py-2 flex justify-between">
          <p className=" text-gray-400 ">Noted: {note.created}</p>
          <p className=" text-gray-400 ">Edited: {note.updated}</p>
        </div>
      </div>
    </Link>
  );
};

export default NoteItem;
