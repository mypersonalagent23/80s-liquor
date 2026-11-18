import { categories } from "@/content/categories";

export function CategoryList() {
  return (
    <ul className="cats">
      {categories.map((category) => (
        <li key={category.id}>
          <figure className="frame frame-thumb" style={{ aspectRatio: "1 / 1" }}>
            <figcaption className="sr-only">Photo: owner to supply</figcaption>
          </figure>
          <div>
            <p className="cat-name">{category.name}</p>
            <p className="cat-ask">Ask in store</p>
            <p className="cat-photo">Photo: owner to supply</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
