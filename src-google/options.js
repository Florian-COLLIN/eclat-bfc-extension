// Saves options to chrome.storage
function save_options() {
    var theme = document.getElementById('theme').value;
    var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
        favoriteTheme: theme,
        likesColor: likesColor
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Préférences enregistrées.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        favoriteTheme: 'sombre',
        likesColor: true
    }, function(items) {
        document.getElementById('theme').value = items.favoriteTheme;
        document.getElementById('like').checked = items.likesColor;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
