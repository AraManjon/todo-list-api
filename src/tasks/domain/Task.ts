import { Uuid } from "../../shared/domain/value-objects/Uuid"

export class Task {
    private readonly id: Uuid
    private readonly name: string
    private readonly description: string

    constructor(id: Uuid, name: string, description: string){
        this.id = id
        this.name = name
        this.description = description
    }

    getId () {
        return this.id
    }
}