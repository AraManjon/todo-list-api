import { StringValueObject } from '../../shared/domain/value-objects/StringValueObject'
export class TaskDescription extends StringValueObject {
    constructor(value: string) {
        super(value)
    }
}