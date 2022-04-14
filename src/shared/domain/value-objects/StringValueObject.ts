export abstract class StringValueObject {
    private readonly value: string

    constructor (value: string) {
        this.value = value
    }

    public toString(): string {
        return this.value
    }

    public toEquals(expected: string): boolean {
        return this.value === expected
    }
}