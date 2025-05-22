// Define photos for each location
const photoData = {
  aus: {
    title: "Australia Photography",
    description: "Urban and natural landscapes from Australia.",
    photos: {
      black: [
        { src: "assets/images/photography/aus/bees.jpg", alt: "Bees" },
        { src: "assets/images/photography/aus/citymetro.jpg", alt: "City Metro" },
        { src: "assets/images/photography/aus/library.jpg", alt: "Library" },
        { src: "assets/images/photography/aus/melbbuilding.jpg", alt: "Melbourne Building" },
        { src: "assets/images/photography/aus/skylight.jpg", alt: "Skylight" }
      ],
      gray: [
        { src: "assets/images/photography/aus/lanterns.jpg", alt: "Lanterns" }
      ],
      green: [
        { src: "assets/images/photography/aus/redboat.jpg", alt: "Red Boat" }
      ]
    }
  },
  bali: {
    title: "Bali Photography",
    description: "Temples, nature, and culture from Bali.",
    photos: {
      gray: [
        { src: "assets/images/photography/bali/airport.jpg", alt: "Airport" },
        { src: "assets/images/photography/bali/beachtrucks2.jpg", alt: "Beach Trucks 2" },
        { src: "assets/images/photography/bali/beachtrucks1.jpg", alt: "Beach Trucks 1" },
        { src: "assets/images/photography/bali/bhudda.jpg", alt: "Buddha" },
        { src: "assets/images/photography/bali/catpaw.jpg", alt: "Cat Paw" },
        { src: "assets/images/photography/bali/chinatemple.jpg", alt: "Chinese Temple" },
        { src: "assets/images/photography/bali/circlemen.jpg", alt: "Circle Men" },
        { src: "assets/images/photography/bali/colosseum.jpg", alt: "Colosseum" },
        { src: "assets/images/photography/bali/deputamadre.jpg", alt: "Deputa Madre" },
        { src: "assets/images/photography/bali/dontswim.jpg", alt: "Don't Swim" },
        { src: "assets/images/photography/bali/dragonfly.jpg", alt: "Dragonfly" },
        { src: "assets/images/photography/bali/dragonroof.jpg", alt: "Dragon Roof" },
        { src: "assets/images/photography/bali/DSC_1222.jpg", alt: "Temple Scene" },
        { src: "assets/images/photography/bali/hanumanfly.jpg", alt: "Hanuman Fly" },
        { src: "assets/images/photography/bali/koistatue.jpg", alt: "Koi Statue" },
        { src: "assets/images/photography/bali/lazycat.jpg", alt: "Lazy Cat" },
        { src: "assets/images/photography/bali/luwak.jpg", alt: "Luwak" },
        { src: "assets/images/photography/bali/monkeygate.jpg", alt: "Monkey Gate" },
        { src: "assets/images/photography/bali/oceantree.jpg", alt: "Ocean Tree" },
        { src: "assets/images/photography/bali/ram.jpg", alt: "Ram" },
        { src: "assets/images/photography/bali/ricefield.jpg", alt: "Rice Field" },
        { src: "assets/images/photography/bali/shadowcat.jpg", alt: "Shadow Cat" }
      ],
      black: [
        { src: "assets/images/photography/bali/batcave.jpg", alt: "Bat Cave" },
        { src: "assets/images/photography/bali/bhudda (2).jpg", alt: "Buddha 2" },
        { src: "assets/images/photography/bali/bhudda3.jpg", alt: "Buddha 3" },
        { src: "assets/images/photography/bali/biketruck.jpg", alt: "Bike Truck" },
        { src: "assets/images/photography/bali/bridgebus.jpg", alt: "Bridge Bus" },
        { src: "assets/images/photography/bali/brokentemple.jpg", alt: "Broken Temple" },
        { src: "assets/images/photography/bali/coconutstairs.jpg", alt: "Coconut Stairs" },
        { src: "assets/images/photography/bali/crossing.jpg", alt: "Crossing" },
        { src: "assets/images/photography/bali/door.jpg", alt: "Door" },
        { src: "assets/images/photography/bali/dragonwarrior.jpg", alt: "Dragon Warrior" },
        { src: "assets/images/photography/bali/dragonwarrior2.jpg", alt: "Dragon Warrior 2" },
        { src: "assets/images/photography/bali/DSC_0069.jpg", alt: "Cat Loaf" },
        { src: "assets/images/photography/bali/firegirl.JPG", alt: "Fire Girl" },
        { src: "assets/images/photography/bali/hanumanfire.jpg", alt: "Hanuman Fire" },
        { src: "assets/images/photography/bali/hanumansmoke.JPG", alt: "Hanuman Smoke" },
        { src: "assets/images/photography/bali/junglepot.jpg", alt: "Jungle Pot" },
        { src: "assets/images/photography/bali/junglestairs.jpg", alt: "Jungle Stairs" },
        { src: "assets/images/photography/bali/monkeygarden.jpg", alt: "Monkey Garden" },
        { src: "assets/images/photography/bali/monkeygarden2.jpg", alt: "Monkey Garden 2" },
        { src: "assets/images/photography/bali/monkeyshade.jpg", alt: "Monkey Shade" },
        { src: "assets/images/photography/bali/monkeytemple.jpg", alt: "Monkey Temple" },
        { src: "assets/images/photography/bali/monkeytree.jpg", alt: "Monkey Tree" },
        { src: "assets/images/photography/bali/oceanswing.jpg", alt: "Ocean Swing" },
        { src: "assets/images/photography/bali/rockskull.jpg", alt: "Rock Skull" },
        { src: "assets/images/photography/bali/shopalley.jpg", alt: "Shop Alley" },
        { src: "assets/images/photography/bali/sleepycat.jpg", alt: "Sleepy Cat" },
        { src: "assets/images/photography/bali/sunrays.jpg", alt: "Sun Rays" }
      ],
      blue: [
        { src: "assets/images/photography/bali/buildingnight.jpg", alt: "Building at Night" }
      ],
      green: [
        { src: "assets/images/photography/bali/butterfly.jpg", alt: "Butterfly" },
        { src: "assets/images/photography/bali/girlspurple.jpg", alt: "Girls in Purple" },
        { src: "assets/images/photography/bali/onimasks1.jpg", alt: "Oni Masks 1" },
        { src: "assets/images/photography/bali/onimasks2.jpg", alt: "Oni Masks 2" },
        { src: "assets/images/photography/bali/temple.jpg", alt: "Temple" }
      ],
      orange: [
        { src: "assets/images/photography/bali/flaminghusk.jpg", alt: "Flaming Husk" }
      ],
      white: [
        { src: "assets/images/photography/bali/offering.JPG", alt: "Offering" },
        { src: "assets/images/photography/bali/templepath.jpg", alt: "Temple Path" },
        { src: "assets/images/photography/bali/threeboats.jpg", alt: "Three Boats" }
      ]
    }
  }
};

// Function to get query parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderGallery() {
  const locationId = getQueryParam("location");
  const locationData = photoData[locationId];

  if (!locationData) {
    document.querySelector("main").innerHTML = "<p>Location not found.</p>";
    return;
  }

  const galleryContainer = document.querySelector(".gallery-container");

  Object.keys(locationData.photos).forEach((color) => {
    locationData.photos[color].forEach((photo) => {
      // Create anchor tag for lightbox
      const anchor = document.createElement("a");
      anchor.href = photo.src;
      anchor.setAttribute("data-lightbox", "gallery");
      anchor.setAttribute("data-title", photo.alt);

      // Create image tag
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt;

      // Append image to anchor, then anchor to gallery
      anchor.appendChild(img);
      galleryContainer.appendChild(anchor);
    });
  });
}



// Initialize the gallery on page load
document.addEventListener("DOMContentLoaded", renderGallery);