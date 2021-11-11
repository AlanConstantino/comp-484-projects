class Pokemon {
    constructor({name = "", weight = 0, happiness = 0, imgSrc = "", shiny = false}, evolutions = []) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.initWeight = weight;
        this.weight = weight;
        this.happiness = happiness;
        this.evolutions = evolutions;
        this.currentEvolutionStage = 0;
        this.maxEvolutions = 2;
        this.shiny = shiny;
        this.img = imgSrc;
    }

    checkIfShinyAndReplaceImg () {
        if (!this.shiny) {
            return this.img;
        }

        return  this.img.replace('.', '-shiny.');
    }

    increaseWeight(value = 1) {
        this.weight += value;
    }

    decreaseWeight(value = 1) {
        if (this.weight > this.initWeight) {
            this.weight -= value;
        }
    }

    increaseHappiness(value = 1) {
        if (this.happiness >= 100) {
            return;
        }

        this.happiness += value;
    }

    decreaseHappiness(value = 1) {
        if (this.happiness - value <= 0) {
            this.happiness = 0;
        } else {
            this.happiness -= value;
        }
    }

    evolve() {
        if (this.happiness >= 100 && this.maxEvolutions !== this.currentEvolutionStage) {
            this.currentEvolutionStage++;
            const {name, weight, happiness, imgSrc} = this.evolutions[this.currentEvolutionStage];
            this.name = name.charAt(0).toUpperCase() + name.slice(1);
            this.weight = weight;
            this.initWeight = weight;
            this.happiness = happiness;
            this.img = imgSrc;
            return true;
        } else {
            return false;
        }
    }
}

// utiliy functions (mostly for dom manipulation)
const util = {
    updateDomValue: (id, value) => {
        document.getElementById(id).textContent = value;
    },

    updatePokemonImage: (srcPath) => {
        document.getElementById('pokemon').src = srcPath;
        document.getElementById('pokemon').classList.remove('hide');
    },

    changeColorTemporarily: (id, cssClass, ms = 250) => {
        document.getElementById(id).classList.add(cssClass);
        setTimeout(() => {
            document.getElementById(id).classList.remove(cssClass);
        }, ms);
    },

    playAudio: (id = 'audio', volume = 0.5, audioSrc) => {
        const audio = document.getElementById(id);
        audio.volume = volume;
        audio.src = audioSrc;
        audio.play();
    },
};

let pet_info = null;

// action buttons for pet
const eat = document.getElementById('eat');
const play = document.getElementById('play');
const exercise = document.getElementById('exercise');
const evolve = document.getElementById('evolve');
const shiny = document.getElementById('shiny');

// initializing event listeners to their respective functions
eat.addEventListener('click', onClickEat);
play.addEventListener('click', onClickPlay);
exercise.addEventListener('click', onClickExercise);
evolve.addEventListener('click', onClickEvolve);

// pet selection
const petSelectionContainer = document.getElementById('pet-selection-container');
const charmanderChoice = document.getElementById('charmander');
const squirtleChoice = document.getElementById('squirtle');
const bulbasaurChoice = document.getElementById('bulbasaur');

// dom elements
const buttonContainer = document.getElementById('button-container');
const petInfoContainer = document.getElementById('pet-info-container');
const pokeballPet = document.getElementById('pokemon');

// initial states for each evolution of each starter pokemon
const fireStarterEvolutions = [
    {name: 'charmander', weight: 19, happiness: 0, imgSrc: 'pokemon/charmander.gif', shiny: (Math.random() * 11) > 10},
    {name: 'charmeleon', weight: 42, happiness: 0, imgSrc: 'pokemon/charmeleon.gif', shiny: (Math.random() * 11) > 10},
    {name: 'charizard', weight: 200, happiness: 0, imgSrc: 'pokemon/charizard.gif', shiny: (Math.random() * 11) > 10},
];

const waterStarterEvolutions = [
    {name: 'squirtle', weight: 20, happiness: 0, imgSrc: 'pokemon/squirtle.gif', shiny: (Math.random() * 11) > 10},
    {name: 'wartortle', weight: 50, happiness: 0, imgSrc: 'pokemon/wartortle.gif', shiny: (Math.random() * 11) > 10},
    {name: 'blastoise', weight: 189, happiness: 0, imgSrc: 'pokemon/blastoise.gif', shiny: (Math.random() * 11) > 10},
];

