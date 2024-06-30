const btn = document.querySelector(".btn");
const inputBTN = document.querySelector(".input");
const listHeading = document.querySelector(".list-heading");
const itemContainer = document.querySelector(".item-container");
const headingPrimary = document.querySelector(".heading-primary");
const apiData = async (value) => {
  try {
    headingPrimary.innerHTML = "please wait";

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${value}`
    );
    const result = await response.json();
    getData(result.data.recipes);
  } catch (error) {
    alert(error);
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = inputBTN.value;
  //   console.log(searchInput);
  apiData(searchInput);
});
function getData(data) {
  headingPrimary.innerHTML = "recipes";

  data.forEach((cur) => {
    const div = document.createElement("div");
    div.classList.add("list");
    div.innerHTML = `<img src="${cur.image_url}" alt="">
                    <div class="list-details">
                        <p class="list-heading">${cur.title}</p>
                   
                    </div>`;
    itemContainer.appendChild(div);
  });
}
