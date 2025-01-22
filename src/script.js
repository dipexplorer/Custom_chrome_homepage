// Toggle the apps menu visibility on clicking the apps icon
function toggleApps() {
  const appsContainer = document.getElementById("appsContainer");
  appsContainer.style.display =
    appsContainer.style.display === "block" ? "none" : "block";
}

// Toggle the profile menu visibility on clicking the profile icon
function toggleProfileMenu() {
  const profileMenu = document.getElementById("profileMenu");
  profileMenu.style.display =
    profileMenu.style.display === "block" ? "none" : "block";
}

// Close the profile and apps menu if clicked outside
window.addEventListener("click", function (event) {
  const appsContainer = document.getElementById("appsContainer");
  const profileMenu = document.getElementById("profileMenu");
  const appsIcon = document.querySelector(".apps-icon");
  const profileIcon = document.querySelector(".profile-icon");

  // Check if the elements are found in the DOM
  if (appsIcon && appsContainer) {
    // Check if the click is outside the apps menu and apps icon
    if (
      !appsIcon.contains(event.target) &&
      !appsContainer.contains(event.target)
    ) {
      appsContainer.style.display = "none";
    }
  }

  if (profileIcon && profileMenu) {
    // Check if the click is outside the profile menu and profile icon
    if (
      !profileIcon.contains(event.target) &&
      !profileMenu.contains(event.target)
    ) {
      profileMenu.style.display = "none";
    }
  }
});

// Open Image Search modal
function openImageSearch() {
  document.getElementById("dialog").classList.remove("hidden");
}

//QUICK LINKSSSSSSSSSSSSS
// Close button functionality for Image Search modal
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
  document.getElementById("dialog").classList.add("hidden");
});

// Event listener for adding links
const quickLinks = document.querySelector(".quick_link");
const links = [
  {
    icon: "https://img.freepik.com/free-psd/instagram-application-logo_23-2151544100.jpg?t=st=1737539613~exp=1737543213~hmac=12a2005a95c99ded6710d579ea1748d0a84f607eeae96aec360fad3b08c41489&w=740",
    url: "https://www.instagram.com/",
    name: "instagram",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    url: "https://www.linkedin.com/feed/",
    name: "linkedin",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/25/25657.png ",
    url: "https://github.com/dipexplorer",
    name: "github",
  },
  {
    icon: "https://www.codewithharry.com/img/logo-blue.png",
    url: "https://www.codewithharry.com/blogpost/c-cheatsheet/",
    name: "codewithharry",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4945/4945914.png",
    url: "https://discord.com/channels/538672958110171137/1068497938533326869",
    name: "discord",
  },
  {
    icon: "https://ajay-dhangar.github.io/algo/logo/logo.png",
    url: "https://ajay-dhangar.github.io/algo/#google_vignette",
    name: "Algorithms",
  },
];

links.forEach((link) => {
  const div = document.createElement("div");
  div.innerHTML = `<a href="${link.url}" target="_blank" class="flex flex-col items-center">
      <img class="h-8 w-8" src="${link.icon}" alt="${link.name}" title="${link.name}" class="quick_link_icon" />
      <span class="text-sm font-medium">${link.name}</span>
    </a>`;
  quickLinks.appendChild(div);
});

const brutalRoasts = [
  "Keep dreaming — even your nightmares work harder than you.",
  "You’re not stuck; you’re parked, engine off, watching your life roll by.",
  "The only thing you’ve been consistent at is finding new ways to do nothing.",
  "Your goals are begging for mercy while your laziness takes another nap.",
  "Motivation doesn’t knock — it kicks. You just keep ignoring the door.",
  "Congratulations! You’ve perfected the art of almost starting.",
  "You say you’re trying? Trying to what — avoid progress?",
  "Failure isn’t your enemy; inaction is your lifelong best friend.",
  "If you put half the effort into your goals as you do into excuses, you’d be unstoppable.",
  "The clock is ticking, but you’re out here acting like you have all the time in the universe.",
];

// Generate random brutal roast
const unfuck = document.querySelector("#unfuck");

function generateBrutalRoast() {
  const randomIndex = Math.floor(Math.random() * brutalRoasts.length);
  const brutalRoast = brutalRoasts[randomIndex];
  unfuck.innerText = brutalRoast;
  // console.log(brutalRoast);
}

setInterval(generateBrutalRoast, 7000);
function updateEndYearTimer() {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
  const timeLeft = endOfYear - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById(
    "end-year-timer"
  ).innerHTML = `<span class="text-purple-500 glow font-extrabold text-4xl">${days}d</span> 
     <span class="text-orange-500 glow font-extrabold text-4xl">${hours}h</span> 
     <span class="text-pink-700 glow font-extrabold text-4xl">${minutes}m</span> 
     <span class="text-teal-700 glow font-extrabold text-4xl">${seconds}s</span> left to waste another year.`;
}

setInterval(updateEndYearTimer, 1000);

// Live counter for time since birth
function updateAgeCounter() {
  const birthDate = new Date(2003, 4, 25); // 25 May 2003 (Month is 0-indexed)
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--; // Adjust year if current date is before the birth date this year
    months += 12;
  }

  if (days < 0) {
    const lastMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += lastMonthDays;
    months--;
  }

  document.getElementById("age-counter").innerHTML = `
    <div class="text-center text-xl">
      <span class="text-red-700 font-bold">${years}</span> sall, 
      <span class="text-yellow-500 font-bold">${months}</span> manihe, aur 
      <span class="text-green-700 font-bold">${days}</span> din.
      <p class="text-blue-900 mt-2" style="font-family: Shadows Into Light, serif; font-weight: 700; font-style: normal;">se jinda ho-"Aur who bhi bapp ke paiso pe!" 😏</p>
    </div>`;
}

setInterval(updateAgeCounter, 1000); // Updates every second
