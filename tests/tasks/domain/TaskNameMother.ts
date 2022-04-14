import { TaskName } from "../../../src/tasks/domain/TaskName"
import { WordMother } from "../../shared/domain/WordMother"

export class TaskNameMother {
    static create(value: string): TaskName {
        return new TaskName(value)
    }

    static random(): TaskName {
        return this.create(WordMother.random())
    }
    
    static invalidNotContentTaskName(): string {
        return ''
    }
}