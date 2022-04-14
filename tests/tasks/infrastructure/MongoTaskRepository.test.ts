import container from "../../../src/backend/dependency-injection";
import { TaskRepository } from "../../../src/tasks/domain/TaskRespository";
import { EnvironmentArranger } from "../../shared/infrastructure/arranger/EnvironmentArranger";
import { TaskListMother } from "../domain/TaskListMother";
import { TaskMother } from "../domain/TaskMother";

const repository: TaskRepository = container.get('TaskRepository')

const environmentArranger: Promise<EnvironmentArranger> = container.get('EnvironmentArranger')

beforeAll(async () => {
    await (await environmentArranger).arrange();

});

afterAll(async () => {
    await (await environmentArranger).arrange();
    await (await environmentArranger).close();
});

describe('TaskRepository',() => {
    describe('save', () => {
        it('should save a task', async ()=> {
            const taskExpected = TaskMother.random()

            await repository.save(taskExpected)
        })
    })
})