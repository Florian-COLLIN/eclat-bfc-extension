// i18n
title = chrome.i18n.getMessage("extName");
description = chrome.i18n.getMessage("extDescription");

// Ajoute "Better Eclat-BFC" avec un lien vers la documentation dans l'onglet "Autres services"
let betterLink = document.createElement("div");
    betterLink.id = "qqch";
document.getElementById("0").appendChild(betterLink);
document.getElementById("qqch").innerHTML = "<li class=\"services-sublist__item\"><a href=\"https://florian-collin.github.io/eclat-bfc-extension/\">Better Eclat-BFC</a></li><li class=\"services-sublist__item\"><a href=\"chrome-extension://__MSG_@@extension_id__/html/changelog.html\">Journal des modifications</a></li>";

// Ajoute "Better Eclat-BFC" avec un lien vers la documentation dans la page d'accueil, pour ceux qui n'ont pas l'onglet "Autres services"
let betterLinkH = document.createElement("div");
    betterLinkH.id = "qqch2";
document.getElementById("js-actualite-feed-content").appendChild(betterLinkH);
document.getElementById("qqch2").innerHTML = "<hr class=\"divider divider--sm divider--full-panel\"><div class=\"text--center\"><a href=\"https://florian-collin.github.io/eclat-bfc-extension/\">Better Eclat-BFC</a> - <a href=\"https://github.com/Florian-COLLIN/eclat-bfc-extension/issues/new\">Signaler un problème</a> - <a href=\"#changelogBetter\" onclick=\"open_Changelog()\">Journal des modifications</a></div>";
