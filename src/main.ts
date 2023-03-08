/// <reference types="@workadventure/iframe-api-typings" />
/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import * as FileSaver from 'file-saver';
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
//import * as ics from 'ics'
console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags);

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "Il est : " + time, []);
    });

    WA.room.area.onEnter('tts6.3Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts6.3Popup",
            "TTS 6.3 \n Présenté par \n Stéphane Maréchal \n CGI",
            [
                { label: "Pas de disponibilités", className: "primary", callback: () => {closePopup()}},
                { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts10Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts10Popup",
            "TTS 10 \n Présenté par \n Aklesso TCHAKPELE",
            [
            { label: "Pas de disponibilités", className: "primary", callback: () => {closePopup()}},
            { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts11Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts11Popup",
            "TTS 11 \n Présenté par \n François GERGAUD \n Andrew MUMFORD \n Pascal LAMBERT \n Cédric ROMERO \n Mathieu GOULIN",
            [{ label: "Rendez-vous avec \n Mathieu GOULIN \n Lundi 27 Mars \n 14h-15h", className: "primary", callback: () => { 
                createDownloadICSFile(
                    'Europe/Paris',
                    new Date('Mar 27, 2023 14:00'),
                    new Date('Mar 27, 2023 15:00'),
                    'TTS 11',
                    'Services dans le Cloud, introduction et notre utilisation à venir',
                    'Salon des TTS',
                    'DSI MGEN',
                    'Metavers'
                    );
                }},
            
                { label: "Rendez-vous avec \n Mathieu GOULIN \n Jeudi 30 Mars \n 10h-11h", className: "primary", callback: () => { 
                    createDownloadICSFile(
                        'Europe/Paris',
                        new Date('Mar 30, 2023 10:00'),
                        new Date('Mar 30, 2023 11:00'),
                        'TTS 11',
                        'Services dans le Cloud, introduction et notre utilisation à venir',
                        'Salon des TTS',
                        'DSI MGEN',
                        'Metavers'
                        );
                    }},
                    
                { label: "Fermer", className: "primary", callback: () => {closePopup()}}
                ]
        );
    });

    //trouver le chemin relatif des tilesets
    WA.room.area.onEnter('welcomeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("welcomePopup", 
        "Bienvenue au LAB Hours du LAB Inno",  [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onLeave('clock').subscribe(closePopup);
    WA.room.area.onLeave('tts6.3Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts10Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts11Zone').subscribe(closePopup);
    WA.room.area.onLeave('welcomeZone').subscribe(closePopup);

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function download(fileBody: string) {
    WA.nav.openTab('data:text/calendar;charset=utf-8,' + encodeURIComponent(fileBody));
}

function convertToICSDate(dateTime: Date): string {
    const year = dateTime.getFullYear().toString();
    const month = (dateTime.getMonth() + 1) < 10 ? "0" + (dateTime.getMonth() + 1).toString() : (dateTime.getMonth() + 1).toString();
    const day = dateTime.getDate() < 10 ? "0" + dateTime.getDate().toString() : dateTime.getDate().toString();
    const hours = dateTime.getHours() < 10 ? "0" + dateTime.getHours().toString() : dateTime.getHours().toString();
    const minutes = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes().toString() : dateTime.getMinutes().toString();

    return year + month + day + "T" + hours + minutes + "00";
}

function createDownloadICSFile(timezone: string, startTime: Date, endTime: Date,
                               title: string, description: string, venueName: string,
                               address: string, city: string) {
    const icsBody = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'PRODID:Calendar\n' +
        'CALSCALE:GREGORIAN\n' +
        'METHOD:PUBLISH\n' +
        'BEGIN:VTIMEZONE\n' +
        'TZID:' + timezone + '\n' +
        'END:VTIMEZONE\n' +
        'BEGIN:VEVENT\n' +
        'SUMMARY:' + title + '\n' +
        'UID:@Default\n' +
        'SEQUENCE:0\n' +
        'STATUS:CONFIRMED\n' +
        'TRANSP:TRANSPARENT\n' +
        'DTSTART;TZID=' + timezone + ':' + convertToICSDate(startTime) + '\n' +
        'DTEND;TZID=' + timezone + ':' + convertToICSDate(endTime)+ '\n' +
        'DTSTAMP:'+ convertToICSDate(new Date()) + '\n' +
        'LOCATION:' + venueName + '\\n' + address + ', ' + city + ', ' + '\n' +
        'DESCRIPTION:' + description + '\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR\n';

    download(icsBody);
    const blob = new Blob([icsBody], { type: 'text/calendar;charset=utf-8' });
    FileSaver.saveAs(blob, title + '.ics');
}

function closePopup() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};


