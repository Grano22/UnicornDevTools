export default abstract class Throwable {
    public abstract getMessage() : string;
    public abstract getCode() : number | string;
    public abstract getFile() : string;
    public abstract getLine() : number;
    public abstract getTrace() : Array<string>;
    public abstract getTraceAsSring() : string;
    public abstract getPrevious() : Throwable | null;
    public abstract toString() : string;
    public abstract valueOf() : string;
}