/* W05: Programming Tasks */

const templesElement = document.getElementById("temples");
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach(temple => {
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      h3.textContent = temple.templeName;
      const img = document.createElement("img");
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", temple.location);
      article.appendChild(h3);
      article.appendChild(img);
      templesElement.appendChild(article);
    });
  };
  
  const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
  };
  

const reset = () => {
    templesElement.innerHTML = '';
  };

  const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    let filteredTemples;
    switch(filter) {
      case "utah":
        filteredTemples = temples.filter(temple => temple.location.includes("Utah"));
        break;
      case "notutah":
        filteredTemples = temples.filter(temple => !temple.location.includes("Utah"));
        break;
      case "older":
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
        break;
      case "all":
      default:
        filteredTemples = temples;
    }
    displayTemples(filteredTemples);
  };

  document.querySelector("#filtered").addEventListener("change", () => { 
    filterTemples(templeList);
  });

  getTemples();
