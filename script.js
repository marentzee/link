
/* =================================
   MARENTZE - PERSONAL SETTINGS
================================= */

// OVDE MENJAŠ SVOJE PODATKE

const settings = {

    // Ime profila
    name: "MARENTZE",

    // Tvoj email
    email: "tvojmail@gmail.com",

    // Najnoviji YouTube video
    latestVideo: "https://www.youtube.com/watch?v=VIDEO_ID",

    // Slika najnovijeg videa
    videoThumbnail: "thumbnail.jpg",

    // DRUŠTVENE MREŽE
    links: [

        {
            name: "YouTube",
            icon: "▶",
            url: "https://youtube.com/@TVOJ_KANAL"
        },

        {
            name: "TikTok",
            icon: "♪",
            url: "https://tiktok.com/@TVOJ_PROFIL"
        },

        {
            name: "Discord",
            icon: "💬",
            url: "https://discord.gg/TVOJ_INVITE"
        },

        {
            name: "Instagram",
            icon: "📸",
            url: "https://instagram.com/TVOJ_PROFIL"
        }

    ]

};


/* =================================
   PRIKAZ LINKOVA
================================= */

const socialContainer = document.getElementById("social-links");

settings.links.forEach(link => {

    const button = document.createElement("a");

    button.className = "social-button";

    button.href = link.url;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

    button.innerHTML = `
        <div class="social-left">
            <div class="social-icon">${link.icon}</div>
            <span>${link.name}</span>
        </div>

        <span class="arrow">↗</span>
    `;

    socialContainer.appendChild(button);

});


/* =================================
   YOUTUBE VIDEO
================================= */

const video = document.getElementById("latest-video");

video.href = settings.latestVideo;

document.getElementById("video-thumbnail").src =
    settings.videoThumbnail;


/* =================================
   EMAIL
================================= */

document.getElementById("email-link").href =
    "mailto:" + settings.email;

document.getElementById("email-text").textContent =
    settings.email;

