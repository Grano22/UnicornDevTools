declare var chrome : any;
declare var browser : any;

let self = this;

export default class PlatformFetcher {
    /**
     * Detect js engine platform
     * @returns {object|null}
     */
    public static detectEnginePlatform() : { [key: string]: any } {
        if(typeof navigator==="object") return { name: "browser", get ref() { return window; } };
        else if(typeof chrome==="object") return { name:"chromeExtension", get ref() { return chrome; } };
        else if(typeof browser==="object") return { name:"firefoxExtension", get ref() { return browser; } };
        else if((typeof process !== 'undefined') && (process.release.name === 'node')) return { name:"node", get ref() { return self; } };
        return { name:"undetected", get ref() : any { return null; } };
    }


}