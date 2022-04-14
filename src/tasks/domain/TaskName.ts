import { StringValueObject } from '../../shared/domain/value-objects/StringValueObject'
import { TaskNameNotHasContentException } from './exceptions/TaskNameNotHasContentException'

export class TaskName extends StringValueObject {
    constructor(value: string) {
        super(value)
        this.ensureHasContent(value)
    }
    private ensureHasContent(value: string): void {
        if (!value) {
            throw new TaskNameNotHasContentException(`The task name can not be empty`)
        }
    }
}