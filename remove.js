// Open the hyperlink in a new window
        function openHyper() {
            // Get the URL from the input field
            var url = document.getElementById("urlInput").value;

            // Check if the URL is empty
            if (!url) {
                alert("Please enter a URL.");
                return;
            }

            // Check if the URL starts with 'https://', if not add it
            if (!url.startsWith('https://')) {
                url = 'https://' + url;
            }

            // Open a new window with about:blank
            var win = window.open('about:blank', '_blank');

            // Set the title and favicon for the new window
            win.document.title = 'Google';
            var link = win.document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.href = 'google.png';
            win.document.head.appendChild(link);

            // Create an embed element and set its properties
            var embed = win.document.createElement('embed');
            embed.style.width = "100vw";
            embed.style.height = "100vh";
            embed.style.margin = "0";
            embed.style.overflow = "hidden";
            embed.style.top = "0";
            embed.style.left = "0";
            embed.style.position = "absolute";
            embed.src = url;

            // Append the embed element to the new window's document
            win.document.body.appendChild(embed);
        }

        // Theme switcher functionality
        const themeSwitcher = document.getElementById('theme-switcher');
        const body = document.body;

        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeSwitcher.innerHTML = "&#9790;"; // Sun Icon (Light Mode)
        } else {
            body.classList.remove('light-theme');
            themeSwitcher.innerHTML = "&#9788;"; // Moon Icon (Dark Mode)
        }

        // Toggle theme on button click
        themeSwitcher.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.classList.remove('light-theme');
                themeSwitcher.innerHTML = "&#9788;"; // Moon Icon (Dark Mode)
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light-theme');
                themeSwitcher.innerHTML = "&#9790;"; // Sun Icon (Light Mode)
                localStorage.setItem('theme', 'light');
            }
        });
        
        
        
        function openHyperr() {
    // Change the URL in the address bar without reloading the page
    history.pushState(null, null, "/REMOVED");

    // Hide the navbar
    document.getElementById('navbar').classList.add('hidden');

    // Create the embed tag inside the page
    var url = document.getElementById("urlInput").value;

    // Create the embed element
    var embed = document.createElement('embed');
    embed.style.width = "100vw";
    embed.style.height = "100vh";
    embed.style.margin = "0";
    embed.style.overflow = "hidden";
    embed.style.top = "0";
    embed.style.left = "0";
    embed.style.position = "absolute";
    embed.src = url;

    // Append the embed element to the body of the current page
    document.body.appendChild(embed);

    // Prevent the spacebar from causing a reload or scroll behavior
    window.addEventListener('keydown', function(event) {
        // Prevent default spacebar behavior
        if (event.key === " " || event.keyCode === 32) {
            event.preventDefault();
        }
    });

    // Prevent form submission (space sometimes causes this in certain forms)
    document.body.addEventListener('keydown', function(event) {
        if ((event.key === " " || event.keyCode === 32) && event.target.tagName !== "TEXTAREA" && event.target.tagName !== "INPUT") {
            event.preventDefault();
        }
    });
}