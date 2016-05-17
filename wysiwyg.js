
var leadingLadies = [
  {
    title: "Actress",
    name: "Marilyn Monroe",
    bio: "An American actress and model. Famous for playing 'dumb blonde' characters, she became one of the most popular sex symbols of the 1950s, emblematic of the era's attitudes towards sexuality.",
    image: "img/marilyn-monroe.jpg",
    lifespan: {
      birth: 1926,
      death: 1962,
    },
  },
  {
    title: "Actress",
    name: "Dorothy Dandridge",
    bio: "An American film and theatre actress, singer and dancer. She is perhaps best known for being the first African-American actress to be nominated for an Academy Award for Best Actress for her performance in the 1954 film Carmen Jones.",
    image: "img/dorothy-dandridge.jpg",
    lifespan: {
      birth: 1922,
      death: 1965,
    },
  },
  {
    title: "Dancer",
    name: "Josephine Baker",
    bio: 'An American-born French dancer, jazz and pop music singer, and actress, who came to be known in various circles as the "Black Pearl," "Bronze Venus" "Jazz Cleopatra", and even the "Creole Goddess".',
    image: "img/josephine-baker.jpg",
    lifespan: {
      birth: 1906,
      death: 1975,
    },
  },
  {
    title: "Actress",
    name: "Sophia Loren",
    bio: "an Italian film actress. Her winning the Academy Award for Best Actress in 1962 made her the first artist to win an Oscar for a foreign-language performance.",
    image: "img/sophia-loren.jpg",
    lifespan: {
      birth: 1934,
      death: "N/A",
    },
  },
  {
    title: "Actress",
    name: "Jayne Mansfield",
    bio: "An American actress in film, theatre, and television. She was a major Hollywood sex symbol of the 1950s and early 1960s and 20th Century Fox's alternative to Marilyn Monroe.",
    image: "img/jayne-mansfield.jpg",
    lifespan: {
      birth: 1933,
      death: 1967,
    },
  },
  {
    title: "Model",
    name: "Bettie Page",
    bio: "An American model who gained a significant profile in the 1950s for her pin-up photos. Often referred to as the 'Queen of Pinups', her jet black hair, blue eyes, and trademark bangs have influenced artists for generations",
    image: "img/bettie-page.jpg",
    lifespan: {
      birth: 1923,
      death: 2008,
    }
  }
]


var userInput = document.getElementById('input');
var ladyContainer = document.getElementById('container');
var ladyCard = document.getElementsByClassName('ladies');
var ladyBio = '';

for (var i = 0; i < leadingLadies.length; i++) {
  ladyContainer.innerHTML +=
    `<div class="ladies" id="lady-${i}">
      <img src="${leadingLadies[i].image}">
      <p>Title: ${leadingLadies[i].title}</p>
      <p>Name: ${leadingLadies[i].name}</p>
      <p>Born: ${leadingLadies[i].lifespan.birth} | Died: ${leadingLadies[i].lifespan.death}</p>
      <p>Bio: <span id="bio-${i}">${leadingLadies[i].bio}</span></p>
    </div>`;
}

function editBiosFocus() {
  for (var i = 0; i < ladyCard.length; i++) {
    if (ladyCard.item(i).classList.contains("selected")) {
      ladyCard.item(i).classList.remove("selected");
    }
  }
  currentLady = document.getElementById(this.id);
  currentLady.classList.add("selected");
  ladyBio = this.id.replace("lady-", "bio-");
  userInput.focus();
  userInput.value = '';
}

function editBios (userInput) {
  document.getElementById(ladyBio).innerHTML = userInput;
}


for (var i = 0; i < ladyCard.length; i++) {
  ladyCard.item(i).addEventListener("click", editBiosFocus);
}

userInput.addEventListener("keyup", function() {
  editBios(userInput.value);
});


