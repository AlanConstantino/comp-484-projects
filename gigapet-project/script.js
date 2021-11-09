class Pokemon {
    constructor({name = "", weight = 0, happiness = 0, imgSrc = ""}, evolutions = []) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.initWeight = weight;
        this.weight = weight;
        this.happiness = happiness;
        this.img = imgSrc;
        this.evolutions = evolutions;
        this.currentEvolutionStage = 0;
        this.maxEvolutions = 2;
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

    changeColorTemporarily: (id, cssClass) => {
        document.getElementById(id).classList.add(cssClass);
        setTimeout(() => {
            document.getElementById(id).classList.remove(cssClass);
        }, 200);
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
// const audio = document.getElementById('audio');

// initial states for each evoltion of each starter pokemon
const fireStarterEvolutions = [
    {name: 'charmander', weight: 19, happiness: 0, imgSrc: './pokemon/charmander.gif'},
    {name: 'charmeleon', weight: 42, happiness: 0, imgSrc: './pokemon/charmeleon.gif'},
    {name: 'charizard', weight: 200, happiness: 0, imgSrc: './pokemon/charizard.gif'},
];

const waterStarterEvolutions = [
    {name: 'squirtle', weight: 20, happiness: 0, imgSrc: './pokemon/squirtle.gif'},
    {name: 'wartortle', weight: 50, happiness: 0, imgSrc: './pokemon/wartortle.gif'},
    {name: 'blastoise', weight: 189, happiness: 0, imgSrc: './pokemon/blastoise.gif'},
];

const grassStarterEvolutions = [
    {name: 'bulbasaur', weight: 15, happiness: 0, imgSrc: './pokemon/bulbasaur.gif'},
    {name: 'ivysaur', weight: 28, happiness: 0, imgSrc: './pokemon/ivysaur.gif'},
    {name: 'venusaur', weight: 221, happiness: 0, imgSrc: './pokemon/venusaur.gif'},
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
        util.updatePokemonImage(pet_info.img);
        util.updateDomValue('name', pet_info.name);
        util.updateDomValue('weight', pet_info.weight);
        util.updateDomValue('happiness', pet_info.happiness);
        util.playAudio('audio', 0.5, './sounds/level-up-sound.mp3');
    }
}

// user selects charmander pokemon
function onClickCharmanderChoice() {
    petSelectionContainer.style.display = 'none';
    pet_info = new Pokemon(fireStarterEvolutions[0], fireStarterEvolutions);
    util.updatePokemonImage(pet_info.img);
    util.updateDomValue('name', pet_info.name);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    buttonContainer.classList.remove('hide');
    petInfoContainer.classList.remove('hide');
}

// user selects bulbasaur pokemon
function onClickBulbasaurChoice() {
    petSelectionContainer.style.display = 'none';
    pet_info = new Pokemon(grassStarterEvolutions[0], grassStarterEvolutions);
    util.updatePokemonImage(pet_info.img);
    util.updateDomValue('name', pet_info.name);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    buttonContainer.classList.remove('hide');
    petInfoContainer.classList.remove('hide');
}

// user selects squirtle pokemon
function onClickSquirtleChoice() {
    petSelectionContainer.style.display = 'none';
    pet_info = new Pokemon(waterStarterEvolutions[0], waterStarterEvolutions);
    util.updatePokemonImage(pet_info.img);
    util.updateDomValue('name', pet_info.name);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
    buttonContainer.classList.remove('hide');
    petInfoContainer.classList.remove('hide');
}

function onClickPokeballPet() {
    if (pet_info.img.includes('back')) {
        pet_info.img = `./pokemon/${pet_info.name.toLowerCase()}.gif`;
    } else {
        pet_info.img = `./pokemon/${pet_info.name.toLowerCase()}-back.gif`;
    }

    util.updatePokemonImage(pet_info.img);
}

// setInterval(() => {
//     const name = pet_info.name.toLowerCase();
//     pet_info.img = `./pokemon/${name}-mad.gif`
//     util.updatePokemonImage(pet_info.img);
// }, 10000);