import { InvalidArgumentError } from './InvalidArgumentError'

export class Name {
    public readonly value: string

    constructor (value: string) {
        this.validateName(value)
        this.value = value
    }

    private validateName (name: string): void {
        if(!name) {
            throw new InvalidArgumentError(`<${this.constructor.name} does not allow the value ${name}>`)
        }
    }

    public toString(): string {
        return this.value
    }
}