/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./UnicornDevTools.ts":
/*!****************************!*\
  !*** ./UnicornDevTools.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./src/outputGenerators/index */ \"./src/outputGenerators/index.ts\");\r\nvar outputGenerator_1 = __webpack_require__(/*! ./src/outputGenerators/outputGenerator */ \"./src/outputGenerators/outputGenerator.ts\");\r\nvar platformFetcher_1 = __webpack_require__(/*! ./src/platformFetcher/platformFetcher */ \"./src/platformFetcher/platformFetcher.ts\");\r\nvar typeError_1 = __webpack_require__(/*! ./src/throwable/typeError */ \"./src/throwable/typeError.ts\");\r\n/**\r\n * Singleton UnicornDevTools\r\n */\r\nvar UnicornDevTools = (function () {\r\n    var __gens = {}, __gensNS = {}, __testersNS = {}, __testers = {};\r\n    var UnicornDevToolsPublic = (new /** @class */ (function () {\r\n        function UnicornPublicAccessor() {\r\n        }\r\n        Object.defineProperty(UnicornPublicAccessor.prototype, \"GeneratorsNS\", {\r\n            /**\r\n             * Generator types\r\n             */\r\n            get: function () {\r\n                return __gensNS;\r\n            },\r\n            enumerable: false,\r\n            configurable: true\r\n        });\r\n        Object.defineProperty(UnicornPublicAccessor.prototype, \"Generators\", {\r\n            /**\r\n             * Generators entries\r\n             */\r\n            get: function () {\r\n                return __gens;\r\n            },\r\n            set: function (newGen) {\r\n                this.registerGenerator(newGen);\r\n            },\r\n            enumerable: false,\r\n            configurable: true\r\n        });\r\n        /**\r\n         * Register generator\r\n         */\r\n        UnicornPublicAccessor.prototype.registerGenerator = function (outGenInstance) {\r\n            try {\r\n                //if(!(outGenInstance instanceof OutputGenerator)) throw new TypeError(\"Incorrect first argument type \"+typeof outGenInstance);\r\n                if (outGenInstance.isPrototypeOf(outputGenerator_1.default))\r\n                    throw new typeError_1.default(\"Incorrect first argument type \" + typeof outGenInstance);\r\n                var typeGen = Object.prototype.toString.call(outGenInstance).match(/^\\[object\\s(.*)\\]$/)[1];\r\n                __gens[typeGen] = outGenInstance;\r\n            }\r\n            catch (err) {\r\n                console.error(err);\r\n            }\r\n        };\r\n        /**\r\n         * Register generators\r\n         */\r\n        UnicornPublicAccessor.prototype.registerGenerators = function (outGenInstances) {\r\n            try {\r\n                for (var _i = 0, outGenInstances_1 = outGenInstances; _i < outGenInstances_1.length; _i++) {\r\n                    var outGenInstance = outGenInstances_1[_i];\r\n                    this.registerGenerator(outGenInstance);\r\n                }\r\n            }\r\n            catch (err) {\r\n                console.error(err);\r\n            }\r\n        };\r\n        return UnicornPublicAccessor;\r\n    }())());\r\n    return UnicornDevToolsPublic;\r\n}());\r\n///Detect platform and deploy!\r\nvar detectedPlatform = platformFetcher_1.default.detectEnginePlatform();\r\nif (detectedPlatform.name === \"browser\") {\r\n    //Platform browser\r\n    UnicornDevTools.registerGenerators([index_1.EmailOutputGenerator]);\r\n    Object.defineProperty(window, \"UnicornDevTools\", { value: UnicornDevTools, configurable: true, enumerable: false, writable: false });\r\n}\r\n/*else if(detectedPlatform.name===\"node\")\r\n//Platform Node.js\r\nmodule.exports = UnicornDevTools;\r\nelse if(detectedPlatform.name===\"extension\")\r\n//Extension chrome\r\n//@ts-ignore\r\nObject.defineProperty(chrome, \"UnicornDevTools\", { value:UnicornDevTools, configurable:true, enumerable:false, writable:false });\r\nelse if(detectedPlatform.name===\"extensionSpiderMonkey\")\r\n//Extension firefox\r\n//@ts-ignore\r\nObject.defineProperty(browser, \"UnicornDevTools\", { value:UnicornDevTools, configurable:true, enumerable:false, writable:false });*/ \r\n\n\n//# sourceURL=webpack://unicorndevtools/./UnicornDevTools.ts?");

/***/ }),

