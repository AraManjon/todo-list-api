import { Task } from "../../../src/tasks/domain/Task";
import { TaskList } from "../../../src/tasks/domain/TaskList";

export class TaskListMother {

  static createWithContent(task: Task): TaskList {
    const taskList = new TaskList()
    taskList.save(task)

    return taskList
  }
}