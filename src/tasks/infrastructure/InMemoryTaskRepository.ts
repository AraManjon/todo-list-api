import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRespository";

export class InMemoryTaskRepository implements TaskRepository {

    private inMemory: Array<Task> = []

    async save(task: Task): Promise<void> {
        this.inMemory.push(task)
    }

    async find(id: string): Promise<Task | void> {
        const taskFound = this.inMemory.find(task => task.getId().value === id)
        return taskFound;
    }
}