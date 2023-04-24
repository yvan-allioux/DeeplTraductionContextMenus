
function search(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://www.deepl.com/fr/translator#en/fr/" + searchstring})
}

chrome.contextMenus.create({
    id: "deeplTranslate",
    title: "Deepl en->fr",
    contexts:["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "deeplTranslate") {
        search(info);
    }
});
