import ImageOutputGenerator, { ImageOutputGeneratorConfig, ImageOutputGeneratorConfigDefault } from "./imageOutputGenerator";

interface BitmapOutputGeneratorConfig extends ImageOutputGeneratorConfig {

}

const BitmapOutputGeneratorConfigDefault : BitmapOutputGeneratorConfig = Object.assign(ImageOutputGeneratorConfigDefault, {

});

export default class BitmapOutputGenerator extends ImageOutputGenerator {
    /**
     * Canvas Element
     */
    protected __canvas : HTMLCanvasElement = null;

    /**
     * Canvas Rendering Context
     */
    protected __context : CanvasRenderingContext2D = null;

    /**
     * @property conf
     */
    protected conf : BitmapOutputGeneratorConfig = BitmapOutputGeneratorConfigDefault;

    /**
     * Get current context
     */
    get currContext() : CanvasRenderingContext2D {
        if(this.__context!==null) {
            this.__canvas = document.createElement('canvas');
            this.__canvas.width = this.conf.imageWidth;
            this.__canvas.height = this.conf.imageHeight;
            this.__context = this.__canvas.getContext('2d');
        }
        return this.__context;
    }

    /**
     * Generate image as canvas
     */
    public generateImage() : HTMLCanvasElement {
        var imgData = this.currContext.getImageData(0, 0, this.__canvas.width, this.__canvas.height);
        function randomInt(min : number, max : number) { return Math.floor(Math.random() * (max - min + 1)) + min; }
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = randomInt(0, 255);
            imgData.data[i+1] = randomInt(0, 255);
            imgData.data[i+2] = randomInt(0, 255);
            imgData.data[i+3] = 255;
        }
        this.currContext.putImageData(imgData, 0, 0);
        return this.__canvas;
    }

    /**
     * @since 1.0.0
     * @param {BitmapOutputGeneratorConfig|null} generatorConfig
     */
     constructor(generatorConfig : BitmapOutputGeneratorConfig | null = null) {
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
     * @param {BitmapOutputGeneratorConfig} generatorConfig
     * @return {void}
     */
    public config(generatorConfig : BitmapOutputGeneratorConfig) : void {
        for(let ck in generatorConfig) {
            this.conf[ck] = generatorConfig[ck];
        }
    }
}