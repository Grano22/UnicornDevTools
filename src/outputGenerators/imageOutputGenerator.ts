import OutputGenerator, { OutputGeneratorConfig, OutputGeneratorConfigDefault } from "./outputGenerator";

export interface ImageOutputGeneratorConfig extends OutputGeneratorConfig {
    imageWidth: number,
    imageHeight: number,

}

export const ImageOutputGeneratorConfigDefault : ImageOutputGeneratorConfig = Object.assign(OutputGeneratorConfigDefault, {
    imageWidth: 50,
    imageHeight: 50,
});

export default abstract class ImageOutputGenerator extends OutputGenerator {
    public abstract generateImage() : any;
}