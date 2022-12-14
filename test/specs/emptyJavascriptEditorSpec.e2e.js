const JSEditor = require('../pageobjects/emptyJavascriptEditor.page')


describe('input simple js code into playcode javascript editor', () => {

    beforeEach( async () => {
        // pass
    })

    afterEach( async () => {
        await browser.reloadSession()
    })

    it('should log only the first string value of \
        the result of code execution with valid credentials', async () => {
        await JSEditor.open()
        await JSEditor.enterCode("console.log('some test')")
        await JSEditor.outputConsoleFirstValue.waitForExist()
        // await browser.waitUntil(
        //     async () => JSEditor.outputConsoleFirstValue.isExisting(),
        //     {
        //         timeout: 5000,
        //         timeoutMsg: 'expected element is not exists after 5s'
        //     }
        // );
        await expect(JSEditor.outputConsoleFirstValue).toHaveTextContaining('some test')
    })

    it('should log a sequential result of code execution \
        by outputting a set of values', async () => {
            await JSEditor.open()
            await JSEditor.enterCode(
                "\nconsole.log('first value')\nconsole.log('second value')"
            )
            await browser.pause(5000)
    })
})
