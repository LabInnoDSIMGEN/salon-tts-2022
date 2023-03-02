/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "Il est : " + time, []);
    })

    WA.room.area.onEnter('calendrier').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();

        const icsData = `
        BEGIN:VCALENDAR
        VERSION:2.0
        PRODID:-//WorkAdventure//Calendar//EN
        BEGIN:VEVENT
        UID:${Math.random().toString(36).substring(2)}
        DTSTAMP:${today.toISOString().replace(/-|:|\.\d+/g,"")}
        DTSTART:${today.toISOString().replace(/-|:|\.\d+/g,"")}Z
        DTEND:${today.toISOString().replace(/-|:|\.\d+/g,"")}Z
        SUMMARY:It's ${time}
        END:VEVENT
        END:VCALENDAR
                `;
        
                // Display modal window
        const modalContent = `
        <p>Cliquez sur le bouton ci-dessous pour télécharger le fichier ICS :</p>
        <button id="downloadButton">Télécharger le fichier ICS</button>
    `;
    const modalOptions = { closeOnClickOutside: true };
    const modal = WA.ui.openModal("downloadModal", modalContent, modalOptions);

    // Download ICS file when button is clicked
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", () => {
        const filename = "my-calendar-event.ics";
        downloadICSFile(icsData, filename);
        modal.close();
    });
})

//trouver le chemin relatif des tilesets
//currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue au salon TTS, dirigez-vous avec des panneaux", []);


   // currentPopup = WA.ui.openPopup("welcomePopup", `<img src="" alt="Welcome image">`, []);

    WA.room.area.onLeave('clock').subscribe(closePopup)
    WA.room.onLeaveLayer('welcomeZone').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function downloadICSFile(icsData: string, filename: string) {
    const blob = new Blob([icsData], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
