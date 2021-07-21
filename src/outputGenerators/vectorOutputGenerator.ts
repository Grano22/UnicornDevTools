import ImageOutputGenerator, { ImageOutputGeneratorConfig, ImageOutputGeneratorConfigDefault } from "./imageOutputGenerator";

export interface VectorOutputGeneratorConfig extends ImageOutputGeneratorConfig {

}

export const VectorOutputGeneratorConfigDefault : VectorOutputGeneratorConfig = Object.assign(ImageOutputGeneratorConfigDefault, {

});

export default class VectorOutputGenerator extends ImageOutputGenerator {
    /**
     * @property conf
     */
    protected conf : VectorOutputGeneratorConfig = VectorOutputGeneratorConfigDefault;

    /**
     * Generate image as SVG container
     */
    public generateImage() : HTMLOrSVGElement {
        return document.createElement("svg");
    }

    /**
     * @since 1.0.0
     * @param {BitmapOutputGeneratorConfig|null} generatorConfig
     */
     constructor(generatorConfig : VectorOutputGeneratorConfig | null = null) {
        super(generatorConfig);
    }

    /**
     * Generate from
     * @return {HTMLImageElement}
     */
     public generateFrom() : HTMLImageElement {
        return this.generateModel();
    }

    /**
     * Gnerate
     * @return {HTMLImageElement}
     */
    public generate() : HTMLImageElement {
        return this.generateModel();
    }

    /**
     * Generate model of text
     * @param {Array<any> | null} dictonaries
     * @returns 
     */
    protected generateModel(dictonaries : Array<any> | null = []) : HTMLImageElement | null {
        try {
            let cnvEl = this.generateImage() as HTMLCanvasElement;
            let tgImg = new Image(cnvEl.width, cnvEl.height);
            tgImg.src = cnvEl.toDataURL("image/jpeg");
            return tgImg;
        } catch(err) {
            return null;
        }
    }

    /**
     * Configure generator
     * @param {VectorOutputGeneratorConfig} generatorConfig
     * @return {void}
     */
    public config(generatorConfig : VectorOutputGeneratorConfig) : void {
        for(let ck in generatorConfig) {
            this.conf[ck] = generatorConfig[ck];
        }
    }
}