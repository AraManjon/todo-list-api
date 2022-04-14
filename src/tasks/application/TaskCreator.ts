import { TaskDescription } from "../domain/TaskDescription";
import { TaskName } from "../domain/TaskName";
import { TaskId } from "../domain/TaskId";
import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRespository";
import { TaskCreatorRequest } from "./TaskCreatorRequest";

export class TaskCreator {
    private repository: TaskRepository

    constructor(repository: TaskRepository) {
        this.repository = repository
    }
    
    async run(request: TaskCreatorRequest) {
        
        const description = new TaskDescription(request.description)
        const name = new TaskName(request.name)
        const id = new TaskId(request.id)
        const task = new Task({ id, name, description })
        await this.repository.save(task)
    }
}