import React, { useEffect, useState } from 'react'

const InputForm = ({addNewNote,editNote,updateNote}) => {
    const [heading,setHeading] = useState("");
    const [content,setContent] = useState("");
    const [editId, setEditId] = useState(null)
    // console.log("my heading",heading)
    // console.log("my content", content)
    // console.log("edit Id",editId)

     useEffect(() => {
       if (editNote) {
         setHeading(editNote.heading);
         setContent(editNote.content);
         setEditId(editNote.id);
       }
     },[editNote]);

   const handleSubmit = (e) => {
     e.preventDefault();
     if( !heading || !content) return;
     if(editId){
      updateNote({id:editId,heading,content});
    }else{
      addNewNote({id:Date.now(),heading,content})

    }
     setContent("");
     setHeading("")
     setEditId(null)
   }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="mb-2 p-3 bg-stone-200 rounded-lg justify-center"
      >
        <input
          type="text"
          placeholder="Your Heading ..."
          className="w-full p-2 border-b-2 outline-none"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          value={content}
          type="text"
          placeholder="Write Your Content Here ..."
          className="w-full p-2 mt-2 border outline-none"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="font-bold bg-black text-lg text-white px-5 py-3 mt-1  rounded-tr-full rounded-tl-full rounded-br-full hover:cursor-pointer ">
          {editId ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
}

export default InputForm
