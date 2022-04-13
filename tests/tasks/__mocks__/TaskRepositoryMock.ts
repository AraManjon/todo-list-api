import { Task } from "../../../src/tasks/domain/Task";
import { TaskRepository } from "../../../src/tasks/domain/TaskRespository";

export class TaskRepositoryMock implements TaskRepository {
    private saveMock: jest.Mock;

    constructor () {
        this.saveMock = jest.fn();
    }

    async save(task: Task): Promise<void> {
        this.saveMock(task)
    }

    assertSaveHaveBeenCalled(expected: Task): void {
        expect(this.saveMock).toHaveBeenCalledWith(expected)
    }

}