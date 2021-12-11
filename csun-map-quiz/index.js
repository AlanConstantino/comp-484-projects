// locations commented out are out of bounds
const csunLocations = [
  {
    name: 'Arbor Grill',
    acronym: 'AR',
    center: {lat: 34.24132241943241, lng: -118.52958940332384},
    coords: [
      {lat: 34.241320199612005, lng: -118.52977020946408},
      {lat: 34.24103532217256, lng: -118.52976573406455},
      {lat: 34.24103902188575, lng: -118.52954912472823}, 
      {lat: 34.24129134194123, lng: -118.52955449520763},
      {lat: 34.24129060200083, lng: -118.52958850824392},
      {lat: 34.24132241943241, lng: -118.52958940332384},
    ],
  },
  {
    name: 'Jacaranda Hall',
    acronym: 'JD',
    center: {lat: 34.24161466697028, lng: -118.52855857378688},
    coords: [
      {lat: 34.24208307795418, lng: -118.52873506932671},
      {lat: 34.24195683468732, lng: -118.52873506932671},
      {lat: 34.24189039078664, lng: -118.52914900289598},
      {lat: 34.24168441436116, lng: -118.52939414801952},
      {lat: 34.24147511521899, lng: -118.5294544296073},
      {lat: 34.24103990422553, lng: -118.52945844837981},
      {lat: 34.24103105496109, lng: -118.52908789362576},
      {lat: 34.241105049197635, lng: -118.52908431330638},
      {lat: 34.24110416302653, lng: -118.52873937207315},
      {lat: 34.24103283183376, lng: -118.52873790958836},
      {lat: 34.241031626923316, lng: -118.52783791521067},
      {lat: 34.24208588942632, lng: -118.52783572395917},
    ],
  },
  {
    name: 'Plaza del Sol Performance Hall',
    acronym: 'PDS',
    center: {lat: 34.24052585736215, lng: -118.5264904041347},
    coords: [
      {lat: 34.24069251242944, lng: -118.52663502672937},
      {lat: 34.24061280787319, lng: -118.5266383136065},
      {lat: 34.240610090671105, lng: -118.52665255674083},
      {lat: 34.240534914711226, lng: -118.52665255674083},
      {lat: 34.24053219750662, lng: -118.52670843365239},
      {lat: 34.240486910749944, lng: -118.52670843365239},
      {lat: 34.240459738684244, lng: -118.52665584361799},
      {lat: 34.24042532072175, lng: -118.52667775613232},
      {lat: 34.240352861807395, lng: -118.52666570424942},
      {lat: 34.24032297248704, lng: -118.5265714804378},
      {lat: 34.24032025527557, lng: -118.52644329222889},
      {lat: 34.24035195607056, lng: -118.52633592090861},
      {lat: 34.240424414985725, lng: -118.52632386902572},
      {lat: 34.2404479641197, lng: -118.52634030341149},
      {lat: 34.24047604192471, lng: -118.52628004399705},
      {lat: 34.24052042295222, lng: -118.52627785274564},
      {lat: 34.240523140157215, lng: -118.5261978720683},
      {lat: 34.24062277094686, lng: -118.52619677644256},
      {lat: 34.24062458241468, lng: -118.52636550280299},
      {lat: 34.24069251242944, lng: -118.52636440717727},
    ],
  },
  {
    name: 'Sierra Hall',
    acronym: 'SH',
    center: {lat: 34.23824273950609, lng: -118.53074706580301},
    coords: [
      {lat: 34.23844102246408, lng: -118.53137300929818},
      {lat: 34.23811458076036, lng: -118.53137593426779},
      {lat: 34.238111034871416, lng: -118.53004436418118},
      {lat: 34.23844710104805, lng: -118.53004697003293},
    ],
  },
  {
    name: 'Sequoia Hall',
    acronym: 'SQ',
    center: {lat: 34.240483259060056, lng: -118.5280531506117},
    coords: [
      {lat: 34.24078129545225, lng: -118.52841971494176},
      {lat: 34.24055988008218, lng: -118.52842208762159},
      {lat: 34.24056066402858, lng: -118.52840312153903},
      {lat: 34.24035526981929, lng: -118.52840312153903},
      {lat: 34.24035526981929, lng: -118.52843536387938},
      {lat: 34.24015065905738, lng: -118.52843726048694},
      {lat: 34.240152026398505, lng: -118.52760614164886},
      {lat: 34.240356189632934, lng: -118.52760788084625},
      {lat: 34.240357627400435, lng: -118.52815572802842},
      {lat: 34.24056020498312, lng: -118.52815616457833},
      {lat: 34.24056015696161, lng: -118.52769131833351},
      {lat: 34.24078025566193, lng: -118.52769232302659},
    ],
  },
  {
    name: 'Sierra Tower',
    acronym: 'ST',
    center: {lat: 34.23876866386227, lng: -118.53021168857687},
    coords: [
      {lat: 34.23909623432975, lng: -118.53022411969796},
      {lat: 34.239020669816576, lng: -118.53022485094041},
      {lat: 34.23901885626745, lng: -118.53026214430517},
      {lat: 34.23888404900458, lng: -118.53026506927498},
      {lat: 34.23888163093514, lng: -118.53028846903325},
      {lat: 34.238669445066556, lng: -118.53029139400329},
      {lat: 34.23867065410223, lng: -118.53026287554799},
      {lat: 34.23844819085512, lng: -118.53026799424518},
      {lat: 34.238447586334644, lng: -118.53013856433219},
      {lat: 34.239017647235514, lng: -118.53013710184482},
      {lat: 34.23901790788523, lng: -118.53018311830809},
      {lat: 34.239096624687036, lng: -118.53018311830809},
    ],
  },
  {
    name: 'University Library',
    acronym: 'UL',
    center: {lat: 34.240110675821796, lng: -118.5293153981781},
    coords: [
      {lat: 34.240391565919865, lng: -118.53003154136378},
      {lat: 34.23990416237572, lng: -118.53003247328188},
      {lat: 34.239904617420045, lng: -118.52974983106736},
      {lat: 34.239765652156905, lng: -118.52975028945741},
      {lat: 34.23976506713623, lng: -118.52890291068603},
      {lat: 34.239905314789944, lng: -118.52890291068603},
      {lat: 34.23990645235649, lng: -118.52862152109513},
      {lat: 34.240391785253536, lng: -118.52862302643433},
    ],
  },
  {
    name: 'Jerome Richfield Hall',
    acronym: 'JR',
    center: {lat: 34.23889689122666, lng: -118.53068546686596},
    coords: [
      {lat: 34.23906618252769, lng: -118.53093145226441},
      {lat: 34.238703601365586, lng: -118.5309332424241},
      {lat: 34.23870212143927, lng: -118.53063786607503},
      {lat: 34.23868966418413, lng: -118.53063975645846},
      {lat: 34.23868966418413, lng: -118.53044060244252},
      {lat: 34.23870518587337, lng: -118.53044127299474},
      {lat: 34.23870417924662, lng: -118.53029054070373},
      {lat: 34.238894397177454, lng: -118.53029054070373},
      {lat: 34.238894397177454, lng: -118.53045323280887},
      {lat: 34.23906604127467, lng: -118.53045245808956},
    ],
  },
  {
    name: 'Sierra Center',
    acronym: 'SC',
    center: {lat: 34.23893413422889, lng: -118.53115058788711},
    coords: [
      {lat: 34.239055822197265, lng: -118.53138687883181},
      {lat: 34.23892216443353, lng: -118.53138898152693},
      {lat: 34.238922718778106, lng: -118.53133801955788},
      {lat: 34.23884511050382, lng: -118.53130985636444},
      {lat: 34.23879411074174, lng: -118.53122871954531},
      {lat: 34.23878690425031, lng: -118.5311730637049},
      {lat: 34.23878634990485, lng: -118.53109393854243},
      {lat: 34.23870929585084, lng: -118.53109393854243},
      {lat: 34.23870874150456, lng: -118.53102084834723},
      {lat: 34.23873756749006, lng: -118.53102017779499},
      {lat: 34.23873812183583, lng: -118.53103358883949},
      {lat: 34.238774154303584, lng: -118.5310342593917},
      {lat: 34.23877581734019, lng: -118.53093300600399},
      {lat: 34.23882404538732, lng: -118.53093367655623},
      {lat: 34.23882293669689, lng: -118.53101548392759},
      {lat: 34.239051880964944, lng: -118.53101481337428},
    ],
  },
  {
    name: 'Live Oak Hall',
    acronym: 'LO',
    center: {lat: 34.23828870292928, lng: -118.52822673535503},
    coords: [
      {lat: 34.23837318037288, lng: -118.52875895304267},
      {lat: 34.23835206101989, lng: -118.52876108191336},
      {lat: 34.23835030107357, lng: -118.52879940158651},
      {lat: 34.23826054376231, lng: -118.5287972727158},
      {lat: 34.23826054376231, lng: -118.52875682417191},
      {lat: 34.238172546305435, lng: -118.52875895304267},
      {lat: 34.238174504718444, lng: -118.5276751177466},
      {lat: 34.23820329330063, lng: -118.5276751177466},
      {lat: 34.23820425291988, lng: -118.5276344906209},
      {lat: 34.23829253784291, lng: -118.52763332984588},
      {lat: 34.23829445707935, lng: -118.5276751177466},
      {lat: 34.238374105352555, lng: -118.5276751177466},
    ],
  },
  {
    name: 'Eucalyptus Hall',
    acronym: 'EH',
    center: {lat: 34.23868164072371, lng: -118.52822995454092},
    coords: [
      {lat: 34.23875405100286, lng: -118.52875795923133},
      {lat: 34.2387302141356, lng: -118.528759970888},
      {lat: 34.23872910544393, lng: -118.52879953346924},
      {lat: 34.23864151875634, lng: -118.52879953346924},
      {lat: 34.23864151875634, lng: -118.52875862978354},
      {lat: 34.238552823283634, lng: -118.528759970888},
      {lat: 34.238553353948575, lng: -118.52767478303073},
      {lat: 34.23858328868086, lng: -118.52767478302061},
      {lat: 34.23858384302765, lng: -118.52763387934503},
      {lat: 34.238673647160105, lng: -118.52763522044951},
      {lat: 34.2386725384677, lng: -118.52764594928507},
      {lat: 34.23870413619562, lng: -118.52764594928507},
      {lat: 34.23870358184962, lng: -118.52767478303073},
      {lat: 34.23875402732086, lng: -118.52767478303073},
    ],
  },
  {
    name: 'Magnolia Hall',
    acronym: 'MG',
    center: {lat: 34.2394656963939, lng: -118.52825759032807},
    coords: [
      {lat: 34.239638248363406, lng: -118.52841305546907},
      {lat: 34.239206416509994, lng: -118.52840634994693},
      {lat: 34.23920752519538, lng: -118.52835538797787},
      {lat: 34.239225818502, lng: -118.52835471742566},
      {lat: 34.239227481529596, lng: -118.5282031726222},
      {lat: 34.23920364479613, lng: -118.52820250206666},
      {lat: 34.23920475348136, lng: -118.52814885789013},
      {lat: 34.23964283184422, lng: -118.52815650908933},
      {lat: 34.239640614484934, lng: -118.52822088210286},
      {lat: 34.23965946203715, lng: -118.5282222232073},
      {lat: 34.23965890769743, lng: -118.52828994898196},
      {lat: 34.23964116882475, lng: -118.52828994898196},
    ],
  },
];

