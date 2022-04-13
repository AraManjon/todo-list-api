import { Description } from "../../shared/domain/value-objects/Description";
import { Name } from "../../shared/domain/value-objects/Name";
import { Uuid } from "../../shared/domain/value-objects/Uuid";
import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRespository";
import { TaskCreatorRequest } from "./TaskCreatorRequest";

export class TaskCreator {
    private readonly repository

    constructor(repository: TaskRepository) {
        this.repository = repository
    }

    async run (request : TaskCreatorRequest) {
        const task = new Task(new Uuid(request.id), new Name(request.name), new Description(request.description))
        
        return this.repository.save(task)
    }
}