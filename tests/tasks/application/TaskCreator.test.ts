import { TaskCreator } from "../../../src/tasks/application/TaskCreator"
import { TaskNameNotHasContentException } from '../../../src/tasks/domain/exceptions/TaskNameNotHasContentException';
import { TaskRepositoryMock } from "../__mocks__/TaskRepositoryMock"
import { TaskCreatorRequestMother } from "./TaskCreatorRequestMother";
import { TaskMother } from "../domain/TaskMother";
import { InvalidArgumentError } from "../../../src/shared/domain/value-objects/InvalidArgumentError";

describe('TaskCreator', () => {

    let repository: TaskRepositoryMock;
    let creator: TaskCreator;

    beforeEach(() => {
        repository = new TaskRepositoryMock()
        creator = new TaskCreator(repository)
    })

    it('should create a valid task', async () => {

        const request = TaskCreatorRequestMother.random()
        const task = TaskMother.fromRequest(request)

        await creator.run(request)

        repository.assertLastSavedTaskIs(task);
    })

    it('should throw error if task name not has content', async () => {

        expect(() => {
            const request = TaskCreatorRequestMother.invalidRequestTaskNameNotContent()
            const task = TaskMother.fromRequest(request)

            creator.run(request)
            repository.assertLastSavedTaskIs(task);
        }).toThrow(TaskNameNotHasContentException)
    })

    it('should throw error if task id is not correct format', async () => {

        expect(() => {
            const request = TaskCreatorRequestMother.invalidRequestTaskIdFormat()
            const task = TaskMother.fromRequest(request)

            creator.run(request)
            repository.assertLastSavedTaskIs(task);
        }).toThrow(InvalidArgumentError)
    })
})