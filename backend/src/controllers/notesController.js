import Note from "../models/Note.js";

export const getAllNotes= async(_,res)=>{
    try{
        const allNotes = await Note.find().sort({createdAt:-1}); //gets all the notes in the DB and created:-1 will sort it in Desc(newest first)
        res.status(200).json(allNotes);
    }catch(error){
        console.error("Error in getAllNotes:",error);

        res.status(500).json({message:"Internal error!!"});
    }
};

export const getNoteById = async(req,res)=>{
    try{
        const currNote = await Note.findById(req.params.id);
        if(!currNote) return res.status(404).json({message:"Note Not found!!"});
        res.json(currNote);
    }
    catch(error){
        console.error("Error in getNoteByID:",error);
        res.status(500).json({message:"Internal error!!"});
    }
}
export const createNote= async(req,res)=>{
    try{
        const {title,content} = req.body;
        const newNote = new Note({title,content})   
        const createdNote = await newNote.save();
        res.status(201).json(createdNote);
        console.log(title,content);

    }
    catch(error){
        console.error("Error in createNote:",error);

        res.status(500).json({message:"Internal error!!"});
    }
}

export const updateNote= async(req,res)=>{
    try{
    const {title,content}=req.body
    const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{
        new: true   
    });
    if(!updatedNote) return res.status(404).json({message:"Note not found"}); 
    res.status(200).json(updatedNote);
    }

    catch(error){
        console.error("Error in updating Note:",error);
        res.status(500).json({
            message:"Internal error!!"
        });
    }
};

export const deleteNote= async(req,res)=>{
    try{
    const {title,content}=req.body
    const deletedNote=await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote)return res.status(404).json({message:"note not found!!"});
    res.status(200).json({message:"Note Deleted!!"});
    }

    catch(error){
        console.error("Error in Deleting Note:",error);
        res.status(500).json({
            message:"Internal error!!"
        });
    }
}