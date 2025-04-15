//URL used for the matcha options
const yk_URL =
  "https://www.sazentea.com/content/products/big/MYK010-1.jpg";
const mk_URL =
  "https://www.marukyu-koyamaen.co.jp/english/shop/wp-content/uploads/2020/11/01-09-isuzu-40g-7400.jpg";
const ks_URL =
  "https://www.thesteepingroom.com/cdn/shop/files/BIwanoShiroMatchafromKanbayashism_5000x.jpg?v=1732045361";
const rockys_URL =
  "https://www.rockysmatcha.com/cdn/shop/files/rockys-matcha-blue-tin-2-2-new_grande.jpg?v=1703026541";
const straus_URL = "https://images.albertsons-media.com/is/image/ABS/960070748-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available";
const oatly_URL = "https://images.cdn.retail.brookshires.com/detail/be526b15-59cf-4849-8e47-9932c5f54e51.jpeg";
const fairlife_URL = "https://images.albertsons-media.com/is/image/ABS/960126889-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available";
const agave_URL = "https://images.albertsons-media.com/is/image/ABS/960324080-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available";
const honey_URL = "https://target.scene7.com/is/image/Target/GUEST_67176f99-306a-4968-9cdf-4760d4abfc84?wid=725&hei=725&qlt=80&fmt=webp";
const maple_URL = "https://bfasset.costco-static.com/U447IH35/as/gbnqv9h49c7f3sh2hwh7g24/679131-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200";
const unsweet_URL = "https://static.vecteezy.com/system/resources/thumbnails/014/495/302/small/no-sugar-sack-icon-outline-style-vector.jpg";
const banana_URL = "https://i.insider.com/5f691fd657b7da001ee12f66?width=700";
const cream_URL = "https://static01.nyt.com/images/2023/06/20/multimedia/GL-cold-foam-fgkj/GL-cold-foam-fgkj-superJumbo.jpg";
const none_URL = "https://media.istockphoto.com/id/1132722548/vector/round-red-x-mark-line-icon-button-cross-symbol-on-white-background.jpg?s=612x612&w=0&k=20&c=QnHlhWesKpmbov2MFn2yAMg6oqDS8YXmC_iDsPK_BXQ=";
const salt_URL = "https://img.freepik.com/premium-photo/woman-salts-food-with-pinch-salt_143092-11002.jpg";

//Initializing arrays 
let titles = [
  {type: "powder", title: "Yamamasa Koyamaen", image: yk_URL, description: powder0(), rank: 1},
  {type: "powder", title: "Marukyu Koyamaen", image: mk_URL, description: powder1(), rank: 1},
  {type: "powder", title: "Kanbayashi Shunsho", image: ks_URL, description: powder2(), rank: 1},
  {type: "powder", title: "Rocky's Matcha", image: rockys_URL, description: powder3(), rank: 1}
];

let milkOptions = [
  {type: "milk", title: "Straus Organic Milk Reduced Fat 2%", image: straus_URL, rank: 2},
  {type: "milk", title: "Oatly Barista Edition", image: oatly_URL, rank: 2},
  {type: "milk", title: "Fairlife Lactose-Free 2% Milk", image: fairlife_URL, rank: 2}
];

let sweetnerOptions = [
  {type: "sweet", title: "Agave", image: agave_URL, rank: 3},
  {type: "sweet", title: "Honey", image: honey_URL, rank: 3},
  {type: "sweet", title: "Maple Syrup", image: maple_URL, rank: 3},
  {type: "sweet", title: "Unsweeten", image: unsweet_URL, rank: 3}
];

let toppingOptions = [
  {type: "add", title: "Banana Pudding", image: banana_URL, rank: 4},
  {type: "add", title: "Cream Top", image: cream_URL, rank: 4},
  {type: "add", title: "No Toppings", image: none_URL, rank: 4},
  {type: "add", title: "Pinch of Salt", image: salt_URL, rank: 4}
];

//Empty array to track what items the user clicks on
let chosen = [];

