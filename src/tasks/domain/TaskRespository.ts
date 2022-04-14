import { Task } from "./Task";
import { TaskList } from "./TaskList";

export interface TaskRepository {
    save(task: Task): Promise<void>
    searchAll(): Promise<TaskList>
}