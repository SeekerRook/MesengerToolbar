browser.browserAction.onClicked.addListener(handleClick);
function handleClick(){
    browser.sidebarAction.toggle();
}