const csunOutline = {
  name: 'California State University Northridge',
  acronym: 'CSUN',
  center: {lat: 34.239496440727734, lng: -118.52932134301862},
  coords: [
    {lat: 34.244565275290206, lng: -118.53379774597789},
    {lat: 34.235580016035634, lng: -118.5338021625826},
    {lat: 34.23558123351171, lng: -118.5272713093368},
    {lat: 34.23577857646755, lng: -118.52325882681644},
    {lat: 34.25728237319328, lng: -118.52341858203292},
    {lat: 34.2572236886884, lng: -118.52732940192648},
    {lat: 34.249976825676306, lng: -118.52734699717475},
    {lat: 34.24462802257429, lng: -118.52744288571932},
  ]
};

// styled with the following website: https://mapstyle.withgoogle.com/
const hiddenStyle = [
  {
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.neighborhood',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  }
]

let map;
const usedLocations = {};
const game = {
  correct: 0,
  wrong: 0,
  total: 0,
  missed: [],
};

// question elements
const buildingName = document.getElementById('building-name');
const nextButton = document.getElementById('next');

// modal elements
// modal yoinked from here: https://sabe.io/tutorials/how-to-create-modal-popup-box
const total = document.getElementById('total');
const incorrect = document.getElementById('incorrect');
const restart = document.getElementById('restart');
const score = document.getElementById('score');
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
      toggleModal();
  }
}

