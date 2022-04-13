import { Task } from "../../../src/tasks/domain/Task"
import { InMemoryTaskRepository } from "../../../src/tasks/infrastructure/InMemoryTaskRepository"

describe('InMemoryTaskRespository', () => {
    it('should save a task', async () => {
        const expectedTask = new Task('id', 'name', 'description')
        const repository = new InMemoryTaskRepository()

        await repository.save(expectedTask)

        const task = await repository.find('id')
        expect(task).toEqual(expectedTask)
    })
})