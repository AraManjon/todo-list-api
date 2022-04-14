import { TaskDescription } from "../../../src/tasks/domain/TaskDescription";
import { WordMother } from "../../shared/domain/WordMother";

export class TaskDescriptionMother {

    static create(value: string): TaskDescription {
        return new TaskDescription(value)
    }

    static random(): TaskDescription {
        return this.create(WordMother.random())
    }

}