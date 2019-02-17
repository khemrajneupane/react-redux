import Category from "./Category";
//Model Category object is initialized here with hard-coded values

function FetchTestCategories() {
    return [new Category(1, "Training", 1000),
    new Category(2, "Talkoot", 20000),
    new Category(3, "Partie", 1001),
    new Category(4, "Excursions", 4000),
    new Category(5, "Purchases", 500)];

}

export default FetchTestCategories;