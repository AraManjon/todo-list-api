import { Description } from "../../../src/shared/domain/value-objects/Description";
import { Name } from "../../../src/shared/domain/value-objects/Name";
import { Uuid } from "../../../src/shared/domain/value-objects/Uuid";
import { TaskCreator } from "../../../src/tasks/application/TaskCreator"
import { Task } from "../../../src/tasks/domain/Task"
import { TaskRepositoryMock } from "../__mocks__/TaskRepositoryMock"

describe('TaskCreator', () => {

    let repository: TaskRepositoryMock;
    let creator: TaskCreator;

    beforeEach(() => {
        repository = new TaskRepositoryMock()
        creator = new TaskCreator(repository)
    })

    it('should create a valid task', async () => {

        const id = new Uuid('id')
        const name = new Name('name')
        const description = new Description('description')
        const expectedTask = new Task(id, name, description)

        await creator.run({ id: id.value, name: name.value, description: description.value })

        repository.assertSaveHaveBeenCalled(expectedTask);
    })
})