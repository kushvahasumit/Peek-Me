import {FilePenLine, Trash2} from 'lucide-react'

const NotesList = ({notes,deleteNote,updateNote}) => {
    console.log("my notes box", notes);

  return (
    <>
      <div className="text-black grid md:grid-cols-3 gap-4 ">
        {Array.isArray(notes) &&
          notes.map((notes, id) => (
            <div
              key={id}
              className="bg-white p-4 shadow-lg rounded-lg relative"
            >
              <h2 className="font-bold text-xl">{notes.heading}</h2>
              <p className="mt-2">{notes.content}</p>
              <button
                onClick={() => deleteNote(notes.id)}
                className="absolute top-3 right-3 hover:cursor-pointer"
              >
                <Trash2 />
              </button>
              <button
                onClick={() => updateNote(notes)}
                className="absolute bottom-3 right-3 hover:cursor-pointer"
              >
                <FilePenLine />
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default NotesList
