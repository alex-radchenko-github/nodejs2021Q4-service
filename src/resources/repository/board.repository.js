const {v4: uuidv4} = require("uuid");
const usersRepo = require('./memory.repository.js');

const getAllBoards = () => usersRepo.data.boards;

function getOneBoard(boardId) {

    return usersRepo.data.boards.filter(x => x.id === boardId);
}

function addBoard(board) {
    const newBoard = board;
    newBoard.id = uuidv4();

    for (let i = 0; i < newBoard.columns.length; i += 1) {
        newBoard.columns[i].id = uuidv4()
    }

    usersRepo.data.boards.push(newBoard);
    return newBoard;
}

function deleteBoard(boardId) {
    let boardIndex = null;
    for (let i = 0; i < usersRepo.data.boards.length; i += 1) {
        if (usersRepo.data.boards[i].id === boardId) {
            boardIndex = i;
            break;
        }
    }
    usersRepo.data.boards.splice(boardIndex, 1);

    usersRepo.data.task = usersRepo.data.task.filter(x => x.boardId !== boardId)


}

function updateBoard(boardId, body) {

    let boardIndex = null;
    for (let i = 0; i < usersRepo.data.boards.length; i += 1) {
        if (usersRepo.data.boards[i].id === boardId) {
            boardIndex = i;
            break;
        }
    }
    const updatedBoard = {
        ...body,
        id: boardId

    };

    usersRepo.data.boards[boardIndex] = {...updatedBoard};
    return updatedBoard;
}

module.exports = {
    getAllBoards,
    getOneBoard,
    addBoard,
    deleteBoard,
    updateBoard,
};
