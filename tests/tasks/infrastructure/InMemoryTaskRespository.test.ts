import { Task } from "../../../src/tasks/domain/Task"
import { InMemoryTaskRepository } from "../../../src/tasks/infrastructure/InMemoryTaskRepository"

describe('InMemoryTaskRespository', () => {

    let repository : InMemoryTaskRepository;

    beforeEach(()=> {
        repository = new InMemoryTaskRepository()
    })

    it('should save a task', async () => {

        const expectedTask = new Task('id', 'name', 'description')

        await repository.save(expectedTask)

        const task = await repository.find('id')
        expect(task).toEqual(expectedTask)
    })
})