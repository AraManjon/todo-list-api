import container from "../../../src/backend/dependency-injection";
import { Task } from "../../../src/tasks/domain/Task";
import { TaskRepository } from "../../../src/tasks/domain/TaskRespository";
import { EnvironmentArranger } from "../../shared/infrastructure/arranger/EnvironmentArranger";
import { TaskListMother } from "../domain/TaskListMother";
import { TaskMother } from "../domain/TaskMother";

const repository: TaskRepository = container.get('TaskRepository')

const environmentArranger: Promise<EnvironmentArranger> = container.get('EnvironmentArranger')
let taskExpected: Task

beforeAll(async () => {
    await (await environmentArranger).arrange();
    taskExpected = TaskMother.random()

});

afterAll(async () => {
    await (await environmentArranger).arrange();
    await (await environmentArranger).close();
});

describe('TaskRepository', () => {
    describe('save', () => {
        it('should save a task', async () => {

            await repository.save(taskExpected)
        })
    })

    describe('searchAll', () => {
        it('should search all tasks', async () => {

            await repository.save(taskExpected)
            const taskList = TaskListMother.createWithContent(taskExpected)

            const tasks = await repository.searchAll()

            expect(tasks.toEqual(taskList)).toBe(true)
        })
    })
})