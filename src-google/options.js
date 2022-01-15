// Saves options to chrome.storage
function save_options() {
    var theme = document.getElementById('theme').value;
    var likesColor = document.getElementById('like').checked;
    var etablissement = document.getElementById('etablissement').string;

    chrome.storage.sync.set({
        favoriteTheme: theme,
        likesColor: likesColor,
        favoriteEtablissement: etablissement,
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Paramètres enregistrés.';
        setTimeout(function() {
            status.textContent = 'Paramètres non enregistrés';
        }, 2000);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        favoriteTheme: 'sombre',
        likesColor: true,
        favoriteEtablissement: "cas",
    }, function(items) {
        document.getElementById('theme').value = items.favoriteTheme;
        document.getElementById('like').checked = items.likesColor;
        document.getElementById('etablissement').string = items.favoriteEtablissement;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
