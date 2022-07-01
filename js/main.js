document.addEventListener('DOMContentLoaded', function() {

    const toggleButton = document.getElementById('schemeToggle');
    const colorSchemeTextMap = {
        'dark': 'dark',
        'light': 'light',
        'system': 'auto',
    }

    let currentColorScheme = null;
    initColorScheme();
    toggleButton.addEventListener('click', () => {
        toggleColorScheme();
    });

    function toggleColorScheme() {
        const colorSchemeKeys = Object.keys(colorSchemeTextMap)
        currentColorScheme = colorSchemeKeys[(colorSchemeKeys.indexOf(currentColorScheme) + 1) % colorSchemeKeys.length];
        localStorage.setItem('savedColorScheme', currentColorScheme)
        applyColorScheme();
        console.debug("Color scheme switched!");
    }

    function initColorScheme() {
        currentColorScheme = localStorage.getItem('savedColorScheme') || 'system';
        applyColorScheme()
    }

    function applyColorScheme() {
        let dataTheme = currentColorScheme
        if (dataTheme === 'system') {
            dataTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', dataTheme);
        toggleButton.innerHTML = colorSchemeTextMap[currentColorScheme];
    }

});
