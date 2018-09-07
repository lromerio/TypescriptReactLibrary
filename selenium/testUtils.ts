import { By, until } from 'selenium-webdriver'


export const rootURL = ' http://localhost:8080/'

const waitUntilTime = 2000

export async function getElementById(driver, id) {

    const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime).catch(e => {return false})

    return await driver.wait(until.elementIsVisible(el), waitUntilTime).catch(e => {return false})
}

export async function getElementByXPath(driver, xpath) {

    const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)

    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}
