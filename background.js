chrome.runtime.onInstalled.addListener(function () {
    alert("merci d'avoir instaler mon extention !");
});

function search(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://www.deepl.com/fr/translator#en/fr/" + searchstring})
}

chrome.contextMenus.create({title: "Deepl en->fr", contexts:["selection"], onclick: search});
