/**
 * Email output generator
 */
import DataDictonary from '../dictonaries/dictonary';
import TextOutputGenerator, { TextOutputGeneratorConfig, TextOutputGeneratorConfigDefault } from './textOutputGenerator';

export interface EmailOutputGeneratorConfig extends TextOutputGeneratorConfig {
    subDoaminsCount : number,
    domainsCount : number,
}

export const EmailOutputGeneratorConfigDefault : EmailOutputGeneratorConfig = Object.assign(TextOutputGeneratorConfigDefault, {
    dictonary : new DataDictonary({
        username : new Map<string, string>(),
        domain : new Map<string, string>(),
        subDomain : new Map<string, string>()
    }),
    subDoaminsCount : 1,
    domainsCount : 1,
});

export default class EmailOutputGenerator extends TextOutputGenerator {
    /**
     * @property dictonaries
     */
     protected dictonaries : { [key : string] : any } = {};

     /**
     * @property conf
     */
    protected conf : EmailOutputGeneratorConfig = EmailOutputGeneratorConfigDefault;
    
    constructor(generatorConfig : EmailOutputGeneratorConfig | null = null) {
        super(generatorConfig);
    }

    /**
     * Generate username to email model
     * @return {string}
     */
    protected generateUsername() : string {
        return super.generateModel(this.dictonaries?.userame);
    }

    /**
     * Generate domain to email model
     * @return {string}
     */
    protected generateDomain() : string {
        return super.generateModel(this.dictonaries?.domain);
    }

    /**
     * Generate subdomain to email model
     * @return {string}
     */
    protected generateSubdomain() : string {
        return super.generateModel(this.dictonaries?.subDomain);
    }

    /**
     * Generate model for email adress pattern
     * @return {string}
     */
    protected generateModel() : string {
        return this.generateUsername()+"@"+this.generateSubdomain()+"."+this.generateDomain();
    }
}