export function filterMovies(array = [], idCategories) {
  return array.filter((mov, index) => {
    return mov.category_id.toString() === idCategories.toString();
  });
}
