// This variable tracks the current URL
let currentUrl = window.location.href;

// Function to update overflow style on specific elements
function updateOverflowStyle() {
    document.querySelectorAll('.overflow-hidden').forEach((element) => {
        element.style.overflow = 'scroll';
    });
}

// Initialize the overflow style on load
updateOverflowStyle();

// MutationObserver to detect DOM changes
const observer = new MutationObserver(() => {
    // Check if the URL has changed without a full reload
    if (window.location.href !== currentUrl) {
        currentUrl = window.location.href;
        console.log("URL changed to:", currentUrl);
        
        // Reapply styles for the new page
        updateOverflowStyle();
    }
});

// Start observing the body of the document for changes
observer.observe(document.body, {
    childList: true,
    subtree: true,
});
