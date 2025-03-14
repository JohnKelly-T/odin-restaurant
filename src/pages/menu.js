import "../styles/menu.css";

export default () => {
    let page = document.createElement("div");
    page.id = "menu-content";

    let imagesContainer = document.createElement("div");
    imagesContainer.id = "menu-images-container";

    let image1 = document.createElement("div");
    image1.id = "menu-image-1";

    let image2 = document.createElement("div");
    image2.id = "menu-image-2";

    imagesContainer.appendChild(image1);
    imagesContainer.appendChild(image2);

    page.appendChild(imagesContainer);

    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    let menuHeading = document.createElement("div");
    menuHeading.id = "menu-heading";
    menuHeading.textContent = "Odin Menu";

    menuContainer.appendChild(menuHeading);

    const menuList = {
        "Starters & Appetizers": {
            "Valhalla Oysters": ["$24", "Freshly shucked oysters topped with a delicate champagne mignonette and edible gold flakes."],
            "Mjolnir Tartare": ["$28", "Finely diced wagyu beef tartare with truffle aioli, quail egg yolk, and crispy rye chips."],
            "Loki's Trick": ["$18", "A playful surprise course featuring a rotating amuse-bouche chosen by the chef."]
        },
        "Mains & Signature Dishes": {
            "Ragnarök Ribeye": ["$65", "12oz dry-aged ribeye, flame-seared with herb butter, served with black garlic purée."],
            "Yggdrasil's Bounty": ["$42", "A vibrant, seasonal vegetable and wild mushroom risotto infused with truffle essence."],
            "Fenrir's Feast": ["$58", "Slow-braised lamb shank with mead reduction, served over creamy saffron polenta."]
        },
        "Desserts": {
            "Bifröst Soufflé": ["$20", "A light and airy vanilla soufflé with a molten berry compote, served with gold-dusted sugar."],
            "Eternal Apple Tart": ["$18", "Caramelized apple tart with spiced honey drizzle, inspired by Idunn's legendary apples."],
            "Niflheim Noir": ["$22", "A decadent dark chocolate mousse infused with smoked sea salt and espresso."]
        },
        "Drinks & Cocktails": {
            "Odin's Elixir": ["$16", "A signature cocktail with aged whiskey, black cherry reduction, and a hint of smoke."],
            "Freya's Kiss": ["$14", "A delicate rose-infused gin and elderflower spritz with a touch of citrus."],
            "Thor's Thunder": ["$15", "A bold espresso martini with Nordic coffee liqueur and a crackling sugar rim."]
        }
    }    
    
    for (const category in menuList) {
        let categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        let categoryHeading = document.createElement("div");
        categoryHeading.classList.add("category-heading");
        categoryHeading.textContent = category;

        categoryContainer.appendChild(categoryHeading);

        for (const item in menuList[category]) {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("item-div");

            let itemName = document.createElement("div");
            itemName.classList.add("item-name");
            itemName.textContent = item;

            let itemPrice = document.createElement("div");
            itemPrice.classList.add("item-price");
            itemPrice.textContent = menuList[category][item][0];

            let itemDescription = document.createElement("div");
            itemDescription.classList.add("item-description");
            itemDescription.textContent = menuList[category][item][1];

            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemPrice);
            itemDiv.appendChild(itemDescription);

            categoryContainer.appendChild(itemDiv);
        }

        menuContainer.appendChild(categoryContainer);
    }

    page.appendChild(menuContainer);

    // add attribution to background image in footer
    let imageAttribution = document.createElement("div");
    imageAttribution.classList.add("image-attribution");
    let attributionLink = document.createElement("div");
    attributionLink.innerHTML = "Photos by <a href='https://www.pexels.com/photo/a-table-with-wine-glasses-and-plates-on-it-27305346/'>Valeria Boltneva</a> and <a href='https://www.pexels.com/photo/delicious-chocolate-croissant-on-rustic-plate-30391094/'>Letícia Alvares</a> from pexels.com";
    imageAttribution.appendChild(attributionLink);

    page.appendChild(imageAttribution);

    document.body.className = '';
    document.body.classList.add("body-menu");
    
    return page;
}