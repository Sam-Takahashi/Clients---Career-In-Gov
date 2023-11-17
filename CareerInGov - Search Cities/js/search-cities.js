// ***********
// Cities data
// ***********
var cities = [
  { "city": "Albany, New York", "url": "https://www.careersingovernment.com/cities/jobs-in-albany/", "count": 100 },
  { "city": "Anchorage, Alaska", "url": "https://www.careersingovernment.com/cities/jobs-in-anchorage/", "count": 95 },
  { "city": "Austin, Texas", "url": "https://www.careersingovernment.com/cities/jobs-in-austin/", "count": 92 },

  { "city": "Baltimore, Maryland", "url": "https://www.careersingovernment.com/cities/jobs-in-baltimore/", "count": 88 },
  { "city": "Boise, Idaho", "url": "https://www.careersingovernment.com/cities/jobs-in-boise/", "count": 85 },
  { "city": "Boston, Massachusetts", "url": "https://www.careersingovernment.com/cities/jobs-in-boston/", "count": 82 },

  { "city": "Chicago, Illinois", "url": "https://www.careersingovernment.com/cities/jobs-in-chicago/", "count": 79 },
  { "city": "Charlotte, North Carolina", "url": "https://www.careersingovernment.com/cities/jobs-in-charlotte/", "count": 75 },
  { "city": "Columbus, Ohio", "url": "https://www.careersingovernment.com/cities/jobs-in-columbus/", "count": 72 },

  { "city": "Dallas, Texas", "url": "https://www.careersingovernment.com/cities/jobs-in-dallas/", "count": 69 },
  { "city": "Denver, Colorado", "url": "https://www.careersingovernment.com/cities/jobs-in-denver/", "count": 65 },
  { "city": "Detroit, Michigan", "url": "https://www.careersingovernment.com/cities/jobs-in-detroit/", "count": 62 },

  { "city": "El Paso, Texas", "url": "https://www.careersingovernment.com/cities/jobs-in-el-paso/", "count": 59 },
  { "city": "Eugene, Oregon", "url": "https://www.careersingovernment.com/cities/jobs-in-eugene/", "count": 57 },
  { "city": "Everett, Washington", "url": "https://www.careersingovernment.com/cities/jobs-in-everett/", "count": 55 },

  { "city": "Fort Worth, Texas", "url": "https://www.careersingovernment.com/cities/jobs-in-fort-worth/", "count": 52 },
  { "city": "Fresno, California", "url": "https://www.careersingovernment.com/cities/jobs-in-fresno/", "count": 50 },
  { "city": "Frankfurt, Germany", "url": "https://www.careersingovernment.com/cities/jobs-in-frankfurt/", "count": 48 },

  { "city": "Grand Rapids, Michigan", "url": "https://www.careersingovernment.com/cities/jobs-in-grand-rapids/", "count": 45 },
  { "city": "Greensboro, North Carolina", "url": "https://www.careersingovernment.com/cities/jobs-in-greensboro/", "count": 42 },
  { "city": "Honolulu, Hawaii", "url": "https://www.careersingovernment.com/cities/jobs-in-honolulu/", "count": 39 },

  { "city": "Indianapolis, Indiana", "url": "https://www.careersingovernment.com/cities/jobs-in-indianapolis/", "count": 36 },
  { "city": "Irvine, California", "url": "https://www.careersingovernment.com/cities/jobs-in-irvine/", "count": 33 },
  { "city": "Jacksonville, Florida", "url": "https://www.careersingovernment.com/cities/jobs-in-jacksonville/", "count": 30 },

  { "city": "Kansas City, Missouri", "url": "https://www.careersingovernment.com/cities/jobs-in-kansas-city/", "count": 27 },
  { "city": "Knoxville, Tennessee", "url": "https://www.careersingovernment.com/cities/jobs-in-knoxville/", "count": 24 },
  { "city": "Las Vegas, Nevada", "url": "https://www.careersingovernment.com/cities/jobs-in-las-vegas/", "count": 21 },

  { "city": "Los Angeles, California", "url": "https://www.careersingovernment.com/cities/jobs-in-los-angeles/", "count": 752 },
  { "city": "Louisville, Kentucky", "url": "https://www.careersingovernment.com/cities/jobs-in-louisville/", "count": 18 },
  { "city": "Lubbock, Texas", "url": "https://www.careersingovernment.com/cities/jobs-in-lubbock/", "count": 15 },

  { "city": "Madison, Wisconsin", "url": "https://www.careersingovernment.com/cities/jobs-in-madison/", "count": 12 },
  { "city": "Memphis, Tennessee", "url": "https://www.careersingovernment.com/cities/jobs-in-memphis/", "count": 10 },
  { "city": "Miami, Florida", "url": "https://www.careersingovernment.com/cities/jobs-in-miami/", "count": 8 },

  { "city": "Minneapolis, Minnesota", "url": "https://www.careersingovernment.com/cities/jobs-in-minneapolis/", "count": 7 },
  { "city": "Montgomery, Alabama", "url": "https://www.careersingovernment.com/cities/jobs-in-montgomery/", "count": 5 },
  { "city": "Nashville, Tennessee", "url": "https://www.careersingovernment.com/cities/jobs-in-nashville/", "count": 3 },

  { "city": "New York City, New York", "url": "https://www.careersingovernment.com/cities/jobs-in-new-york-city/", "count": 1 },
  { "city": "Norfolk, Virginia", "url": "https://www.careersingovernment.com/cities/jobs-in-norfolk/", "count": 2 },
  { "city": "Oklahoma City, Oklahoma", "url": "https://www.careersingovernment.com/cities/jobs-in-oklahoma-city/", "count": 4 },

  { "city": "Omaha, Nebraska", "url": "https://www.careersingovernment.com/cities/jobs-in-omaha/", "count": 6 },
  { "city": "Orlando, Florida", "url": "https://www.careersingovernment.com/cities/jobs-in-orlando/", "count": 9 },
  { "city": "Oxnard, California", "url": "https://www.careersingovernment.com/cities/jobs-in-oxnard/", "count": 11 },

  { "city": "Philadelphia, Pennsylvania", "url": "https://www.careersingovernment.com/cities/jobs-in-philadelphia/", "count": 13 },
  { "city": "Phoenix, Arizona", "url": "https://www.careersingovernment.com/cities/jobs-in-phoenix/", "count": 16 },
  { "city": "Pittsburgh, Pennsylvania", "url": "https://www.careersingovernment.com/cities/jobs-in-pittsburgh/", "count": 19 },

  { "city": "Portland, Oregon", "url": "https://www.careersingovernment.com/cities/jobs-in-portland/", "count": 22 },
  { "city": "Providence, Rhode Island", "url": "https://www.careersingovernment.com/cities/jobs-in-providence/", "count": 25 },
  { "city": "Raleigh, North Carolina", "url": "https://www.careersingovernment.com/cities/jobs-in-raleigh/", "count": 28 },

  { "city": "Richmond, Virginia", "url": "https://www.careersingovernment.com/cities/jobs-in-richmond/", "count": 31 },
  { "city": "Riverside, California", "url": "https://www.careersingovernment.com/cities/jobs-in-riverside/", "count": 34 },
  { "city": "Rochester, New York", "url": "https://www.careersingovernment.com/cities/jobs-in-rochester/", "count": 37 },

  { "city": "Sacramento, California", "url": "https://www.careersingovernment.com/cities/jobs-in-sacramento/", "count": 40 },
  { "city": "Salt Lake City, Utah", "url": "https://www.careersingovernment.com/cities/jobs-in-salt-lake-city/", "count": 43 },
  { "city": "San Antonio, Texas", "url": "https://www.careersingovernment.com/cities/jobs-in-san-antonio/", "count": 46 },

  { "city": "San Diego, California", "url": "https://www.careersingovernment.com/cities/jobs-in-san-diego/", "count": 49 },
  { "city": "San Francisco, California", "url": "https://www.careersingovernment.com/cities/jobs-in-san-francisco/", "count": 51 },
  { "city": "San Jose, California", "url": "https://www.careersingovernment.com/cities/jobs-in-san-jose/", "count": 53 },

  { "city": "Seattle, Washington", "url": "https://www.careersingovernment.com/cities/jobs-in-seattle/", "count": 56 },
  { "city": "St. Louis, Missouri", "url": "https://www.careersingovernment.com/cities/jobs-in-st-louis/", "count": 58 },
  { "city": "Stockton, California", "url": "https://www.careersingovernment.com/cities/jobs-in-stockton/", "count": 60 },

  { "city": "Tampa, Florida", "url": "https://www.careersingovernment.com/cities/jobs-in-tampa/", "count": 63 },
  { "city": "Toledo, Ohio", "url": "https://www.careersingovernment.com/cities/jobs-in-toledo/", "count": 66 },
  { "city": "Tucson, Arizona", "url": "https://www.careersingovernment.com/cities/jobs-in-tucson/", "count": 70 },

  { "city": "Tulsa, Oklahoma", "url": "https://www.careersingovernment.com/cities/jobs-in-tulsa/", "count": 73 },
  { "city": "Tustin, California", "url": "https://www.careersingovernment.com/cities/jobs-in-tustin/", "count": 76 },
  { "city": "Tyler, Texas", "url": "https://www.careersingovernment.com/cities/jobs-in-tyler/", "count": 78 },

  { "city": "Upland, California", "url": "https://www.careersingovernment.com/cities/jobs-in-upland/", "count": 80 },
  { "city": "Utica, New York", "url": "https://www.careersingovernment.com/cities/jobs-in-utica/", "count": 83 },
  { "city": "Virginia Beach, Virginia", "url": "https://www.careersingovernment.com/cities/jobs-in-virginia-beach/", "count": 86 },

  { "city": "Visalia, California", "url": "https://www.careersingovernment.com/cities/jobs-in-visalia/", "count": 89 },
  { "city": "Ventura, California", "url": "https://www.careersingovernment.com/cities/jobs-in-ventura/", "count": 91 },
  { "city": "Vancouver, Washington", "url": "https://www.careersingovernment.com/cities/jobs-in-vancouver/", "count": 94 },

  { "city": "Washington, D.C.", "url": "https://www.careersingovernment.com/cities/jobs-in-washington-dc/", "count": 97 },
  { "city": "Wichita, Kansas", "url": "https://www.careersingovernment.com/cities/jobs-in-wichita/", "count": 99 },
  { "city": "Winston-Salem, North Carolina", "url": "https://www.careersingovernment.com/cities/jobs-in-winston-salem/", "count": 101 },

  { "city": "Xalapa, Mexico", "url": "https://www.careersingovernment.com/cities/jobs-in-xalapa/", "count": 104 },
];

