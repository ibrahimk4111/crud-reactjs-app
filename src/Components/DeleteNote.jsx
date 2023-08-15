import { useNavigate } from "react-router-dom";

const DeleteNote = ({noteId}) => {

    const navigate = useNavigate()

    //sent a request to backend and delete the note from database
    const deleteNote = async () =>{
        // calling the backend delete function by this url
        fetch(`/api/notes/${noteId}/delete/`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        navigate('/')
    }

  return (
    <div>
      <span className=" p-1 bg-slate-800 text-white rounded-md">
        <button onClick={deleteNote} className=" w-20 text-lg">Delete</button>
      </span>
    </div>
  );
};

export default DeleteNote;
