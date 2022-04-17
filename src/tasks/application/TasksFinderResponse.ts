import { Task } from "../domain/Task";
import { TaskList } from "../domain/TaskList";

type TaskReponse = {
    id: string;
    name: string;
    description: string;
}

export class TasksFinderResponse {

    static create(taskList: TaskList) {
        const tasks: TaskReponse[] = []
        taskList.iterable().forEach((task: Task) => {

            const taskPlain = task.toPrimitives()

            tasks.push(taskPlain)
        });

        return tasks
    }
}