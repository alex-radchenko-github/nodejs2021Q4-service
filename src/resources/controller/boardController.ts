const boardService = require('../service/board.service.ts');


// @ts-ignore
const getAllBoards = async () =>
    boardService.getAllBoards()


// @ts-ignore
const getOneBoard = async (req, res) => {
    const {boardId} = req.params;
    if (!boardService.getOneBoard(boardId)[0]) {
        res.status(404);
        res.send('no ID');

    } else {
        const answer = await boardService.getOneBoard(boardId)[0];
        res.send(answer);
    }

};

// @ts-ignore
const addBoard = async (req, res) => {
    res.status(201);
    return boardService.addBoard(req.body);
};

// @ts-ignore
const updateBoard = async (req, res) => {
    const {boardId} = req.params;
    res.status(200);
    return boardService.updateBoard(boardId, req.body);
};

// @ts-ignore
const deleteBoard = async (req, res) => {
    const {boardId} = req.params;
    res.status(204);
    return boardService.deleteBoard(boardId);
};

module.exports = {
    getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard
}