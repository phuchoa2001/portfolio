export default function FilterListProduct(List, search) {
    if (search) {
        const result = List.filter((item) => item.tags.filter(tag => tag === search).length > 0);
        return result;
    } else {
        return List;
    }
}