/***/ "./src/dictonaries/dictonary.ts":
/*!**************************************!*\
  !*** ./src/dictonaries/dictonary.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//Map<string, Map<string, string>> | null = null\r\nvar DataDictonary = /** @class */ (function (_super) {\r\n    __extends(DataDictonary, _super);\r\n    function DataDictonary(mapObj) {\r\n        if (mapObj === void 0) { mapObj = null; }\r\n        var _this = _super.call(this, null) || this;\r\n        if (mapObj !== null)\r\n            _this.bindDictAlike(mapObj);\r\n        return _this;\r\n    }\r\n    DataDictonary.prototype.bindDictAlike = function (mapObj) {\r\n        try {\r\n            for (var oKey in mapObj) {\r\n                if (typeof oKey !== \"string\")\r\n                    throw \"Key of dictonary type \" + oKey + \" must be a string\";\r\n                if (mapObj.hasOwnProperty(oKey)) {\r\n                    var imap = null;\r\n                    if (mapObj[oKey] instanceof Map)\r\n                        imap = mapObj[oKey];\r\n                    else if (typeof mapObj[oKey] === \"object\") {\r\n                        var dictType = mapObj[oKey];\r\n                        imap = new Map();\r\n                        for (var ochKey in mapObj[oKey]) {\r\n                            if (typeof ochKey !== \"string\")\r\n                                throw \"Dictonary key must be a typeof string, \" + typeof ochKey + \" given by passing \" + ochKey;\r\n                            if (mapObj[oKey].hasOwnProperty(ochKey) && typeof mapObj[oKey] === \"object\") {\r\n                                if (typeof dictType[ochKey] !== \"string\")\r\n                                    dictType[ochKey] = dictType[ochKey].toString();\r\n                                imap.set(ochKey, dictType[ochKey]);\r\n                            }\r\n                        }\r\n                        mapObj[oKey] = imap;\r\n                    }\r\n                    this.set(oKey, imap);\r\n                }\r\n            }\r\n        }\r\n        catch (err) {\r\n            console.error(err);\r\n        }\r\n    };\r\n    DataDictonary.fromIterable = function (initialIter) {\r\n        if (initialIter === void 0) { initialIter = null; }\r\n    };\r\n    return DataDictonary;\r\n}(Map));\r\nexports.default = DataDictonary;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/dictonaries/dictonary.ts?");

/***/ }),

/***/ "./src/outputGenerators/emailOutputGenerator.ts":
/*!******************************************************!*\
  !*** ./src/outputGenerators/emailOutputGenerator.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.EmailOutputGeneratorConfigDefault = void 0;\r\n/**\r\n * Email output generator\r\n */\r\nvar dictonary_1 = __webpack_require__(/*! ../dictonaries/dictonary */ \"./src/dictonaries/dictonary.ts\");\r\nvar textOutputGenerator_1 = __webpack_require__(/*! ./textOutputGenerator */ \"./src/outputGenerators/textOutputGenerator.ts\");\r\nexports.EmailOutputGeneratorConfigDefault = Object.assign(textOutputGenerator_1.TextOutputGeneratorConfigDefault, {\r\n    dictonary: new dictonary_1.default({\r\n        username: new Map(),\r\n        domain: new Map(),\r\n        subDomain: new Map()\r\n    }),\r\n    subDoaminsCount: 1,\r\n    domainsCount: 1,\r\n});\r\nvar EmailOutputGenerator = /** @class */ (function (_super) {\r\n    __extends(EmailOutputGenerator, _super);\r\n    function EmailOutputGenerator(generatorConfig) {\r\n        if (generatorConfig === void 0) { generatorConfig = null; }\r\n        var _this = _super.call(this, generatorConfig) || this;\r\n        /**\r\n         * @property dictonaries\r\n         */\r\n        _this.dictonaries = {};\r\n        /**\r\n        * @property conf\r\n        */\r\n        _this.conf = exports.EmailOutputGeneratorConfigDefault;\r\n        return _this;\r\n    }\r\n    /**\r\n     * Generate username to email model\r\n     * @return {string}\r\n     */\r\n    EmailOutputGenerator.prototype.generateUsername = function () {\r\n        var _a;\r\n        return _super.prototype.generateModel.call(this, (_a = this.dictonaries) === null || _a === void 0 ? void 0 : _a.userame);\r\n    };\r\n    /**\r\n     * Generate domain to email model\r\n     * @return {string}\r\n     */\r\n    EmailOutputGenerator.prototype.generateDomain = function () {\r\n        var _a;\r\n        return _super.prototype.generateModel.call(this, (_a = this.dictonaries) === null || _a === void 0 ? void 0 : _a.domain);\r\n    };\r\n    /**\r\n     * Generate subdomain to email model\r\n     * @return {string}\r\n     */\r\n    EmailOutputGenerator.prototype.generateSubdomain = function () {\r\n        var _a;\r\n        return _super.prototype.generateModel.call(this, (_a = this.dictonaries) === null || _a === void 0 ? void 0 : _a.subDomain);\r\n    };\r\n    /**\r\n     * Generate model for email adress pattern\r\n     * @return {string}\r\n     */\r\n    EmailOutputGenerator.prototype.generateModel = function () {\r\n        return this.generateUsername() + \"@\" + this.generateSubdomain() + \".\" + this.generateDomain();\r\n    };\r\n    return EmailOutputGenerator;\r\n}(textOutputGenerator_1.default));\r\nexports.default = EmailOutputGenerator;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/outputGenerators/emailOutputGenerator.ts?");

/***/ }),

/***/ "./src/outputGenerators/index.ts":
/*!***************************************!*\
  !*** ./src/outputGenerators/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TextOutputGenerator = exports.EmailOutputGenerator = void 0;\r\nvar emailOutputGenerator_1 = __webpack_require__(/*! ./emailOutputGenerator */ \"./src/outputGenerators/emailOutputGenerator.ts\");\r\nexports.EmailOutputGenerator = emailOutputGenerator_1.default;\r\nvar textOutputGenerator_1 = __webpack_require__(/*! ./textOutputGenerator */ \"./src/outputGenerators/textOutputGenerator.ts\");\r\nexports.TextOutputGenerator = textOutputGenerator_1.default;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/outputGenerators/index.ts?");

