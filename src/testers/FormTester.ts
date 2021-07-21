

export default class FormTester {
    /**
     * @param {HTMLFormElement} __form
     * @access private
     */
     __form : HTMLFormElement = null;


     /**
      * @since 1.0.0
      * @param {HTMLFormElement} HTMLFormEl 
      */
     constructor(HTMLFormEl : HTMLFormElement) {
         if(HTMLFormEl instanceof HTMLFormElement) this.__form = HTMLFormEl;
     }
 
     /**
      * Fill all form or form group fields !vaild
      * @param {HTMLFormElement|HTMLDivElement|HTMLSectionElement} HTMLFormEl
      */
     fillVaildFieldsAuto(HTMLFormEl : HTMLFormElement = null) {
 
     }
 
 
     /**
      * Fill all form or form group fields
      * @param {HTMLFormElement|HTMLDivElement|HTMLSectionElement} HTMLFormEl
      */
     fillFieldsAuto(HTMLFormEl : HTMLFormElement = null) {
         
     }
 
     /**
      * Fill field !vaild
      *  @param {HTMLFormElement|HTMLDivElement|HTMLSectionElement} HTMLFieldEl
      */
     fillAllVaildFieldAuto(HTMLFieldEl : HTMLElement) {
        if(HTMLFieldEl instanceof HTMLInputElement || HTMLFieldEl.tagName==="INPUT") {
            HTMLFieldEl = HTMLFieldEl as HTMLInputElement;
            switch(HTMLFieldEl.type || HTMLFieldEl.getAttribute("type")) {
                case "email":

                break;
                case "time":

                break;
                case "date":

                break;
                case "datetime-local":
                case "datetime":

                break;
                case "tel":

                break;
                case "radio":
                case "checkbox":

                break;
                case "range":

                break;
                case "file":
                    let f = new File([""], "generated.txt", {type: "text/plain", lastModified: 0});
                break;
                case "image":

                break;
                case "url":

                break;
                case "text":
                default:

            }
        } else if(HTMLFieldEl.tagName==="TEXTAREA") {

        } else if(HTMLFieldEl.tagName==="SELECT") {

        } else if(HTMLFieldEl.tagName==="") {

        }
     }
 
     /**
      * Fill field
      *  @param {HTMLFormElement|HTMLDivElement|HTMLSectionElement} HTMLFieldEl
      */
     fillAllFieldAuto(HTMLFieldEl : HTMLElement) {
         
     }
}