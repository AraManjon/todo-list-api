import { TaskCreatorRequest } from "../../../src/tasks/application/TaskCreatorRequest";
import { TaskDescription } from "../../../src/tasks/domain/TaskDescription";
import { TaskId } from "../../../src/tasks/domain/TaskId";
import { TaskName } from "../../../src/tasks/domain/TaskName";
import { TaskDescriptionMother } from "../domain/TaskDescriptionMother";
import { TaskIdMother } from "../domain/TaskIdMother";
import { TaskNameMother } from "../domain/TaskNameMother";

export class TaskCreatorRequestMother {
    static create (id: TaskId, name: TaskName, description: TaskDescription): TaskCreatorRequest {
        return {id: id.toString(), name : name.toString(), description: description.toString()}
    }
    static random (): TaskCreatorRequest {
        return this.create(TaskIdMother.random(), TaskNameMother.random(), TaskDescriptionMother.random())
    }
    static invalidRequestTaskNameNotContent() : TaskCreatorRequest {
        return { id: TaskIdMother.random().toString(), name: TaskNameMother.invalidTaskNameNotContent(), description: TaskDescriptionMother.random().toString()}
    }

    static invalidRequestTaskIdFormat() : TaskCreatorRequest {
        return { id: TaskIdMother.invalidIdFormat(), name: TaskNameMother.random().toString(), description: TaskDescriptionMother.random().toString()}
    }
}