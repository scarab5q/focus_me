browser.runtime.onMessage.addListener(() => {
    console.log('Hello from the background')

    browser.tabs.executeScript({
        file: 'content-script.js',
    });
})

chrome.runtime.onInstalled.addListener(() => {
    alert('Hello, World!');
    console.log('Hello from the background');
});