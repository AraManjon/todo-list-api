import validate from 'uuid-validate'
import { InvalidArgumentError } from './InvalidArgumentError'

export class Uuid {
    public readonly value: string

    constructor(value: string) {
        this.validateUuid(value)
        this.value = value
    }

    private validateUuid(id: string): void {
        if (validate(id)) {
            throw new InvalidArgumentError(`<${this.constructor.name} does not allow the value ${id}>`)
        }
    }

    public toString(): string {
        return this.value
    }

    public toEquals(expected: string): boolean {
        return this.value === expected
    }
}