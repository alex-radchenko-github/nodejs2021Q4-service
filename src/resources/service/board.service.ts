const boardRepo = require('../repository/board.repository.ts');


/**
 * Returns board's list
 * @returns board's list
 */
const getAllBoardsService = (): object => boardRepo.getAllBoardsRepo();

/**
 * Returns a board by id
 * @param boardId - board's id
 * @returns Returns a board by id
 */
const getOneBoardService = (boardId: string): { id: string, title: string, columns: { id:string, title:string, order:number } } => boardRepo.getOneBoardRepo(boardId);

/**
 * Returns a board with id
 * @param board - object with a new board
 * @returns  a new  board with id
 */
const addBoardService = (board: { id: string, columns: [{ id: string }] }): object => boardRepo.addBoardRepo(board);

/**
 * update a board with id
 * @param body - object with a new board
 * @param boardId - board's id
 * @returns  an updated  board with id
 */
const updateBoardService = (boardId: string, body: object): object => boardRepo.updateBoardRepo(boardId, body);

/**
 * Delete a task by id in the board by id
 * @param boardId - user's id
 */
const deleteBoardService = (boardId: string): void => boardRepo.deleteBoardRepo(boardId);


module.exports = {getAllBoardsService, getOneBoardService, addBoardService, updateBoardService, deleteBoardService};