// Sort the cities alphabetically based on the city name
cities.sort(function (a, b) {
  var cityA = a.city.toUpperCase();
  var cityB = b.city.toUpperCase();
  if (cityA < cityB) {
    return -1;
  }
  if (cityA > cityB) {
    return 1;
  }
  return 0;
});

// Group cities by alphabet
var groupedCities = {};
cities.forEach(function (city) {
  var firstLetter = city.city.charAt(0).toUpperCase();
  if (!groupedCities[firstLetter]) {
    groupedCities[firstLetter] = [];
  }
  groupedCities[firstLetter].push(city);
});

const listContainer = $("#id_city_list");

for (const letter in groupedCities) {
  if (groupedCities.hasOwnProperty(letter)) {
    const items = groupedCities[letter].map(city =>
      `<li>
          <a href="${city.url}">
            <span class="cig-content-head">${city.city}</span>
            <span class="cig--count">(${city.count})</span>
          </a>
        </li>`
    ).join("");
    const listItem = $("<li>");
    listItem.append($("<span>").text(letter).addClass("cig-toggle-items"));
    listItem.append($("<ul>").addClass("cig-items-list-wrapper").html(`<ul class="cig-list-dropdown"><li>${items}</li></ul>`));
    listContainer.append(listItem);
  }
}

// Toggle visibility of the items list when clicking on the letter span
$(".cig-toggle-items").click(function () {
  const isActive = $(this).hasClass("cig-list--active");

  $(".cig-toggle-items").removeClass("cig-list--active"); 
  $(".cig-items-list-wrapper").hide();

  if (!isActive) {
    $(this).addClass("cig-list--active");
    $(this).next(".cig-items-list-wrapper").toggle();
  }
});

// Close the active dropdown when clicking outside
$(document).on("click", function (event) {
  const target = $(event.target);
  if (!target.closest('.cig-toggle-items, .cig-items-list-wrapper').length) {
    $(".cig-toggle-items").removeClass("cig-list--active");
    $(".cig-items-list-wrapper").hide();
  }
});

// Activate the first list by default
$(".cig-toggle-items:first").click();
