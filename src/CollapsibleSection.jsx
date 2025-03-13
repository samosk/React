// CollapsibleSection.js
function initializeCollapsibleSections() {
    // Get all showmore elements
    const showMoreButtons = document.querySelectorAll('.showmore');
    
    showMoreButtons.forEach(button => {
        // Find the content section that precedes this button
        const content = button.previousElementSibling;
        
        // Create the button element to replace the paragraph
        const toggleButton = document.createElement('button');
        toggleButton.className = 'more';
        toggleButton.textContent = 'Visa mindre ▲';
        
        // Replace the paragraph with the button
        const paragraph = button.querySelector('p');
        button.replaceChild(toggleButton, paragraph);
        
        // Add click event listener
        toggleButton.addEventListener('click', () => {
            // Toggle content visibility
            const isVisible = content.style.display !== 'none';
            content.style.display = isVisible ? 'none' : 'block';
            
            // Update button text and arrow
            toggleButton.textContent = isVisible ? 'Visa mer ▼' : 'Visa mindre ▲';
        });
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCollapsibleSections);