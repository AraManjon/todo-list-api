import { Uuid } from "../../shared/domain/value-objects/Uuid";

export class TaskId extends Uuid {

    constructor(value: string) {
        super(value)
    }
}