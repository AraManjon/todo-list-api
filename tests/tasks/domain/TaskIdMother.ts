import { TaskId } from "../../../src/tasks/domain/TaskId"
import { UuidMother } from "../../shared/domain/UuidMother"

export class TaskIdMother {
    static create(value: string): TaskId {
        return new TaskId(value)
    }

    static creator() {
        return () => TaskIdMother.random();
    }

    static random(): TaskId {
        return this.create(UuidMother.random());
    }

    static invalidIdFormat(): string {
        return 'invalid-id'
    }

}