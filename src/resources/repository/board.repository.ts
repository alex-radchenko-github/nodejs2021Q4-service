import {getRepository} from "typeorm";
import {Board} from "../../entity/board";
import {Columndb} from "../../entity/column";
import {Task} from "../../entity/task";

// import {User} from "../../entity/user";


/**
 * Returns a board by id
 * @param boardId - board id
 * @returns Returns a board by id if the board is present
 */
async function getOneBoardRepo(boardId: string) {
    const boardRepository = await getRepository(Board)
    const board = await boardRepository.findOne({id: boardId})

    if (board === undefined) {
        return false
    }
    const columnRepository = await getRepository(Columndb)
    const columns = await columnRepository.find({where: [{linkboard: boardId}], select: ["id", "title", "order"]})
    const res = []
    for (let i = 0; i < columns.length; i += 1) {
        const columnsFromBd: { id: string, title: string, order: number } = {
            id: 'string',
            title: 'string',
            order: 1
        }
        columnsFromBd.id = columns[i].id
        columnsFromBd.title = columns[i].title
        columnsFromBd.order = columns[i].order
        res.push(columnsFromBd)
    }
    const aaa: { id: string , title:string, columns: object} = {
        id: "",
        title: "",
        columns: []
    }
    aaa.id = board.id
    aaa.title = board.title
    aaa.columns = res
    return aaa


}

/**
 * Returns board's list
 * @returns board's list
 */
// const getAllBoardsRepo = (): object => repoForBoard.data.boards;

async function getAllBoardsRepo() {
    const boardRepository = await getRepository(Board)
    const res = []
    const allboard = await boardRepository.find()

    for (let i = 0; i < allboard.length; i += 1) {
        res.push(await getOneBoardRepo(allboard[i].id))
    }

    return res
}


/**
 * add a new board
 * @param board - object with a new board
 * @returns object with new board with board id and each column's id
 */
async function addBoardRepo(board: { title: string, id: string, columns: { title: string, order: number }[] }) {
    const newBoard = new Board()
    newBoard.title = await board.title
    await newBoard.save()
    // return newBoard

    const newBoardForReturn = board
    newBoardForReturn.id = newBoard.id

    for (let i = 0; i < board.columns.length; i += 1) {

        const newColumn = new Columndb()
        newColumn.title = board.columns[i].title
        newColumn.order = board.columns[i].order
        newColumn.linkboard = newBoard.id
        await newColumn.save()
    }

    return newBoardForReturn
    // let aaa = {
    //     id: '1a5bb0d3-f7b0-4f74-9ad4-36dd0b1d10f0',
    //     title: 'Autotest board',
    //     columns: [
    //         { id: '1a5bb0d3-f7b0-4f74-9ad4-36dd0b1d10f1', title: 'Backlog', order: 1 },
    //         { id: '2a5bb0d3-f7b0-4f74-9ad4-36dd0b1d10f0', title: 'Sprint', order: 2 }
    //     ]
    // }
    // return aaa

    // const newBoard = board;
    // newBoard.id = uuidv4ForBoard();
    //
    // for (let i = 0; i < newBoard.columns.length; i += 1) {
    //
    //     newBoard.columns[i].id = uuidv4ForBoard()
    // }
    //
    // repoForBoard.data.boards.push(newBoard);
    // return newBoard;
}

/**
 * Delete a board by id in the board by id
 * @param boardid - board id
 */

async function deleteBoardRepo(boardid: string) {

    await getRepository(Board).delete({id: boardid})
    await getRepository(Task).delete({boardId: boardid})

    // let boardIndex = null;
    // for (let i = 0; i < repoForBoard.data.boards.length; i += 1) {
    //     if (repoForBoard.data.boards[i].id === boardId) {
    //         boardIndex = i;
    //         break;
    //     }
    // }
    // repoForBoard.data.boards.splice(boardIndex, 1);
    //
    // repoForBoard.data.task = repoForBoard.data.task.filter((x: { boardId: string; }) => x.boardId !== boardId)


}

/**
 * update a board with id
 * @param boardId - board id
 * @param body - object of updated board
 * @returns  an updated  board with id
 */
async function updateBoardRepo(boardId: string, body: { title: string, id: string }) {
    // console.log(body.title)
    const newBody = {title: body.title}
    // return newBody
    const boardRepository = await getRepository(Board)

    await boardRepository.update(boardId, {
        ...newBody
    })
    const newBoardForReturn = body
    newBoardForReturn.id = boardId

    return newBoardForReturn
    // return boardRepository


    // let boardIndex = 0;
    // for (let i = 0; i < repoForBoard.data.boards.length; i += 1) {
    //     if (repoForBoard.data.boards[i].id === boardId) {
    //         boardIndex = i;
    //         break;
    //     }
    // }
    // const updatedBoard = {
    //     ...body,
    //     id: boardId
    //
    // };
    //
    // repoForBoard.data.boards[boardIndex] = {...updatedBoard};
    // return updatedBoard;
}

module.exports = {
    getAllBoardsRepo,
    getOneBoardRepo,
    addBoardRepo,
    deleteBoardRepo,
    updateBoardRepo,
};