const grassStarterEvolutions = [
    {name: 'bulbasaur', weight: 15, happiness: 0, imgSrc: 'pokemon/bulbasaur.gif', shiny: (Math.random() * 11) > 10},
    {name: 'ivysaur', weight: 28, happiness: 0, imgSrc: 'pokemon/ivysaur.gif', shiny: (Math.random() * 11) > 10},
    {name: 'venusaur', weight: 221, happiness: 0, imgSrc: 'pokemon/venusaur.gif', shiny: (Math.random() * 11) > 10},
];

// defining event listeners and functions to get triggered
charmanderChoice.addEventListener('click', onClickCharmanderChoice);
squirtleChoice.addEventListener('click', onClickSquirtleChoice);
bulbasaurChoice.addEventListener('click', onClickBulbasaurChoice);
pokeballPet.addEventListener('click', onClickPokeballPet);

// increase weight and increase happiness
function onClickEat() {
    pet_info.increaseWeight(2);
    pet_info.increaseHappiness(10);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    util.changeColorTemporarily('weight', 'increase');
    util.changeColorTemporarily('happiness', 'increase');
}

// increase happiness and decrease weight
function onClickPlay() {
    pet_info.decreaseWeight(1);
    pet_info.increaseHappiness(1);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    util.changeColorTemporarily('weight', 'decrease');
    util.changeColorTemporarily('happiness', 'increase');
}

// decrease weight and decrease happiness
function onClickExercise() {
    pet_info.decreaseWeight(2);
    pet_info.decreaseHappiness(2);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    util.changeColorTemporarily('weight', 'decrease');
    util.changeColorTemporarily('happiness', 'decrease');
}

// evolves pokemon by updating image, reseting its happiness and updating its weight
function onClickEvolve() {
    if (pet_info.evolve()) {
        pet_info.img = pet_info.checkIfShinyAndReplaceImg();
        util.updatePokemonImage(pet_info.img);
        util.updateDomValue('name', pet_info.name);
        util.updateDomValue('weight', pet_info.weight);
        util.updateDomValue('happiness', pet_info.happiness);
        util.playAudio('audio', 0.5, 'sounds/level-up-sound.mp3');
    }
}

// user selects charmander pokemon
function onClickCharmanderChoice() {
    petSelectionContainer.style.display = 'none';
    pet_info = new Pokemon(fireStarterEvolutions[0], fireStarterEvolutions);
    pet_info.img = pet_info.checkIfShinyAndReplaceImg();
    util.updatePokemonImage(pet_info.img);
    util.updateDomValue('name', pet_info.name);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    util.updateDomValue('shiny', pet_info.shiny);
    buttonContainer.classList.remove('hide');
    petInfoContainer.classList.remove('hide');
}

// user selects bulbasaur pokemon
function onClickBulbasaurChoice() {
    petSelectionContainer.style.display = 'none';
    pet_info = new Pokemon(grassStarterEvolutions[0], grassStarterEvolutions);
    pet_info.img = pet_info.checkIfShinyAndReplaceImg();
    util.updatePokemonImage(pet_info.img);
    util.updateDomValue('name', pet_info.name);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    util.updateDomValue('shiny', pet_info.shiny);
    buttonContainer.classList.remove('hide');
    petInfoContainer.classList.remove('hide');
}

// user selects squirtle pokemon
function onClickSquirtleChoice() {
    petSelectionContainer.style.display = 'none';
    pet_info = new Pokemon(waterStarterEvolutions[0], waterStarterEvolutions);
    pet_info.img = pet_info.checkIfShinyAndReplaceImg();
    util.updatePokemonImage(pet_info.img);
    util.updateDomValue('name', pet_info.name);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    util.updateDomValue('shiny', pet_info.shiny);
    buttonContainer.classList.remove('hide');
    petInfoContainer.classList.remove('hide');
}

// shows back side of pokemon if pokeball is clicked
// if already showing back side, it will show front side of pokemon
function onClickPokeballPet() {
    if (pet_info.img.includes('back')) {
        pet_info.img = `pokemon/${pet_info.name.toLowerCase()}.gif`;
    } else {
        pet_info.img = `pokemon/${pet_info.name.toLowerCase()}-back.gif`;
    }

    pet_info.img = pet_info.checkIfShinyAndReplaceImg();
    util.updatePokemonImage(pet_info.img);
}