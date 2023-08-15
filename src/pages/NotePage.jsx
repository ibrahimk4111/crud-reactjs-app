import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DeleteNote from "../Components/DeleteNote";
import UpdateNote from "../Components/UpdateNote";

const NotePage = () => {
  const { id } = useParams();
  const [Note, setNote] = useState([]);

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`/api/notes/${id}`);
      const data = await response.json();
      setNote(data);
    };

    getNote();
  }, [id, setNote]);

  return (
    <div className="px-20">

      {/* textbox for every single note */}
      <div>
        <UpdateNote Note={Note}/> 
      </div>


      {/* Delete Button below textbox */}
      <div className="mt-3">
        <DeleteNote noteId={Note.id} />
      </div>


    </div>
  );
};

export default NotePage;
