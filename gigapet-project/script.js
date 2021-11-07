class Pokemon {
    constructor(name = null, weight = 0, happiness = 0, imgSrc = './pokemon/charmander.gif') {
        this.name = name;
        this.initWeight = weight;
        this.weight = weight;
        this.happiness = happiness;
        this.img = imgSrc;
        this.isEvolutionTime = false;
        this.currentEvolutionStage = 0;
        this.nextEvolutionStage = 1;
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
            this.isEvolutionTime = true;
            return;
        }

        this.happiness += value;
    }

    decreaseHappiness(value) {
        if (this.happiness != 0) {
            this.happiness -= value;
        }
    }

    evolve(imgSrc) {
        if (this.isEvolutionTime && this.happiness >= 100) {
            this.img = imgSrc;
            this.currentEvolutionStage++;
            this.nextEvolutionStage++;
            this.isEvolutionTime = false;
            this.happiness = 0;
        }
    }
}

// utiliy functions (mostly for dom manipulation)
const util = {
    updateDomValue: (id, value) => {
        document.getElementById(id).textContent = value;
    },

    initValuesDom: ({name, weight, happiness}) => {
        document.getElementById('name').textContent = name;
        document.getElementById('weight').textContent = weight;
        document.getElementById('happiness').textContent = happiness;
    },

    updatePokemonImage: (srcPath) => {
        document.getElementById('pokemon').src = srcPath;
    },
};

const fireStarter = [
    {name: 'charmander', weight: 19},
    {name: 'charmeleon', weight: 42},
    {name: 'charizard', weight: 200},
];

const pet_info = new Pokemon('Charmander', 19, 0, './pokemon/charmander.gif');

// increase weight and increase happiness
function onClickEat() {
    pet_info.increaseWeight(2);
    pet_info.increaseHappiness(10);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
}

// increase happiness and decrease weight
function onClickPlay() {
    pet_info.decreaseWeight(1);
    pet_info.increaseHappiness(1);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
}

// decrease weight and decrease happiness
function onClickExercise() {
    pet_info.decreaseWeight(2);
    pet_info.decreaseHappiness(2);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
}

// evolves pokemon by updating image, reseting its happiness and updating its weight
function onClickEvolve() {
    pet_info.evolve(`./pokemon/${fireStarter[pet_info.nextEvolutionStage].name}.gif`);
    pet_info.weight = fireStarter[pet_info.currentEvolutionStage].weight
    util.updatePokemonImage(pet_info.img);
    util.updateDomValue('weight', pet_info.weight);
    util.updateDomValue('happiness', pet_info.happiness);
}

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

// initializes pokemon values on dom
util.initValuesDom(pet_info);