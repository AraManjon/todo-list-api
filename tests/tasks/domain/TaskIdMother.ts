import { TaskId } from "../../../src/tasks/domain/TaskId"
import { WordMother } from "../../shared/domain/WordMother"

export class TaskIdMother {
    static create(value: string): TaskId {
        return new TaskId(value)
    }

    static random(): TaskId {
        return this.create(WordMother.random())
    }

}