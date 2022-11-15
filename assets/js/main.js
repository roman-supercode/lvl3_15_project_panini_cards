// In dieser Übung wirst du anhand von Eingaben Sammlerkarten so wie Panini erstellen.

// Erstelle eine Klasse zu einem Thema mit verschiedenen Merkmalen/Eigenschaften (z.B. Rapper: Künstlername, Alter, verkaufte Singles/Alben etc.
// Erstelle eine Inputform und ein Button im HTML für die Herstellung einer Paninikarte.
// Erstelle eine Methode, um die Karte in HTML anzuzeigen.
// Style die Paninikarte mithilfe des Gridsystems.

// https://marvels-guardians-of-the-galaxy.fandom.com/wiki/Galactic_Compendium
// ====== Marvel's Guardians of the Galaxy ========

const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;

class Guardians {
    constructor(alias, name, origin, occupation, card) {
        this.alias = alias;
        this.name = name;
        this.origin = origin;
        this.occupation = occupation;
        this.card = card;
    }

    createCard() {
        let createImg = document.createElement("img");
        createImg.style.backgroundColor = randomHsl();
        createImg.setAttribute("width", "100%");
        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = `Alias: ${this.alias}<br> Name: ${this.name}<br> Origin: ${this.origin}<br> Occupation: ${this.occupation}`;

        // console.log(figcaption);

        switch (this.card) {
            case "Groot":
                // -- figcaption --
                document.querySelector("#img1").appendChild(figcaption);
                // -- img --
                createImg.src = "./assets/img/Groot_Render.png";
                createImg.setAttribute("id", "img1");
                document.querySelector("#img1").appendChild(createImg);
                break;
            case "Peter Quill":
                // -- figcaption --
                document.querySelector("#img2").appendChild(figcaption);
                // -- img --
                createImg.src = "./assets/img/Star-Lord_Render.png";
                createImg.setAttribute("id", "img2");
                document.querySelector("#img2").appendChild(createImg);
                break;
            case "Rocket Raccoon":
                // -- figcaption --
                document.querySelector("#img3").appendChild(figcaption);
                // -- img --
                createImg.src = "./assets/img/Rocket_Render.png";
                createImg.setAttribute("id", "img3");
                document.querySelector("#img3").appendChild(createImg);
                break;
            case "Drax":
                // -- figcaption --
                document.querySelector("#img4").appendChild(figcaption);
                // -- img --
                createImg.src = "./assets/img/Drax_Render.png";
                createImg.setAttribute("id", "img4");
                document.querySelector("#img4").appendChild(createImg);
                break;
            case "Gamora":
                // -- figcaption --
                document.querySelector("#img5").appendChild(figcaption);
                // -- img --
                createImg.src = "./assets/img/Gamora_Render.png";
                createImg.setAttribute("id", "img5");
                document.querySelector("#img5").appendChild(createImg);
                break;
        }

        // document.querySelectorAll("figure").forEach(el => {
        //     el.classList.add("gradient-border", "gradient-border:after", "@keyframesanimatedgradient");
        // });

        // document.querySelector("#img1").appendChild(createImg);
    }
}


const submitButton = document.getElementById("button");
// const result = document.getElementById("result");
// // console.log(checkBox);


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const aliasVal = document.getElementById("alias").value;
    const nameVal = document.getElementById("name").value;
    const originVal = document.getElementById("origin").value;
    const occupationVal = document.getElementById("occupation").value;
    const cardVal = document.getElementById("card").value;
    // console.log(aliasVal);

    if (!(aliasVal && nameVal && originVal)) {
        return alert("Bitte die Felder ausfüllen!");
    }

    // console.log(cardVal);
    let guardiansCard = new Guardians(aliasVal, nameVal, originVal, occupationVal, cardVal);
    guardiansCard.createCard();


});
