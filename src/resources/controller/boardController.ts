const boardService = require('../service/board.service.ts');


const getAllBoards = async () =>
    boardService.getAllBoardsService()


const getOneBoard = async (req: { params: { boardId: string; }; }, res: { status: (arg0: number) => void; send: (arg0: string) => void; }) => {
    const {boardId} = req.params;
    if (!boardService.getOneBoardService(boardId)[0]) {
        res.status(404);
        res.send('no ID');

    } else {
        const answer = await boardService.getOneBoardService(boardId)[0];
        res.send(answer);
    }

};

const addBoard = async (req: { body: object; }, res: { status: (arg0: number) => void; }) => {
    res.status(201);
    return boardService.addBoardService(req.body);
};

const updateBoard = async (req: { params: { boardId: string; }; body: object; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(200);
    return boardService.updateBoardService(boardId, req.body);
};

const deleteBoard = async (req: { params: { boardId: string; }; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(204);
    return boardService.deleteBoardService(boardId);
};

module.exports = {
    getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard
}