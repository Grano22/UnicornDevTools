import DataDictonary from "../dictonaries/dictonary";

/**
 * Generator abstract
 */
export interface OutputGeneratorConfig {
    [key : string] : any
}

export const OutputGeneratorConfigDefault : OutputGeneratorConfig = {};

export default abstract class OutputGenerator { //<OutputGeneratorConfig>
    public constructor(generatorConfig : OutputGeneratorConfig | null = null) {};

    /**
     * Generate from
     */
    public abstract generateFrom() : any;

    /**
     * Generate genric output
     * @param args,...
     * @returns {any}
     */
    public abstract generate() : any;

    /**
     * Generate generic output model
     * @param args,...
     * @returns {any}
     */
    protected abstract generateModel(dictonaries : Array<DataDictonary>) : any;

    /**
     * Configure this output generator
     * @param {object} inputConfig
     * @return {void}
     */
    public abstract config(inputConfig: { [key: string]: any }) : void;
}