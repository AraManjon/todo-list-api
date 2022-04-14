import { Collection, MongoClient } from "mongodb";
import { Task } from "../domain/Task";
import { TaskList } from "../domain/TaskList";
import { TaskRepository } from "../domain/TaskRespository";

export class MongoTaskRepository implements TaskRepository {

    constructor(private readonly client: Promise<MongoClient>) { }

    save(task: Task): Promise<void> {
        const agregate = task.toPrimitives()

        return this.persist(agregate.id, task)
    }

    async searchAll(): Promise<TaskList> {
        const collection = await this.collection()

        const all = collection.find()
        const taskList = new TaskList()

        await all.forEach((element) => {
            const { _id, name, description } = element
            const id = _id.toString()
            const task = Task.fromPrimitives({ id, name, description })
            taskList.save(task)

        });

        return taskList
    }

    private async persist(id: string, task: Task): Promise<void> {
        const collection = await this.collection()

        const document = { ...task.toPrimitives(), _id: id, id: undefined }
        await collection.updateOne({ _id: id }, { $set: document }, { upsert: true })
    }

    protected collectionName(): string {
        return 'tasks'
    }

    private async collection(): Promise<Collection> {
        return (await this.client).db().collection(this.collectionName())
    }
}