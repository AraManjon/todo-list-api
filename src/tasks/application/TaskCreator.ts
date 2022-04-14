import { TaskDescription } from "../domain/TaskDescription";
import { TaskName } from "../domain/TaskName";
import { TaskId } from "../domain/TaskId";
import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRespository";
import { TaskCreatorRequest } from "./TaskCreatorRequest";

export class TaskCreator {
    private readonly repository

    constructor(repository: TaskRepository) {
        this.repository = repository
    }

    async run(request: TaskCreatorRequest) {

        const task = new Task({ id: new TaskId(request.id), name: new TaskName(request.name), description: new TaskDescription(request.description) })
        return this.repository.save(task)
    }
}