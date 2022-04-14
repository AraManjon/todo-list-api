import { TaskRepositoryMock } from "../__mocks__/TaskRepositoryMock"
import { TasksFinder } from "../../../src/tasks/application/TasksFinder";

describe('TasksFinder', () => {

    let repository: TaskRepositoryMock;
    let finder: TasksFinder;

    beforeEach(() => {
        repository = new TaskRepositoryMock()
        finder = new TasksFinder(repository)
    })


    it('should find all tasks', async () => {
        
        const spy = jest.spyOn(repository, 'searchAll');

        await finder.run()

        expect(spy).toHaveBeenCalledTimes(1)
    })

    
})