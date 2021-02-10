let ourPhotos = document.querySelectorAll('.our-photo');
let filterItems = document.querySelectorAll(".our-moments-filter-list__item");

for (let filterItem of filterItems) {
    filterItem.onclick = function() {
        for (let ourPhoto of ourPhotos) {
            if (ourPhoto.dataset.category !== filterItem.dataset.item && filterItem.dataset.item !== "all-photo") {
                ourPhoto.classList.add('hiden');
            } else {
                ourPhoto.classList.remove('hiden');
            }
        }
    }
}

//Далее более длинный, но более понятный вариант кода.

/*let ourPhotos = document.querySelectorAll('.our-photo');
let businessPlan = document.querySelector('.business-plan');
let businessDevelopment = document.querySelector('.business-development');
let marketing = document.querySelector('.marketing');
let development = document.querySelector(".development");
let allPhoto = document.querySelector(".all-photo");

businessPlan.onclick = function() {
    for (let ourPhoto of ourPhotos) {
        if (ourPhoto.dataset.category !== "business-plan") {
            ourPhoto.classList.add('hiden');
        } else {
            ourPhoto.classList.remove('hiden');
        }
    }
}

businessDevelopment.onclick = function() {
    for (let ourPhoto of ourPhotos) {
        if (ourPhoto.dataset.category !== "business-development") {
            ourPhoto.classList.add('hiden');
        } else {
            ourPhoto.classList.remove('hiden');
        }
    }
}

marketing.onclick = function() {
    for (let ourPhoto of ourPhotos) {
        if (ourPhoto.dataset.category !== "marketing") {
            ourPhoto.classList.add('hiden');
        } else {
            ourPhoto.classList.remove('hiden');
        }
    }
}

development.onclick = function() {
    for (let ourPhoto of ourPhotos) {
        if (ourPhoto.dataset.category !== "development") {
            ourPhoto.classList.add('hiden');
        } else {
            ourPhoto.classList.remove('hiden');
        }
    }
}


allPhoto.onclick = function() {
    for (let ourPhoto of ourPhotos) {
        ourPhoto.classList.remove('hiden');
    }
}*/