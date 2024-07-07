const btn = document.querySelector(".btn");
const inputBTN = document.querySelector(".input");
const listHeading = document.querySelector(".list-heading");
const itemContainer = document.querySelector(".item-container");
const headingPrimary = document.querySelector(".heading-primary");
const apiData = async (value) => {
  try {
    headingPrimary.innerHTML = "Please wait";

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${value}`
    );
    const result = await response.json();
    console.log(result);
    getData(result.data.recipes);
  } catch (error) {
    headingPrimary.innerHTML = "Recipe Not Foundq";
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = inputBTN.value;
  if (!searchInput) {
    headingPrimary.innerHTML = "Please Enter Recipe";
    return;
  }
  //   console.log(searchInput);
  apiData(searchInput);
});
function getData(data) {
  headingPrimary.innerHTML = "Recipes";
  itemContainer.innerHTML = "";

  data.forEach((cur) => {
    const div = document.createElement("div");
    div.classList.add("list");
    div.classList.add(`${cur.id}`);
    div.innerHTML = `<img src="${cur.image_url}" alt="">
                      <div class="list-details">
                          <p class="list-heading">${cur.title}</p>
                          <p class="list-heading">${cur.publisher}</p>
                     
                      </div>`;
    itemContainer.appendChild(div);
  });
}
const recipesId = async () => {
  const recipesData = await fetch(
    `https://forkify-api.herokuapp.com/api/get?rId=47746`
  );
  const recipesResult = await recipesData.json();
  console.log(recipesResult);
};
recipesId();
