const notes = [
    {id: 123244, note: "Learn Javascript", done: true},
    {id: 123324, note: "Walk Zooty", done: false},
    {id: 124444, note: "Study Spanish", done: false},
    {id: 12434, note: "Make a beat", done: true},
];




const getAll = () =>{
    return notes;
};

const getOne = (id) =>{
 id = parseInt(id);
 return notes.find(note => note.id === id);
}


module.exports = {
    getAll,
    getOne,
};