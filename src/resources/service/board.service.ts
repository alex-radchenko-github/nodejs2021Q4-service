const boardRepo = require('../repository/board.repository.ts');



const getAllBoardsService = () => boardRepo.getAllBoardsRepo();

const getOneBoardService = (boardId: string) => boardRepo.getOneBoardRepo(boardId);

const addBoardService = (board: {id: string, columns: [{id: string}]}) => boardRepo.addBoardRepo(board);

const updateBoardService = (boardId: string, body: object) => boardRepo.updateBoardRepo(boardId, body);

const deleteBoardService = (boardId: string) => boardRepo.deleteBoardRepo(boardId);



module.exports = { getAllBoardsService, getOneBoardService, addBoardService, updateBoardService, deleteBoardService };