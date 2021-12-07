// @ts-ignore
const usersRepo = require('../repository/board.repository.ts');


// @ts-ignore
const getAllBoards = () => usersRepo.getAllBoards();
// @ts-ignore
const getOneBoard = (boardId) => usersRepo.getOneBoard(boardId);
// @ts-ignore
const addBoard = (board) => usersRepo.addBoard(board);
// @ts-ignore
const updateBoard = (boardId, body) => usersRepo.updateBoard(boardId, body);
// @ts-ignore
const deleteBoard = (boardId) => usersRepo.deleteBoard(boardId);


module.exports = { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };