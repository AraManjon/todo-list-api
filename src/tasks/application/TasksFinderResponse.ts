import { Task } from "../domain/Task";
import { TaskList } from "../domain/TaskList";
import { TaskResponse } from "./TaskReponse";

export class TasksFinderResponse {
    readonly tasks: TaskResponse[];

    constructor() {
        this.tasks = []
    }

    toPlainText(taskList: TaskList) {
        taskList.iterable().forEach((task: Task) => {

            const {id, name, description} = task.toPrimitives()

            const taskResponse = new TaskResponse(id, name, description)

            this.tasks.push(taskResponse)
        });

        return this.tasks
    }
}