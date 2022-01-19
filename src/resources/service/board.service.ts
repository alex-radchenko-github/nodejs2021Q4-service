const boardRepo = require('../repository/board.repository.ts');


/**
 * Returns board's list
 * @returns board's list
 */

async function getAllBoardsService() {
    return boardRepo.getAllBoardsRepo()

}
/**
 * Returns a board by id
 * @param boardId - board's id
 * @returns Returns a board by id
 */

async function getOneBoardService(boardId: string) {
    return boardRepo.getOneBoardRepo(boardId)
}
/**
 * add a new board
 * @param board - object with a new board
 * @returns  a new board
 */

async function addBoardService(board: object) {
    return boardRepo.addBoardRepo(board)
}

/**
 * update a board with id
 * @param body - object with an update board
 * @param boardId - board's id
 * @returns  an updated  board with id
 */


async function updateBoardService(boardId: string, body: object) {
    return boardRepo.updateBoardRepo(boardId, body)
}
/**
 * Delete a task by id in the board by id
 * @param boardId - user's id
 */

async function deleteBoardService(boardId: string) {
    return boardRepo.deleteBoardRepo(boardId)
}


module.exports = {getAllBoardsService, getOneBoardService, addBoardService, updateBoardService, deleteBoardService};