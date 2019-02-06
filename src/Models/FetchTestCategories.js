import Category from "./Category";
//Model Category object is initialized here with hard-coded values

function FetchTestCategories() {
    return [new Category(1, "Java", 2001),
    new Category(2, "JavaScript", 4001),
    new Category(3, "PHP", 1001),
    new Category(4, "React", 5001),
    new Category(5, "Spring", 4001)];

}

export default FetchTestCategories;