// returns a randomly selected location from an array of locations
function getRandomLocation(locations) {
  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}

// returns an unused location from all listed csun locations
function getUnusedLocation() {
  while (true) {
    // you're out of locations to quiz user on
    if (game.total >= csunLocations.length) {
      return false;
    }

    // get a new random location
    const newLocation = getRandomLocation(csunLocations);
    const haveUsedNewLocation = (newLocation.name in usedLocations)

    // if new random location has not been used, use it, else start loop again
    if (!haveUsedNewLocation) {
      usedLocations[newLocation.name] = true;
      return newLocation;
    }
  }
}

// updates the location on map, updates the name shown in question title, 
// will show if user got question correct/wrong by drawing outline
function updateLocation(location) {
  usedLocations[location.name] = true;
  buildingName.textContent = `${location.name} (${location.acronym})`;
  
  const highlight = new google.maps.Polygon({paths: location.coords});
  map.addListener('dblclick', (e) => {
    const resultColor = google.maps.geometry.poly.containsLocation(
        e.latLng,
        highlight)
        ? 'green': 'red';

    nextButton.disabled = false;

    const newHighlight = new google.maps.Polygon({
      paths: location.coords,
      strokeColor: resultColor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: resultColor,
      fillOpacity: 0.05,
    });

    newHighlight.setMap(map);
    
    if (resultColor === 'green') {
      game.correct++;
    } else {
      game.wrong++;
      game.missed.push(location);
    }
    game.total++;

    // if you don't remove event listener, this event will get executed multiple
    // times for some godforsaken reason
    // 
    // I don't want to spend more time figuring out why so if you remove the
    // listener right before the event terminates execution it solves the problem
    // for some reason
    //
    // it works don't question it...
    google.maps.event.clearListeners(map, 'dblclick');
  });

}

