import { Task } from "../../../src/tasks/domain/Task";
import { TaskDescription } from "../../../src/tasks/domain/TaskDescription";
import { TaskId } from "../../../src/tasks/domain/TaskId";
import { TaskName } from "../../../src/tasks/domain/TaskName";
import { TaskCreatorRequestMother } from "../application/TaskCreatorRequestMother";
import { TaskDescriptionMother } from "./TaskDescriptionMother";
import { TaskIdMother } from "./TaskIdMother";
import { TaskNameMother } from "./TaskNameMother";

export class TaskMother {
    static create(id: TaskId, name: TaskName, description: TaskDescription): Task {
        return new Task({id, name, description});
      }
    
      static fromRequest({id, name, description }: { id: TaskIdMother, name: TaskDescriptionMother, description: TaskDescriptionMother }): Task {
        return this.create(
          TaskIdMother.create(id.toString()),
          TaskNameMother.create(name.toString()),
          TaskDescriptionMother.create(description.toString())
        );
      }
    
      static random(): Task {
        return this.create(TaskIdMother.random(), TaskNameMother.random(), TaskDescriptionMother.random());
      }
}