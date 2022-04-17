import { TaskRepository } from "../domain/TaskRespository";
import { TasksFinderResponse } from "./TasksFinderResponse";

export class TasksFinder {
    private repository: TaskRepository

    constructor(repository: TaskRepository) {
        this.repository = repository
    }
    
    async run() {
        const taskList = await this.repository.searchAll()
        
        return TasksFinderResponse.create(taskList)
    }
}