/***/ }),

/***/ "./src/outputGenerators/outputGenerator.ts":
/*!*************************************************!*\
  !*** ./src/outputGenerators/outputGenerator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.OutputGeneratorConfigDefault = void 0;\r\nexports.OutputGeneratorConfigDefault = {};\r\nvar OutputGenerator = /** @class */ (function () {\r\n    function OutputGenerator(generatorConfig) {\r\n        if (generatorConfig === void 0) { generatorConfig = null; }\r\n    }\r\n    ;\r\n    return OutputGenerator;\r\n}());\r\nexports.default = OutputGenerator;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/outputGenerators/outputGenerator.ts?");

/***/ }),

/***/ "./src/outputGenerators/textOutputGenerator.ts":
/*!*****************************************************!*\
  !*** ./src/outputGenerators/textOutputGenerator.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TextOutputGeneratorConfigDefault = void 0;\r\nvar outputGenerator_1 = __webpack_require__(/*! ./outputGenerator */ \"./src/outputGenerators/outputGenerator.ts\");\r\nexports.TextOutputGeneratorConfigDefault = {\r\n    charsRangeFrom: 0,\r\n    charsRangeTo: 300,\r\n    charsLengthToleranceFrom: 1,\r\n    charsLengthToleranceTo: 60,\r\n    dictonaries: []\r\n};\r\n/**\r\n * Text output generator\r\n */\r\nvar TextOutputGenerator = /** @class */ (function (_super) {\r\n    __extends(TextOutputGenerator, _super);\r\n    /**\r\n     * @since 1.0.0\r\n     * @param {TextOutputGeneratorConfig|null} generatorConfig\r\n     */\r\n    function TextOutputGenerator(generatorConfig) {\r\n        if (generatorConfig === void 0) { generatorConfig = null; }\r\n        var _this = _super.call(this, generatorConfig) || this;\r\n        /**\r\n         * @property dictonaries\r\n         */\r\n        _this.dictonaries = {};\r\n        /**\r\n         * @property conf\r\n         */\r\n        _this.conf = exports.TextOutputGeneratorConfigDefault;\r\n        return _this;\r\n    }\r\n    /**\r\n     * Generate from\r\n     * @return {string}\r\n     */\r\n    TextOutputGenerator.prototype.generateFrom = function () {\r\n        return this.generateModel();\r\n    };\r\n    /**\r\n     * Gnerate\r\n     * @return {string}\r\n     */\r\n    TextOutputGenerator.prototype.generate = function () {\r\n        return this.generateModel();\r\n    };\r\n    /**\r\n     * Generate model of text\r\n     * @param {Array<any> | null} dictonaries\r\n     * @returns\r\n     */\r\n    TextOutputGenerator.prototype.generateModel = function (dictonaries) {\r\n        if (dictonaries === void 0) { dictonaries = []; }\r\n        try {\r\n            var fr = this.conf.charsLengthToleranceFrom, to = this.conf.charsLengthToleranceTo;\r\n            for (; fr < to; fr++)\r\n                String.fromCharCode(Math.floor(Math.random() * this.conf.charsRangeTo) + this.conf.charsRangeFrom);\r\n        }\r\n        catch (err) {\r\n            return \"\";\r\n        }\r\n    };\r\n    /**\r\n     * Configure generator\r\n     * @param {TextOutputGeneratorConfig} generatorConfig\r\n     * @return {void}\r\n     */\r\n    TextOutputGenerator.prototype.config = function (generatorConfig) {\r\n        for (var ck in generatorConfig) {\r\n            this.conf[ck] = generatorConfig[ck];\r\n        }\r\n    };\r\n    return TextOutputGenerator;\r\n}(outputGenerator_1.default));\r\nexports.default = TextOutputGenerator;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/outputGenerators/textOutputGenerator.ts?");

