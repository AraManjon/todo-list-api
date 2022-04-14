import { TaskDescription } from "../../../src/tasks/domain/TaskDescription";
import { TaskName } from "../../../src/tasks/domain/TaskName";
import { TaskId } from "../../../src/tasks/domain/TaskId";
import { TaskCreator } from "../../../src/tasks/application/TaskCreator"
import { Task } from "../../../src/tasks/domain/Task"
import { TaskNameNotHasContentException } from '../../../src/tasks/domain/exceptions/TaskNameNotHasContentException';
import { TaskRepositoryMock } from "../__mocks__/TaskRepositoryMock"
import { TaskCreatorRequestMother } from "./TaskCreatorRequestMother";
import { TaskMother } from "../domain/TaskMother";

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
            const request = TaskCreatorRequestMother.invalidRequestTaskName()
            const task = TaskMother.fromRequest(request)

            creator.run(request)
            repository.assertLastSavedTaskIs(task);
          }).toThrow(TaskNameNotHasContentException)
    })
})