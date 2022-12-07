const EditorPage = require('../pageobjects/editor.page')


describe('input simple js code into playcode javascript editor', () => {
    it('should log code result with valid value', async () => {
        await EditorPage.open()
        await EditorPage.enterCode("console.log('some test')")
        //await browser.pause(1000)
        await browser.waitUntil(
            async () => EditorPage.outputConsole.isExisting(),
            {
                timeout: 5000,
                timeoutMsg: 'expected element is not exists after 5s'
            }
        );
        await expect(EditorPage.outputConsole).toHaveTextContaining('some test')
    })
})
