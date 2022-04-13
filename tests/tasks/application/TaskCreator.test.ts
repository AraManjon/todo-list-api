import { TaskCreator } from "../../../src/tasks/application/TaskCreator"
import { Task } from "../../../src/tasks/domain/Task"
import { TaskRepositoryMock } from "../__mocks__/TaskRepositoryMock"

describe('TaskCreator', () => {
    
    let repository : TaskRepositoryMock;

    beforeEach(()=> {
        repository = new TaskRepositoryMock()
    })

    it('should create a valid task', async () => {

        const creator = new TaskCreator(repository)
        const id = 'id'
        const name = 'name'
        const description = 'description'
        const expectedTask = new Task(id, name, description)

        await creator.run(id, name, description)

        repository.assertSaveHaveBeenCalled(expectedTask);
    })
})