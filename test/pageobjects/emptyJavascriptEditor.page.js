const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmptyJavascriptEditorPage extends Page {
    /**
     * define selectors using getter methods
     */
    get editorTextArea () {
        return $('.inputarea');
    }

    get outputConsoleFirstValue () {
        return $('//*[@id="app"]/div/div[1]/div/div[2]/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div/div[1]/div/div/div/div/div/span')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to type some code into the editor
     */
    async enterCode (code_string) {
        await this.editorTextArea.addValue(code_string);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('empty_javascript');
    }
}

module.exports = new EmptyJavascriptEditorPage();
