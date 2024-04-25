const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  
    const id = nanoid(16);
    const instertdAt = new Date().toISOString();
    const updatedAt = createdAt;
  
    const newNote = {
      name, 
      year, 
      author, 
      id, 
      summary, 
      publisher, 
      pageCount,
      readPage,
      reading,
      instertdAt, 
      updatedAt,
    };
  
    books.push(newBook);
  
    if (isSuccess) {
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId: id,
        },
      });
      response.code(201);
      return response;
    }
  
    const response = h.response({
      status: 'fail',
      message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
  };

const getAllBoosHandler = () => ({
  status: 'success',
  data: {
    books,
  },
});


const getBookByIdHandler = (request, h) => {

};

const editBookByIdHandler = (request, h) => {

};

const deleteBookByIdHandler = (request, h) => {

};

module.exports = { addBookHandler, getAllBoosHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler };