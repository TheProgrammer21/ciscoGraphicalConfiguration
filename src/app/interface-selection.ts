export class InterfaceSelection {
    private type: string;
    private prefix: string;
    private start: number;
    private end: number;
    private range: boolean; //True wenn ein Range, false wenn einzelnes (wenn start == end)

    constructor(startInterface: string, endInterface: string) {
        let split = this.disassembleInterface(startInterface);
        this.type = split.type;
        this.prefix = split.prefix;
        this.start = split.num;

        split = this.disassembleInterface(endInterface);
        this.end = split.num;

        if (this.start > this.end) {
            throw new Error("Starting interface number may not be greater than ending interface number!");
        }

        this.range = this.start != this.end;
    }

    private disassembleInterface(int: string) {
        let result: any = {};

        result.type = int.split(" ")[0];
        int = int.split(" ")[1];
        result.prefix = int.substring(0, int.lastIndexOf("/") + 1);
        result.num = int.substr(int.lastIndexOf("/") + 1);
        return result;
    }


    public getType(): string {
        return this.type;
    }

    public getPrefix(): string {
        return this.prefix;
    }

    public getStart(): string {
        return this.type + " " + this.prefix + this.start;
    }

    public getEnd(): string {
        return this.type + " " + this.prefix + this.end;
    }

    public isRange(): boolean {
        return this.range;
    }
}