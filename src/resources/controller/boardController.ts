const boardService = require('../service/board.service.ts');

/**
 * Returns board's list
 * @returns board's list
 */

const getAllBoards = async () =>
    boardService.getAllBoardsService()

/**
 * Returns a board by id
 * @param req - server request
 * @param res - server response
 * @returns Returns a board by id if the board is present
 * @returns 404 status code if the board is not present
 */

const getOneBoard = async (req: { params: { boardId: string; }; }, res: { status: (arg0: number) => void; send: (arg0: string) => void; }) => {
    const {boardId} = req.params;

    if (await boardService.getOneBoardService(boardId) === false) {
        res.status(404);
        res.send('no ID');
        return 'no ID'

    } 
        return boardService.getOneBoardService(boardId);
    

};

/**
 * add a new board
 * @param req - server request
 * @param res - server response
 * @returns  a new board
 * @returns  201 status code
 */

const addBoard = async (req: { body: object; }, res: { status: (arg0: number) => void; }) => {
    res.status(201);
    return boardService.addBoardService(req.body);
};

/**
 * update a board with id
 * @param req - server request
 * @param res - server response
 * @returns 200 status code
 * @returns  an updated  board with id
 */

const updateBoard = async (req: { params: { boardId: string; }; body: object; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(200);
    return boardService.updateBoardService(boardId, req.body);
};

/**
 * Delete a Board by id
 * @param req - server request
 * @param res - server response with status code
 * @returns 204 status code
 */
const deleteBoard = async (req: { params: { boardId: string; }; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(204);
    await boardService.deleteBoardService(boardId);
};

module.exports = {
    getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard
}