import { Description } from "../../shared/domain/value-objects/Description"
import { Name } from "../../shared/domain/value-objects/Name"
import { Uuid } from "../../shared/domain/value-objects/Uuid"

export class Task {
    private readonly id: Uuid
    private readonly name: Name
    private readonly description: Description

    constructor(id: Uuid, name: Name, description: Description){
        this.id = id
        this.name = name
        this.description = description
    }

    getId () {
        return this.id
    }
}