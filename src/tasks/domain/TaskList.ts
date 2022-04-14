import { Task } from "./Task"

export class TaskList {
    private readonly list: Array<Task>

    constructor() {
        this.list = []
    }

    public save (task: Task): void {
        this.list.push(task)
    }
}