const usersRepo = require('../repository/board.repository.js');


const getAllBoards = () => usersRepo.getAllBoards();
const getOneBoard = (boardId) => usersRepo.getOneBoard(boardId);
const addBoard = (board) => usersRepo.addBoard(board);
const updateBoard = (boardId, body) => usersRepo.updateBoard(boardId, body);
const deleteBoard = (boardId) => usersRepo.deleteBoard(boardId);


module.exports = { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };