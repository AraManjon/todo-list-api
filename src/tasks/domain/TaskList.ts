import { Task } from "./Task"

export class TaskList {
    
    private readonly list: Task[]

    constructor() {
        this.list = []
    }

    public save (task: Task): void {
        this.list.push(task)
    }

    iterable () {
        return this.list
    }

    toEqual(taskList: TaskList): boolean {

        let isSameTaskList = true

        this.list.forEach((task, index) => {
            const taskListToCompare = taskList.iterable()
            const taskToCompare = taskListToCompare[index].toPrimitives()
            const {id, name, description} = task.toPrimitives()

            const isSameId = taskToCompare.id === id
            const isSameName = taskToCompare.name === name
            const isSameDescription = taskToCompare.description === description
            if(!isSameId || !isSameName || !isSameDescription) isSameTaskList = false
        })
        return isSameTaskList
    }
}