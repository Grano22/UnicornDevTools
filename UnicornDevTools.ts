/**
 * Unicorn Dev tools - automating and manual testing
 * 
 * Test your project 
 * 
 * @package UnicornDevTools.js
 * @author Adrian Błasiak aka Grano22 <a.blasiak@welearnig.pl, grano22@outlook.com>
 * @copyright Grano22 2021 - 2021
 * @version 1.0.0
 * @license gpl-2.0
 */
///Output Generatos
import ImageOutputGenerator from './src/outputGenerators/imageOutputGenerator';
import { EmailOutputGenerator } from './src/outputGenerators/index';
import OutputGenerator from './src/outputGenerators/outputGenerator';
import TextOutputGenerator from './src/outputGenerators/textOutputGenerator';
import PlatformFetcher from './src/platformFetcher/platformFetcher';
//import Throwable from './src/throwable/throwable';
import Exception from './src/throwable/exception';
import TypeError from './src/throwable/typeError';

/**
 * Singleton UnicornDevTools
 */
var UnicornDevTools = (function() {
    type GeneratorTypes = TextOutputGenerator | ImageOutputGenerator;
    type GeneratorNSStack = { 
        [key: string]: typeof OutputGenerator //OutputGenerator | TextOutputGenerator | 
    };
    type GeneratorStack = { 
        [key: string]: TextOutputGenerator | ImageOutputGenerator
    };
    type TestersNSStack = {
        
    }
    type TestersStack = {

    }
    type PluginsStack = {
        [key: string]: any
    }
    var __gens : GeneratorStack = {}, __gensNS : GeneratorNSStack = {}, __testersNS : TestersNSStack = {}, __testers : TestersStack = {}, __plugins : PluginsStack = {};

    /**
     * Protected accessor for plugins
     */
    var UnicornDevToolsProtected = (new class UnicornProtectedAccessor {
        /**
         * Register new generator *Plugins
         * @since 1.0.0
         * @param {OutputGenerator} outGenNamespace
         * @return {void}
         */
        public registerGenerator(outGenNamespace : typeof OutputGenerator) : void {
            try {
                if(outGenNamespace.isPrototypeOf(OutputGenerator)) throw new TypeError("Incorrect first argument type "+typeof outGenNamespace);
                __gensNS[outGenNamespace.name] = outGenNamespace;
            } catch(err) {
                console.error(err);
            }
        }

        /**
         * Register generators *Plugins
         * @since 1.0.0
         * @param {Array<OutputGenerator>} outGenInstances
         * @return {void}
         */
        public registerGenerators(outGenInstances : Array<typeof OutputGenerator>) : void {
            try {
                for(let outGenInstance of outGenInstances) this.registerGenerator(outGenInstance);
            } catch(err) {
                console.error(err);
            }
        }
    }());

    UnicornDevToolsProtected.registerGenerators([
        //TextOutputGenerators
        EmailOutputGenerator
        //ImageOutputGenerators
    ]);

    var UnicornDevToolsPublic = (new class UnicornPublicAccessor {
        /**
         * Generator types
         */
        get GeneratorsNS() {
            return __gensNS;
        }

        /**
         * Generators entries
         */
        get Generators() { //@ts-ignore
            return __gens; }
        set Generators(newGen : GeneratorTypes) {
            this.addGenerator(newGen);
        }

        /**
         * Add new generator
         * @since 1.0.0
         * @param {GeneratorTypes} outGenInstance
         * @return {void}
         */
        public addGenerator(outGenInstance : GeneratorTypes) : void {
            try {
                if(!(outGenInstance instanceof OutputGenerator)) throw new TypeError("Incorrect first argument type "+typeof outGenInstance);
                let typeGen = Object.prototype.toString.call(outGenInstance).match(/^\[object\s(.*)\]$/)[1];
                __gens[typeGen] = outGenInstance;
            } catch(err) {
                console.error(err);
            }
        }

        /**
         * Add generators 
         * @param {Array<GeneratorTypes>} outGenInstances
         * @return {void}
         */
         public addGenerators(outGenInstances : Array<GeneratorTypes>) : void {
            try {
                for(let outGenInstance of outGenInstances) this.addGenerator(outGenInstance);
            } catch(err) {
                console.error(err);
            }
        }

        ///Dev
        /**
         * Register plugin
         * @param {Function} pluginBuilder 
         */
        public registerPlugin(pluginBuilder : any) {
            try {
                if(typeof pluginBuilder!=="function") throw new TypeError("Plugin must be a function");
                if(typeof __plugins[pluginBuilder.name]!=="undefined") throw new TypeError("Plugin with "+pluginBuilder.name+" name already registered");
                if(/^\s*class/.test(pluginBuilder.toString())) {
                    __plugins[pluginBuilder.name] = new pluginBuilder(UnicornDevToolsProtected);
                } else {
                    __plugins[pluginBuilder.name] = pluginBuilder(UnicornDevToolsProtected) || {};
                }
            } catch(err) {
                console.error(err);
            }
        }
    }());

    return UnicornDevToolsPublic;
}());

///Detect platform and deploy!
let detectedPlatform = PlatformFetcher.detectEnginePlatform();
if(detectedPlatform.name==="browser") {
//Platform browser
//UnicornDevTools
Object.defineProperty(window, "UnicornDevTools", { value:UnicornDevTools, configurable:true, enumerable:false, writable:false });
}
/*else if(detectedPlatform.name==="node")
//Platform Node.js
module.exports = UnicornDevTools;
else if(detectedPlatform.name==="extension")
//Extension chrome
//@ts-ignore
Object.defineProperty(chrome, "UnicornDevTools", { value:UnicornDevTools, configurable:true, enumerable:false, writable:false });
else if(detectedPlatform.name==="extensionSpiderMonkey")
//Extension firefox
//@ts-ignore
Object.defineProperty(browser, "UnicornDevTools", { value:UnicornDevTools, configurable:true, enumerable:false, writable:false });*/