/***/ }),

/***/ "./src/platformFetcher/platformFetcher.ts":
/*!************************************************!*\
  !*** ./src/platformFetcher/platformFetcher.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar self = this;\r\nvar PlatformFetcher = /** @class */ (function () {\r\n    function PlatformFetcher() {\r\n    }\r\n    /**\r\n     * Detect js engine platform\r\n     * @returns {object|null}\r\n     */\r\n    PlatformFetcher.detectEnginePlatform = function () {\r\n        if (typeof navigator === \"object\")\r\n            return { name: \"browser\", get ref() { return window; } };\r\n        else if (typeof chrome === \"object\")\r\n            return { name: \"chromeExtension\", get ref() { return chrome; } };\r\n        else if (typeof browser === \"object\")\r\n            return { name: \"firefoxExtension\", get ref() { return browser; } };\r\n        else if ((typeof process !== 'undefined') && (process.release.name === 'node'))\r\n            return { name: \"node\", get ref() { return self; } };\r\n        return { name: \"undetected\", get ref() { return null; } };\r\n    };\r\n    return PlatformFetcher;\r\n}());\r\nexports.default = PlatformFetcher;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/platformFetcher/platformFetcher.ts?");

/***/ }),

/***/ "./src/throwable/error.ts":
/*!********************************!*\
  !*** ./src/throwable/error.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//const ErrorProto = typeof Error !==\"undefined\" ? Error : null;\r\nvar Err = /** @class */ (function () {\r\n    /**\r\n     * Create Exception\r\n     * @since 1.0.0\r\n     */\r\n    function Err(message, code, previous) {\r\n        if (code === void 0) { code = -1; }\r\n        if (previous === void 0) { previous = null; }\r\n        this.message = message;\r\n        this.code = code;\r\n    }\r\n    Err.prototype.getMessage = function () {\r\n        return this.message;\r\n    };\r\n    Err.prototype.getCode = function () {\r\n        return this.code;\r\n    };\r\n    Err.prototype.getFile = function () {\r\n        return this.fileName;\r\n    };\r\n    Err.prototype.getLine = function () {\r\n        return this.lineNumber;\r\n    };\r\n    Err.prototype.getTrace = function () {\r\n        return [];\r\n    };\r\n    Err.prototype.getTraceAsSring = function () {\r\n        return this.getTrace().join();\r\n    };\r\n    Err.prototype.getPrevious = function () {\r\n        return null;\r\n    };\r\n    Err.prototype.toSource = function () {\r\n    };\r\n    Err.prototype.toString = function () {\r\n        return this.message;\r\n    };\r\n    Err.prototype.valueOf = function () {\r\n        return this.message;\r\n    };\r\n    return Err;\r\n}());\r\nexports.default = Err;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/throwable/error.ts?");

/***/ }),

/***/ "./src/throwable/typeError.ts":
/*!************************************!*\
  !*** ./src/throwable/typeError.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar error_1 = __webpack_require__(/*! ./error */ \"./src/throwable/error.ts\");\r\n//const TypeErrorProto = typeof TypeError !==\"undefined\" ? TypeError : Error;\r\nvar TypeErr = /** @class */ (function (_super) {\r\n    __extends(TypeErr, _super);\r\n    function TypeErr() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return TypeErr;\r\n}(error_1.default));\r\nexports.default = TypeErr;\r\n\n\n//# sourceURL=webpack://unicorndevtools/./src/throwable/typeError.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./UnicornDevTools.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;