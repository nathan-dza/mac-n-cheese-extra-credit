// getting all the elements from html for it to be functional
const ingredientsTrigger = document.getElementById('ingredients-button');
        const ingredientsPopup = document.getElementById('ingredients-popup');
        const otherTrigger = document.getElementById('other-recipes-button');
        const otherPopup = document.getElementById('other-recipes-popup');
        const closeButtons = document.getElementsByClassName('close');
        const darkModeButton = document.getElementById('dark-mode-button');
// ingredients popup function
        ingredientsTrigger.addEventListener('click', () => {
            ingredientsPopup.style.display = 'block';
        });

// other recipes popup function
        otherTrigger.addEventListener('click', () => {
            otherPopup.style.display = 'block';
        });

// close button function
        for (let btn of closeButtons) {
            btn.addEventListener('click', () => {
                ingredientsPopup.style.display = 'none';
                otherPopup.style.display = 'none';
            });
        }
//dark mode toggle
        darkModeButton.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-mode');
            if (document.documentElement.classList.contains('dark-mode')) {
                darkModeButton.innerText = "Light Mode";
            } else {
                darkModeButton.innerText = "Dark Mode";
            }
        });