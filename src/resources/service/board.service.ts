// @ts-ignore
const boardRepo = require('../repository/board.repository.ts');


// @ts-ignore
const getAllBoards = () => boardRepo.getAllBoards();
// @ts-ignore
const getOneBoard = (boardId) => boardRepo.getOneBoard(boardId);
// @ts-ignore
const addBoard = (board) => boardRepo.addBoard(board);
// @ts-ignore
const updateBoard = (boardId, body) => boardRepo.updateBoard(boardId, body);
// @ts-ignore
const deleteBoard = (boardId) => boardRepo.deleteBoard(boardId);


module.exports = { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };