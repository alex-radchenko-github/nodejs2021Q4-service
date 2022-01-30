const {v4: uuidv4ForBoard} = require("uuid");

const repoForBoard = require('./memory.repository.ts');

/**
 * Returns board's list
 * @returns board's list
 */
const getAllBoardsRepo = (): object => repoForBoard.data.boards;


/**
 * Returns a board by id
 * @param boardId - board id
 * @returns Returns a board by id if the board is present
 */
function getOneBoardRepo(boardId: string): object {
    return repoForBoard.data.boards.filter((x: { id: string; }) => x.id === boardId);
}

/**
 * add a new board
 * @param board - object with a new board
 * @returns object with new board with board id and each column's id
 */

function addBoardRepo(board: {id: string, title: string, columns: [{id: string}]}) {
    const newBoard = board;
    newBoard.id = uuidv4ForBoard();

    for (let i = 0; i < newBoard.columns.length; i += 1) {

        newBoard.columns[i].id = uuidv4ForBoard()
    }

    repoForBoard.data.boards.push(newBoard);
    return newBoard;
}

/**
 * Delete a board by id in the board by id
 * @param boardId - board id
 */
function deleteBoardRepo(boardId: string) {
    let boardIndex = null;
    for (let i = 0; i < repoForBoard.data.boards.length; i += 1) {
        if (repoForBoard.data.boards[i].id === boardId) {
            boardIndex = i;
            break;
        }
    }
    repoForBoard.data.boards.splice(boardIndex, 1);

    repoForBoard.data.task = repoForBoard.data.task.filter((x: { boardId: string; }) => x.boardId !== boardId)


}

/**
 * update a board with id
 * @param boardId - board id
 * @param body - object of updated board
 * @returns  an updated  board with id
 */
function updateBoardRepo(boardId: string, body: object) {

    let boardIndex = 0;
    for (let i = 0; i < repoForBoard.data.boards.length; i += 1) {
        if (repoForBoard.data.boards[i].id === boardId) {
            boardIndex = i;
            break;
        }
    }
    const updatedBoard = {
        ...body,
        id: boardId

    };

    repoForBoard.data.boards[boardIndex] = {...updatedBoard};
    return updatedBoard;
}

module.exports = {
    getAllBoardsRepo,
    getOneBoardRepo,
    addBoardRepo,
    deleteBoardRepo,
    updateBoardRepo,
};
