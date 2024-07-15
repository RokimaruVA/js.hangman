const wordLists = {
  fruits: [
    "apple",
    "banana",
    "cherry",
    "date",
    "fig",
    "grape",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "raspberry",
    "strawberry",
    "watermelon",
    "apricot",
    "blackberry",
    "blueberry",
    "cantaloupe",
    "coconut",
    "cranberry",
    "dragonfruit",
    "elderberry",
    "gooseberry",
    "grapefruit",
    "guava",
    "honeydew",
    "jackfruit",
    "lime",
    "lychee",
    "mandarin",
    "mulberry",
    "olive",
    "passionfruit",
    "persimmon",
  ],
  animals: [
    "lion",
    "tiger",
    "elephant",
    "giraffe",
    "zebra",
    "kangaroo",
    "panda",
    "rhino",
    "hippo",
    "cheetah",
    "leopard",
    "wolf",
    "fox",
    "bear",
    "rabbit",
    "deer",
    "squirrel",
    "monkey",
    "bat",
    "koala",
    "camel",
    "crocodile",
    "dolphin",
    "eagle",
    "flamingo",
    "gorilla",
    "hawk",
    "iguana",
    "jaguar",
    "lemur",
    "meerkat",
    "narwhal",
    "octopus",
    "penguin",
    "quokka",
    "raccoon",
    "seahorse",
    "tortoise",
    "walrus",
  ],
  countries: [
    "canada",
    "brazil",
    "india",
    "japan",
    "germany",
    "france",
    "italy",
    "spain",
    "china",
    "russia",
    "mexico",
    "argentina",
    "australia",
    "southafrica",
    "egypt",
    "nigeria",
    "kenya",
    "norway",
    "sweden",
    "finland",
    "poland",
    "ukraine",
    "belgium",
    "denmark",
    "netherlands",
    "switzerland",
    "portugal",
    "greece",
    "hungary",
    "austria",
    "serbia",
    "croatia",
    "czechia",
    "slovakia",
    "bulgaria",
    "romania",
    "slovenia",
    "albania",
    "ireland",
    "iceland",
  ],
  colors: [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "grey",
    "turquoise",
    "lavender",
    "violet",
    "maroon",
    "beige",
    "crimson",
    "indigo",
    "teal",
    "navy",
    "amber",
    "apricot",
    "aquamarine",
    "azure",
    "bisque",
    "chartreuse",
    "coral",
    "cyan",
    "fuchsia",
    "gold",
    "ivory",
    "jade",
    "khaki",
    "lime",
    "magenta",
    "mint",
    "peach",
    "plum",
    "saffron",
    "salmon",
  ],
  sports: [
    "soccer",
    "basketball",
    "baseball",
    "tennis",
    "cricket",
    "rugby",
    "golf",
    "hockey",
    "swimming",
    "boxing",
    "cycling",
    "wrestling",
    "gymnastics",
    "volleyball",
    "badminton",
    "skiing",
    "skating",
    "surfing",
    "karate",
    "archery",
    "rowing",
    "fencing",
    "judo",
    "taekwondo",
    "squash",
    "handball",
    "softball",
    "triathlon",
    "diving",
    "equestrian",
    "snowboarding",
    "snooker",
    "sailing",
    "lacrosse",
    "kendo",
    "weightlifting",
    "biathlon",
    "bobsleigh",
    "canoeing",
    "curling",
  ],
  occupations: [
    "doctor",
    "teacher",
    "engineer",
    "nurse",
    "policeman",
    "firefighter",
    "chef",
    "lawyer",
    "dentist",
    "architect",
    "pharmacist",
    "journalist",
    "scientist",
    "pilot",
    "mechanic",
    "electrician",
    "plumber",
    "carpenter",
    "artist",
    "musician",
    "actor",
    "author",
    "baker",
    "barber",
    "butcher",
    "cashier",
    "clerk",
    "coach",
    "dancer",
    "designer",
    "director",
    "farmer",
    "guide",
    "hairdresser",
    "judge",
    "librarian",
    "manager",
    "mason",
    "painter",
    "photographer",
  ],
  vehicles: [
    "car",
    "bicycle",
    "motorcycle",
    "airplane",
    "helicopter",
    "boat",
    "ship",
    "submarine",
    "bus",
    "train",
    "truck",
    "scooter",
    "van",
    "tractor",
    "ambulance",
    "firetruck",
    "taxi",
    "limousine",
    "hovercraft",
    "spaceship",
    "yacht",
    "canoe",
    "jet",
    "glider",
    "rickshaw",
    "skateboard",
    "snowmobile",
    "tank",
    "tram",
    "trolley",
    "bulldozer",
    "excavator",
    "forklift",
    "gondola",
    "jet",
    "jumbo",
    "kayak",
    "minivan",
    "moped",
    "pickup",
  ],
  food: [
    "pizza",
    "burger",
    "pasta",
    "sushi",
    "salad",
    "sandwich",
    "steak",
    "soup",
    "taco",
    "burrito",
    "omelette",
    "curry",
    "noodles",
    "paella",
    "risotto",
    "dumplings",
    "pancakes",
    "waffles",
    "lasagna",
    "muffin",
    "bagel",
    "brownie",
    "cheesecake",
    "chocolate",
    "cookie",
    "croissant",
    "doughnut",
    "falafel",
    "frittata",
    "gelato",
    "gnocchi",
    "hotdog",
    "meatloaf",
    "nachos",
    "popcorn",
    "pretzel",
    "quiche",
    "ramen",
    "tortilla",
    "yogurt",
  ],
  nature: [
    "tree",
    "flower",
    "mountain",
    "river",
    "ocean",
    "forest",
    "desert",
    "valley",
    "island",
    "waterfall",
    "volcano",
    "cave",
    "meadow",
    "glacier",
    "hill",
    "lake",
    "swamp",
    "reef",
    "grove",
    "plain",
    "bush",
    "cliff",
    "coast",
    "dune",
    "field",
    "fjord",
    "gorge",
    "jungle",
    "lagoon",
    "marsh",
    "oasis",
    "peak",
    "pond",
    "prairie",
    "rainforest",
    "savanna",
    "stream",
    "tundra",
    "wetland",
    "woodland",
  ],
  technology: [
    "computer",
    "smartphone",
    "tablet",
    "laptop",
    "printer",
    "camera",
    "television",
    "microwave",
    "refrigerator",
    "robot",
    "drone",
    "satellite",
    "router",
    "keyboard",
    "mouse",
    "monitor",
    "console",
    "headphones",
    "charger",
    "projector",
    "bluetooth",
    "smartwatch",
    "speaker",
    "modem",
    "joystick",
    "webcam",
    "microphone",
    "e-reader",
    "calculator",
    "flashdrive",
    "harddrive",
    "thermometer",
    "microscope",
    "oscilloscope",
    "telescope",
    "lightbulb",
    "typewriter",
    "airconditioner",
    "fan",
    "humidifier",
  ],
};
