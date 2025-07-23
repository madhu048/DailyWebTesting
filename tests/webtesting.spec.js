import { test, expect } from '@playwright/test';

async function urlStatus(page,url){
    try {
        const response = await page.goto(url);
        try {
                    await page.waitForLoadState('load', { timeout: 90000 }); // try for 90s
            } catch (e) {
                    console.warn(`⚠️ ${url} got Skipped because is taking long time to load.`);
            }
        await page.waitForTimeout(2000);
        let statusCode = await response.status();
        console.log(`${url} status code is: ${await statusCode}`);
        if(statusCode < 400){
            expect.soft(statusCode).toBeLessThan(400);
            console.log(`✅ ${url} is loading fine.`);
            return true;
        }else{
            expect.soft(false).toBeTruthy();
            console.log(`⚠️ There is a isssue with url: ${url}`)
            return false;
        }
    } catch (error) {
        console.error(`❌ There is issue with Url : ${error}`);
        expect.soft(false).toBeTruthy();
        return false;
    }
}

test('Url checking',async({page})=>{
        const url = "https://www.imaginxavr.com/";
        await urlStatus(page,url);
    });