import { Task } from "../../../src/tasks/domain/Task";
import { TaskList } from "../../../src/tasks/domain/TaskList";
import { TaskRepository } from "../../../src/tasks/domain/TaskRespository";

export class TaskRepositoryMock implements TaskRepository {
    private saveMock: jest.Mock;

    constructor() {
        this.saveMock = jest.fn();
    }

    async searchAll(): Promise<TaskList> {
        return new TaskList()
    }

    async save(task: Task): Promise<void> {
        this.saveMock(task)
    }

    assertLastSavedTaskIs(expected: Task): void {
        expect(this.saveMock).toHaveBeenCalledWith(expected)
    }
}