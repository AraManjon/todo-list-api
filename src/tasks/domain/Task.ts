export class Task {
    private id
    private name
    private description

    constructor(id: string, name: string, description: string){
        this.id = id
        this.name = name
        this.description = description
    }

    getId () {
        return this.id
    }
}