//Creates card container which will display matcha powder options.
function showCards() 
{
  //Gets element from the HTML file
  const cardContainer = document.getElementById("card-container");
  //Emptys the content so that every time the function is called it won't add the same cards
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) 
  {
    let title = titles[i];

    //Declares and initializes the card elements with data from the array
    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, title.title, title.image); 

    //If the card is clicked on, it signals to use1() to add the elements
    nextCard.addEventListener("click", function()
    {
      use1(title.type, title.title, title.image, title.description, title.rank);
    });

    //Saves the card to the overall container
    cardContainer.appendChild(nextCard); 
  }
}

//Creates milk container which will display milk substitution options.
function showMilkCards()
{
  document.getElementById("second-bitmoji").style.display = "flex";
  const milkContainer = document.getElementById("milk-container");
  milkContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < milkOptions.length; i++) 
  {
    let milk = milkOptions[i];

    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, milk.title, milk.image); 

    nextCard.addEventListener("click", function()
    {
      use2(milk.type, milk.title, milk.image, milk.rank);
    });

    milkContainer.appendChild(nextCard); 
  }
}

//Creates sugar container which will display sweetener options.
function showSweetnerCards()
{
  document.getElementById("third-bitmoji").style.display = "flex";
  const sugarContainer = document.getElementById("sugar-container");
  sugarContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < sweetnerOptions.length; i++) 
  {
    let sugar = sweetnerOptions[i];

    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, sugar.title, sugar.image); 

    nextCard.addEventListener("click", function()
    {
      use3(sugar.type, sugar.title, sugar.image, sugar.rank);
    });

    sugarContainer.appendChild(nextCard); 
  }
}

//Creates topping container which will display add-on options.
function showAddOnCards()
{
  document.getElementById("fifth-bitmoji").style.display = "flex";
  const toppingContainer = document.getElementById("topping-container");
  toppingContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < toppingOptions.length; i++) 
  {
    let topping = toppingOptions[i];

    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, topping.title, topping.image); 

    nextCard.addEventListener("click", function()
    {
      use4(topping.type, topping.title, topping.image, topping.rank);
    });

    toppingContainer.appendChild(nextCard); 
  }
}

//Initializes the new cards 
function editCardContent(card, newTitle, newImageURL) 
{
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Matcha Powder";

  console.log("new card:", newTitle, "- html: ", card);
}

//Displays the cards upon loading screen
document.addEventListener("DOMContentLoaded", showCards);

//Displays all of the options the user has clicked on and provides the option to swap items out
function showAll()
{
  document.getElementById("four-bitmoji").style.display = "flex";
  const allContainer = document.getElementById("all-container");
  allContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  
  for (let i = 0; i < chosen.length; i++)
  {
    let choices = chosen[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, choices.title, choices.image);

    //When the card is clicked on, 
    nextCard.addEventListener("click", function()
    {
      //Data in current index will be deleted
      chosen.splice(i,1);

      //Based on what card the user clicks on, it passes the card information to display the options
      if (choices.type === "powder") 
      {
        showReplacementOptions("card-container", titles);
      } 
      else if (choices.type === "milk")
      {
        showReplacementOptions("milk-container", milkOptions);
      } 
      else if (choices.type === "sweet")
      {
        showReplacementOptions("sugar-container", sweetnerOptions);
      }
      else
      {
        showReplacementOptions("topping-container", toppingOptions);
      }
    });
    allContainer.appendChild(nextCard);
  }
  document.querySelector(".whisk").classList.remove("hidden");
}

//Provides extra confirmation about the item the user clicked on
function use1(type, brand, picture, description, rank)
{
  let text = `${description}\nDo you want to use it?`;
  if (confirm(text) == true)
  {
    //Add item to the array
    chosen.push({type: type, title: brand, image: picture, rank: rank});
    
    //Remove first page to toggle
    document.getElementById("page1").style.display = "none";
    document.getElementById("card-container").style.display = "none";
    //Calling milk cards because it is following the order of powder->milk->sweetener->add-on first
    showMilkCards(); 
  }
}

