import Throwable from "./throwable";

//const ErrorProto = typeof Error !=="undefined" ? Error : null;

export default class Err implements Throwable {
    protected message : string;
    protected code : number | string;
    protected fileName : string;
    protected lineNumber : number;

    /**
     * Create Exception
     * @since 1.0.0
     */
    constructor(message : string, code : number | string = -1, previous: Throwable | null = null) {
        this.message = message;
        this.code = code;
    }

    public getMessage() : string {
        return this.message;
    }

    public getCode() : number | string {
        return this.code;
    }

    public getFile() : string {
        return this.fileName;
    }

    public getLine() : number {
        return this.lineNumber;
    }

    public getTrace() : Array<string> {
        return [];
    }

    public getTraceAsSring() : string {
        return this.getTrace().join();
    }

    public getPrevious() : Err | null {
        return null;
    }

    public toSource() {
        
    }

    public toString() : string {
        return this.message;
    }

    public valueOf() : string {
        return this.message;
    }
}