import { Builder, Actions } from "selenium-webdriver"
import "selenium-webdriver/chrome"
import "selenium-webdriver/firefox"
import "chromedriver"
import "geckodriver"

import {rootURL, getElementById, getElementByXPath} from "./testUtils"

let driver
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5


describe("Selenium test", () => {

    beforeEach((done) => {
        //driver = new Builder().forBrowser("firefox").build()
        driver = new Builder().forBrowser("chrome").build()
        driver.get(rootURL).then(done)
    })

    afterEach((done) => {
        driver.quit().then(done)
    })

    describe("<Stateless/>", () => {

        it("should render", async () => {

            // Get and verify
            const comp = await getElementById(driver, "test_id")
            expect(await comp.getText()).toEqual("Hello")
        })
    })
})