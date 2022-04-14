import { TaskDescription } from "./TaskDescription"
import { TaskName } from "./TaskName"
import { TaskId } from "./TaskId"

export class Task {
    private readonly id: TaskId
    private readonly name: TaskName
    private readonly description: TaskDescription

    constructor({ id, name, description }: { id: TaskId, name: TaskName, description: TaskDescription }) {
        this.id = id
        this.name = name
        this.description = description
    }

    public toEquals({ id, name, description }: { id: TaskId, name: TaskName, description: TaskDescription }): boolean {
        return (this.id.toEquals(id.toString()) && this.name.toEquals(name.toString()) && this.description.toEquals(description.toString()))
    }

    public isSameId(id: string): boolean {
        return id.toString() === id
    }

    public toPrimitives(): any {
        return {
            id: this.id.toString(),
            name: this.name.toString(),
            description: this.description.toString()
          };
    }
}