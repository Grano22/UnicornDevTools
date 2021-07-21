type DictEntriesAlike = { [key: string] : Map<string, string> } | { [key: string] : { [key: string] : string } };

//Map<string, Map<string, string>> | null = null

export default class DataDictonary extends Map<string, Map<string, string>> {
    constructor(mapObj : DictEntriesAlike | null = null) {
        super(null);
        if(mapObj!==null) this.bindDictAlike(mapObj);
    }

    bindDictAlike(mapObj : DictEntriesAlike) {
        try {
            for(let oKey in mapObj) {
                if(typeof oKey!=="string") throw "Key of dictonary type "+oKey+" must be a string";
                if(mapObj.hasOwnProperty(oKey)) {
                    let imap : Map<string, string> = null;
                    if(mapObj[oKey] instanceof Map) imap = mapObj[oKey] as Map<string, string>; else if(typeof mapObj[oKey]==="object") {
                        let dictType = mapObj[oKey] as { [key: string] : string };
                        imap = new Map<string, string>();
                        for(let ochKey in mapObj[oKey]) {
                            if(typeof ochKey!=="string") throw "Dictonary key must be a typeof string, "+typeof ochKey+" given by passing "+ochKey;
                            if(mapObj[oKey].hasOwnProperty(ochKey) && typeof mapObj[oKey]==="object") {
                                if(typeof dictType[ochKey]!=="string") dictType[ochKey] =  dictType[ochKey].toString();
                                imap.set(ochKey, dictType[ochKey]);
                            }
                        }
                        mapObj[oKey] = imap;
                    }
                    this.set(oKey, imap);
                }
            }
        } catch(err) {
            console.error(err);
        }
    }

    static fromIterable(initialIter : Iterable<readonly [string, Map<string, string>]> | null = null) {

    }

    /*set() {
        return super.set();
    }*/


}