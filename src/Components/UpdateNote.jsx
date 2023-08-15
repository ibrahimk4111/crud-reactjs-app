import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const UpdateNote = ({ Note }) => {

  // updated texts are adding to the note
  const [upNote, setUpNote] = useState(Note)
  const updated_Text_To_UpNote = (e) =>{
    const text = e.target.value;
    setUpNote({...upNote, 'body':text})
  }
  
  const navigate = useNavigate()
  //updating backend database object
  const update_db_note = () => {
    fetch(`/api/notes/${Note.id}/update/`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(upNote)
    });
    navigate('/')
  };

  return (
    <div>
      {/* Done and Back buttons here for every single note */}
      <div className=" p-1 flex items-center justify-between h-16 ">
        <span onClick={update_db_note} className=" mx-20 ">
          <h1 className="text-3xl font-bold cursor-pointer ">&#9782; Done</h1>
        </span>
        <Link to="/" className=" mx-20 p-1 hover:bg-slate-200 bg-slate-300">
          <h1>
            <BiArrowBack className=" text-3xl font-bold " />
          </h1>
        </Link>
      </div>
      <textarea
        className=" h-96 text-justify w-full px-20 py-5 focus:outline-none rounded-md bg-slate-800 text-white"
        defaultValue={Note.body}
        onChange={(e)=>updated_Text_To_UpNote(e)}
      ></textarea>
    </div>
  );
};

export default UpdateNote;
