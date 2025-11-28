const ingredientsTrigger = document.getElementById('ingredients-button');
        const ingredientsPopup = document.getElementById('ingredients-popup');
        const otherTrigger = document.getElementById('other-recipes-button');
        const otherPopup = document.getElementById('other-recipes-popup');
        const closeButtons = document.getElementsByClassName('close');

        ingredientsTrigger.addEventListener('click', () => {
            ingredientsPopup.style.display = 'block';
        });

        otherTrigger.addEventListener('click', () => {
            otherPopup.style.display = 'block';
        });

        close.addEventListener('click', () => {
            ingredientsPopup.style.display = 'none';
            otherPopup.style.display = 'none';
        }
        );