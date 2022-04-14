import { TaskRepository } from "../domain/TaskRespository";
import { TasksFinderResponse } from "./TasksFinderResponse";

export class TasksFinder {
    private repository: TaskRepository

    constructor(repository: TaskRepository) {
        this.repository = repository
    }
    
    async run() {
        const all = await this.repository.searchAll()
        
        const tasks: TasksFinderResponse = new TasksFinderResponse()

        return tasks.toPlainText(all)
    }
}