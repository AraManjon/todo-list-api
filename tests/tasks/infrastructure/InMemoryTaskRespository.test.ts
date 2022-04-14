import { TaskDescription } from "../../../src/tasks/domain/TaskDescription";
import { TaskName } from "../../../src/tasks/domain/TaskName";
import { TaskId } from "../../../src/tasks/domain/TaskId";
import { Task } from "../../../src/tasks/domain/Task"
import { InMemoryTaskRepository } from "../../../src/tasks/infrastructure/InMemoryTaskRepository"
import { TaskMother } from "../domain/TaskMother";

describe('InMemoryTaskRespository', () => {

    let repository: InMemoryTaskRepository;

    beforeEach(() => {
        repository = new InMemoryTaskRepository()
    })

    it('should save a task', async () => {

        const expectedTask = TaskMother.random()
        
        await repository.save(expectedTask)

        const task = await repository.find('id')
        expect(task).toEqual(expectedTask)
    })
})