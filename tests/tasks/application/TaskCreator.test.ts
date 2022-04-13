import { TaskCreator } from "../../../src/tasks/application/TaskCreator"
import { Task } from "../../../src/tasks/domain/Task"
import { TaskRepository } from "../../../src/tasks/domain/TaskRespository"

describe('TaskCreator', () => {
    it('should create a valid task', async () => {

        const repository: TaskRepository = {
            save : jest.fn()
        }
        const creator = new TaskCreator(repository)
        const id = 'id'
        const name = 'name'
        const description = 'description'
        const expectedTask = new Task(id, name, description)

        await creator.run(id, name, description)

        expect(repository.save).toHaveBeenCalledWith(expectedTask);
    })
})