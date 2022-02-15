// i18n
title = chrome.i18n.getMessage("extName");
description = chrome.i18n.getMessage("extDescription");

// Ajoute "Better Eclat-BFC" avec un lien vers la documentation dans l'onglet "Autres services"
let betterLink = document.createElement("div");
betterLink.id = "qqch";
document.getElementById("0").appendChild(betterLink);
document.getElementById("qqch").innerHTML = "<li class=\"services-sublist__item\"><a href=\"https://florian-collin.github.io/eclat-bfc-extension/\">Better Eclat-BFC</a></li>";