function use2(type, brand, picture, rank)
{
  let text = `You chose ${brand}\nDo you want to use it?`;
  if (confirm(text) == true)
  {
    chosen.push({type: type, title: brand, image: picture, rank: rank});
    document.getElementById("second-bitmoji").style.display = "none";
    document.getElementById("milk-container").style.display = "none";
    showSweetnerCards();
  }
}

function use3(type, brand, picture, rank)
{
  let text = `You chose ${brand}\nDo you want to use it?`;
  if (confirm(text) == true)
  {
    chosen.push({type: type, title: brand, image: picture, rank: rank});
    document.getElementById("third-bitmoji").style.display = "none";
    document.getElementById("sugar-container").style.display = "none";
    showAddOnCards();
  }
}

function use4(type, brand, picture, rank)
{
  let text = `You chose ${brand}\nDo you want to use it?`;
  if (confirm(text) == true)
  {
    chosen.push({type: type, title: brand, image: picture, rank: rank});
    document.getElementById("fifth-bitmoji").style.display = "none";
    document.getElementById("topping-container").style.display = "none";
    showAll();
  }
}

//Returns description about the different matcha powder blends
function powder0()
{
  return "This is Yamamasa Koyamaen matcha in the Samidori blend. Upon opening, it has a seaweed and vegetal aroma. It's has a good balance of umaminess and sweetness with little astringency. Medium bodied, super creamy and perfect for everyday drinking!";
}

function powder1()
{
  return "This is Marukyu Koyamaen matcha in the Isuzu blend. It is light, sweet, and creamy with not much depth. It's for those days when you want to relax and not think too much about the flavor.";
}

function powder2()
{
  return "This is Kanbayashi Shunsho matcha in the Biwa No Shiro blend. If you like dark chocolate this is the one for you! It is mildly astringent, but it's what makes the matcha so nutty and bold.";
}

function powder3()
{
  return "This is Rocky's Matcha in the Ceremonial blend. It is SUPER rich, umami, and bitter but as a latte the bitterness becomes neutralized and you can really taste how strong it is. It's a punch in the face type of matcha making it perfect for those days when you have to wake up super early.";
}

//Action function that displays the final page of the program
function whisk()
{
  document.getElementById("four-bitmoji").style.display = "none";
  document.getElementById("all-container").style.display = "none";
  document.querySelector(".whisk").classList.add("hidden");
  document.getElementById("last-step").classList.remove("hidden");
  document.getElementById("last-bitmoji").classList.remove("hidden");
  document.getElementById("chosen-container").classList.remove("hidden");
  print();
}

//Passes the containerID and its corresponding array so that the function can be reused to display the options
function showReplacementOptions(containerID, optionsArray) 
{
  document.getElementById("four-bitmoji").style.display = "none";
  document.querySelector(".whisk").classList.add("hidden");
  const container = document.getElementById(containerID);
  container.style.display = "flex";
  
  container.innerHTML = "";
  document.getElementById("all-container").style.display = "none";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < optionsArray.length; i++) 
  {
    let item = optionsArray[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, item.title, item.image);

    //When user clicks on a card, 
    nextCard.addEventListener("click", function () 
    {
      //Asks for confirmation
      if (confirm("Do you want to use it?")) 
      {
        //Adding item to the array
        chosen.push({type: item.type, title: item.title, image: item.image, rank: item.rank});
        container.style.display = "none";
        //Since item is added to the end of the array, sort the function so that items are replaced in the correct item order
        chosen.sort(function(a, b){return a.rank - b.rank});
        //Display user's choices 
        showAll();
        document.getElementById("all-container").style.display = "flex";
      }
    });
    container.appendChild(nextCard);
  }
}

//Prints the chosen array after all data is done being manipulated
function print()
{
  //Create container
  const chosenContainer = document.getElementById("chosen-container");
  chosenContainer.innerHTML = "";

  for (let i = 0; i < chosen.length; i++) 
  {
    //Create card in an unordered list format (so that it looks like a recipe card)
    const listItem = document.createElement("ul");
    //Create list
    const title = document.createElement("li");
    //Save item name 
    title.textContent = chosen[i].title;  
    title.classList.add("itemName");

    listItem.appendChild(title);
    //Add to the container
    chosenContainer.appendChild(listItem);
  }
}