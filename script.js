function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const recipes = {
  recipe1: `
    <h3>Chocolate Crunch Bars</h3>
    <ul>
      <li>2 cups Choco Crunch</li>
      <li>1 cup melted chocolate</li>
      <li>Mix & chill for 1 hr</li>
    </ul>`,
  recipe2: `
    <h3>Spicy Snack Salad</h3>
    <ul>
      <li>1 cup Spicy Rings</li>
      <li>Chopped veggies & lime juice</li>
      <li>Toss and serve fresh</li>
    </ul>`,
  recipe3: `
    <h3>Nutty Energy Balls</h3>
    <ul>
      <li>1 cup Nutty Mix</li>
      <li>Dates & honey</li>
      <li>Roll into balls and chill</li>
    </ul>`,
      recipe4: `
    <h3>Samosa</h3>
    <ul>
      <li>2 Make dough with 2 cups flour, 4 tbsp oil, salt, water → rest 30 min.</li>
      <li>Boil and mash 3 potatoes, mix with ½ cup peas and spices.</li>
      <li>Roll dough, cut in half, form cones, fill with potato mix, seal edges.</li>
      <li>Heat oil and deep-fry samosas until golden and crispy</li>
      <li>Serve hot with chutney</li>
    </ul>`,
  recipe5: `
    <h3>Spring Roll</h3>
    <ul>
      <li>fill spring wrappers with shreddedveggis</li>
      <li>Roll tightly, sealing edges with a little water.</li>
      <li>Roll dough, cut in half, form cones, fill with potato mix, seal edges</li>
      <li>Deep-fry rolls until golden and crispy</li>
      <li>Serve hot with sweet chili or soy sauce</li>
    </ul>`,
  recipe6: `
    <h3>Manchurian</h3>
    <ul>
      <li>1 cup chopped veggies with 2 tbsp cornflour, 2 tbsp flour, salt, </li>
      <li>shape into small balls.</li>
      <li>Deep-fry the balls until golden and crispy</li>
      <li>In a pan, heat 1 tbsp oil → sauté 2 cloves garlic, 1-inch ginger, 1 chopped chili for 1 min.</li>
      <li>Add 2 tbsp soy sauce, 1 tbsp chili sauce, 1 tsp vinegar, ½ cup wate</li>
      <li>Mix 1 tsp cornflour in 2 tbsp water → add to pan → thicken sauce.</li>
      <li>Toss fried balls in the sauce → garnish with spring onions → serve hot.</li>
      
    </ul>`
};

function showRecipe(key) {
  const details = document.getElementById("recipe-details");
  details.innerHTML = recipes[key];
  details.classList.remove("hidden");
}

  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("thankYouMsg").classList.remove("hidden");

  });



