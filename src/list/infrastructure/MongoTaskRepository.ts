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

    async findAll(): Promise<TaskList> {
        const taskList = new TaskList()
        const all = await this.retrieveAll()

        all.forEach(({_id, name, description}) => {
            const id = _id.toString()
            taskList.save(Task.fromPrimitives({id, name, description}))
        });

        return taskList
    }
    
    private async retrieveAll () {
        const collection = await this.collection()
        
        return collection.find() 
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