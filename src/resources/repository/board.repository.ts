const {v4: uuidv4ForBoard} = require("uuid");

const repoForBoard = require('./memory.repository.ts');

const getAllBoardsRepo = () => repoForBoard.data.boards;

function getOneBoardRepo(boardId: string) {
    return repoForBoard.data.boards.filter((x: { id: string; }) => x.id === boardId);
}

function addBoardRepo(board: {id: string, columns: [{id: string}]}) {
    const newBoard = board;
    newBoard.id = uuidv4ForBoard();

    for (let i = 0; i < newBoard.columns.length; i += 1) {

        newBoard.columns[i].id = uuidv4ForBoard()
    }

    repoForBoard.data.boards.push(newBoard);
    return newBoard;
}

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
