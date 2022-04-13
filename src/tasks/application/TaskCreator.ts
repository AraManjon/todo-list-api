import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRespository";

export class TaskCreator {
    constructor(private repository: TaskRepository) {}

    async run (id: string, name: string, description: string) {
        const task = new Task(id, name, description)
        
        return this.repository.save(task)
    }
}