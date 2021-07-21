import OutputGenerator, { OutputGeneratorConfig } from "./outputGenerator";

export interface TextOutputGeneratorConfig extends OutputGeneratorConfig {
    charsRangeFrom : number,
    charsRangeTo : number,
    charsLengthToleranceFrom : number,
    charsLengthToleranceTo : number,
    dictonaries? : Array<any>
}

export const TextOutputGeneratorConfigDefault : TextOutputGeneratorConfig = {
    charsRangeFrom : 0,
    charsRangeTo : 300,
    charsLengthToleranceFrom : 1,
    charsLengthToleranceTo : 60,
    dictonaries : []
}

/**
 * Text output generator
 */
export default class TextOutputGenerator extends OutputGenerator {
    /**
     * @property dictonaries
     */
    protected dictonaries : { [key : string] : any } = {};

    /**
     * @property conf
     */
    protected conf : TextOutputGeneratorConfig = TextOutputGeneratorConfigDefault;

    /**
     * @since 1.0.0
     * @param {TextOutputGeneratorConfig|null} generatorConfig
     */
    constructor(generatorConfig : TextOutputGeneratorConfig | null = null) {
        super(generatorConfig);
    }

    /**
     * Generate from
     * @return {string}
     */
    public generateFrom() : string {
        return this.generateModel();
    }

    /**
     * Gnerate
     * @return {string}
     */
    public generate() : string {
        return this.generateModel();
    }

    /**
     * Generate model of text
     * @param {Array<any> | null} dictonaries
     * @returns 
     */
    protected generateModel(dictonaries : Array<any> | null = []) : string {
        try {
            let fr = this.conf.charsLengthToleranceFrom, to = this.conf.charsLengthToleranceTo;
            for(;fr<to;fr++) String.fromCharCode(Math.floor(Math.random() * this.conf.charsRangeTo) + this.conf.charsRangeFrom);
        } catch(err) {
            return "";
        }
    }

    /**
     * Configure generator
     * @param {TextOutputGeneratorConfig} generatorConfig
     * @return {void}
     */
    public config(generatorConfig : TextOutputGeneratorConfig) : void {
        for(let ck in generatorConfig) {
            this.conf[ck] = generatorConfig[ck];
        }
    }
}