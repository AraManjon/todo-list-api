import { Collection, MongoClient } from "mongodb";
import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRespository";

export class MongoTaskRepository implements TaskRepository {
    constructor(private readonly client: Promise<MongoClient>) { }

    private async persist(id: string, task: Task): Promise<void> {
        const collection = await this.collection()
        
        const document = { ...task.toPrimitives(), _id: id, id: undefined }
        await collection.updateOne({ _id: id }, { $set: document }, { upsert: true })
    }
    
    protected collectionName(): string {
        return 'tasks'
    }

    save(task: Task): Promise<void> {
        const agregate = task.toPrimitives()

        return this.persist(agregate.id, task)
    }


    private async collection(): Promise<Collection> {
        return (await this.client).db().collection(this.collectionName())
    }


}