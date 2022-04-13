import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRespository";

export class InMemoryTaskRepository implements TaskRepository {

    private inMemory: Array<Task> = []

    async save(task: Task): Promise<void> {
        this.inMemory.push(task)
        return new Promise(resolve => resolve())
    }

    async find(id: string): Promise<Task | void> {
        const taskFound = this.inMemory.find(task => task.getId() === id)
        await new Promise<void>(resolve => resolve())
        return taskFound;
    }
}