// initializes map to random csun location
function initMap() {
  // default state of next button is disbaled
  nextButton.disabled = true;

  // define map appearance, style, coords, etc.
  map = new google.maps.Map(document.getElementById('map'), {
    center: csunOutline.center,
    zoom: 17.5,
    styles: hiddenStyle,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    draggable: false,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
  });

  const location = getRandomLocation(csunLocations);
  updateLocation(location);
}

// appends missed locations to modal as list items
function displayMissedLocations() {
  const missed = document.getElementById('missed');
  game.missed.forEach((location) => {
    const li = document.createElement('li');
    const textNode = document.createTextNode(`${location.name} ${location.acronym}`);
    li.append(textNode);
    missed.append(li);
  });
}

// next button event listener
nextButton.addEventListener('click', () => {
  const newLocation = getUnusedLocation();

  if (newLocation === false) {
    google.maps.event.clearListeners(map, 'click');
    nextButton.disabled = true;
    score.textContent = game.correct;
    displayMissedLocations();
    console.log(game.missed);
    incorrect.textContent = game.wrong;
    total.textContent = csunLocations.length;
    toggleModal();
  } else {
    updateLocation(newLocation);
    nextButton.disabled = true;
  }

});

// modal event listeners
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// modal restart button
restart.addEventListener('click', () => location.reload());