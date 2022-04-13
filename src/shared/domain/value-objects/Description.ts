export class Description {
    public readonly value: string

    constructor (value: string) {
        this.value = value
    }

    public toString(): string {
        return this.value
    }
}