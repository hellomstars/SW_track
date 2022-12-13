let notes = [
    {
        id: 1,
        title: '첫 메모',
        content: '애니가 작성한 첫 메모입니다.',
        author: 'annie',
    },
    {
        id: 2,
        title: '두 번째는 밥이 작성했습니다.',
        content: '안녕하세요 밥입니다.',
        author: 'bob',
    },
    {
        id: 3,
        title: '밥이 한번 더 썼습니다.',
        content: '밥이 작성한 두 번째 메모입니다.',
        author: 'bob',
    },
    {
        id: 4,
        title: '크리스도 메모를 작성했습니다.',
        content: '안녕하세요 크리스입니다.',
        author: 'chris',
    },
];

exports.list = () => {
    return notes.map(({ id, title, author }) => ({
        id,
        title,
        author,
    }));
}

exports.get = (id) => {

    const note = notes.find((note) => note.id === id);
    
    if (!note) {
        throw new Error('Not not found');
    }
    
    return note;
}


exports.create = (title, content, author) => {
    const { id: lastId } = notes[notes.length - 1];
    const newNote = {
        id: lastId + 1,
        title,
        content,
        author,

    };
    
    notes.push(newNote);
    return newNote;
}


exports.update = (id, title, content, author) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index < 0) {
        throw new Error('Note not found for update');

    }
    
    const note = notes[index];
    
    if (note.author !== author) {
        throw new Error("Author not matches");
    }
    
    note.title = title;
    note.content = content;
    notes[index] = note;
    return note;
}


exports.delete = (id, author) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index < 0) {
        throw new Error('Note not found for delete');
    }

    const note = notes[index];
    
    if (note.author !== author) {
        throw new Error("Author not matches");
    }
    
    notes = notes.filter(note => note.id != id);
    
    return;
}


exports.search = (search) => {
    const searched = notes.filter(({ title }) => {
        const index = title.indexOf(search);
        return index >= 0;

    });
    
    return searched.map(({ id, title, author }) => ({
        id,
        title,
        author,
    }));
}