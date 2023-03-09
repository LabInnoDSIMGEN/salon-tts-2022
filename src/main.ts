/// <reference types="@workadventure/iframe-api-typings" />
/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import * as FileSaver from 'file-saver';
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

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
            "TTS 11 \n Présenté par \n François GERGAUD \n Andrew MUMFORD \n Pascal LAMBERT \n Cédric ROMERO \n Mathieu GOULIN\n" +
            "Sélectionnez un créneau pour un rendez-vous avec l'intérvenant disponible : ",
            [{ label: "Mathieu GOULIN \n Lundi 27 Mars \n 14h-15h", className: "primary", callback: () => {
                createDownloadICSFile(
                    'Romance Standard Time',
                    new Date('Mar 27, 2023 14:00'),
                    new Date('Mar 27, 2023 15:00'),
                    'TTS 11',
                    'Services dans le Cloud, introduction et notre utilisation à venir',
                    'Salon des TTS',
                    ' DSI MGEN',
                    'Metavers'
                    );
                }},
            
                { label: "Mathieu GOULIN \n Jeudi 30 Mars \n 10h-11h", className: "primary", callback: () => {
                    createDownloadICSFile(
                        'Romance Standard Time',
                        new Date('Mar 30, 2023 10:00'),
                        new Date('Mar 30, 2023 11:00'),
                        'TTS 11',
                        'Services dans le Cloud, introduction et notre utilisation à venir',
                        'Salon des TTS',
                        ' DSI MGEN',
                        'Metavers'
                        );
                    }},
                    
                { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts12Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts12Popup",
            "TTS 12 \n Présenté par \n Roxanne SPIES \n" +
            "Sélectionnez un créneau pour un rendez-vous avec l'intérvenant disponible : ",
            [{ label: "Roxanne SPIES \n Mercredi 29 Mars \n 10h-11h", className: "primary", callback: () => {
                createDownloadICSFile(
                    'Romance Standard Time',
                    new Date('Mar 29, 2023 10:00'),
                    new Date('Mar 29, 2023 11:00'),
                    'TTS 12',
                    "Design System et DesignOps, quand le Design s'opérationnalise et s'adpte au mode Agile",
                    'Salon des TTS',
                    ' DSI MGEN',
                    'Metavers'
                    );
                }},

                { label: "Roxanne SPIES \n Jeudi 30 Mars \n 16h30-17h30", className: "primary", callback: () => {
                    createDownloadICSFile(
                        'Romance Standard Time',
                        new Date('Mar 30, 2023 16:30'),
                        new Date('Mar 30, 2023 17:30'),
                        'TTS 12',
                        "Design System et DesignOps, quand le Design s'opérationnalise et s'adpte au mode Agile",
                        'Salon des TTS',
                        ' DSI MGEN',
                        'Metavers'
                        );
                    }},
                    
                { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts13Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
        "tts13Popup",
        "TTS 13 \n Présenté par \n Cyril Carrillat \n Marie Cordenod \n" +
        "Sélectionnez un créneau pour un rendez-vous avec l'intérvenant disponible :",
        [{
            label: "Cyril Carrillat \n Lundi 27 Mars \n14h-15h",
            className: "primary",
            callback: () => {
                createDownloadICSFile(
                    'Romance Standard Time',
                    new Date('Mar 27, 2023 14:00'),
                    new Date('Mar 27, 2023 15:00'),
                    'TTS 13',
                    "Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?",
                    'Salon des TTS',
                    'DSI MGEN',
                    'Metavers'
                );
            }
        },

            {
                label: "Cyril Carrillat\nMercredi 29 Mars \n14h-15h",
                className: "primary",
                callback: () => {
                    createDownloadICSFile(
                        'Romance Standard Time',
                        new Date('Mar 29, 2023 14:00'),
                        new Date('Mar 29, 2023 15:00'),
                        'TTS 13',
                        "Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?",
                        'Salon des TTS',
                        'DSI MGEN',
                        'Metavers'
                    );
                }
            },
            {
                label: "Cyril Carrillat\nMercredi 29 Mars \n14h-15h",
                className: "primary",
                callback: () => {
                    createDownloadICSFile(
                        'Romance Standard Time',
                        new Date('Mar 29, 2023 14:00'),
                        new Date('Mar 29, 2023 15:00'),
                        'TTS 13',
                        "Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?",
                        'Salon des TTS',
                        'DSI MGEN',
                        'Metavers'
                    );
                }
            },
            {
                label: "Cyril Carrillat\nMercredi 30 Mars \n10h-11h",
                className: "primary",
                callback: () => {
                    createDownloadICSFile(
                        'Romance Standard Time',
                        new Date('Mar 30, 2023 10:00'),
                        new Date('Mar 30, 2023 11:00'),
                        'TTS 13',
                        "Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?",
                        'Salon des TTS',
                        'DSI MGEN',
                        'Metavers'
                    );
                }
            },

            { label:"Cyril Carrillat\n" +
                    "Mercredi 31 Mars \n 10h-11h", className: "primary", callback: () => {
                    createDownloadICSFile(
                        'Romance Standard Time',
                        new Date('Mar 31, 2023 10:00'),
                        new Date('Mar 31, 2023 11:00'),
                        'TTS 13',
                        "Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?",
                        'Salon des TTS',
                        ' DSI MGEN',
                        'Metavers'
                    );
                }},
            { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts14Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts14Popup",
            "TTS 14 : \n Présenté par \n Quentin Montcharmont \n" +
            "Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible :",
            [
                { label: "Pas de disponibilités", className: "primary", callback: () => {closePopup()}},
                { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts15Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts15Popup",
            "TTS 15 : \n"
            + "\n Présenté par \n Ahmed FATHALLAH"
            + "\n Andrada COVACI"
            + "\n Sébastien SAURON"
            + "\n Jean-Baptiste RAINSART \n" +
            "Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible :",
            [
                { label: "Pas de disponibilités", className: "primary", callback: () => {closePopup()}},
                { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts16Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts16Popup",
            "TTS 16 : \n "
            + "\n Présenté par \n Carlos GONCALVES"
            + "\n Hakim RANDRIANARIVO"
            + "\n Céline LECLEIRE"
            + "\n Romain BOURGON"
            + "\n Steven YVEN \n"
            + "Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible : \n",
            [
                { label: "Pas de disponibilités", className: "primary", callback: () => {closePopup()}},
                { label: "Fermer", className: "primary", callback: () => {closePopup()}}]
        );
    });

    WA.room.area.onEnter('tts17.1Zone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "tts17.1Popup",
            "TTS 17.1 :\n"
            + " Présenté par \n Alizée SEGARD"
            + "\n Alix D'ARCHIMBAUD"
            + "\n Virginie FEMERY \n"
            + "Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible :",
            [
                {
                    label: "Carlos GONCALVES\nMercredi 29 Mars \n14h-15h",
                    className: "primary",
                    callback: () => {
                        createDownloadICSFile(
                            'Romance Standard Time',
                            new Date('Mar 29, 2023 14:00'),
                            new Date('Mar 29, 2023 15:00'),
                            'TTS 17.1',
                            "La Data Science au service des métiers et au cœur de la transformation MGEN",
                            'Salon des TTS',
                            'DSI MGEN',
                            'Metavers'
                        );
                    }
                },
                {
                    label: "Carlos GONCALVES\nMercredi 31 Mars \n11h-12h",
                    className: "primary",
                    callback: () => {
                        createDownloadICSFile(
                            'Romance Standard Time',
                            new Date('Mar 31, 2023 11:00'),
                            new Date('Mar 31, 2023 12:00'),
                            'TTS 17.1',
                            "La Data Science au service des métiers et au cœur de la transformation MGEN",
                            'Salon des TTS',
                            'DSI MGEN',
                            'Metavers'
                        );
                    }
                },
                {
                    label: "Romain BOURGON\nLundi 27 Mars \n14h-15h",
                    className: "primary",
                    callback: () => {
                        createDownloadICSFile(
                            'Romance Standard Time',
                            new Date('Mar 31, 2023 14:00'),
                            new Date('Mar 31, 2023 15:00'),
                            'TTS 17.1',
                            "La Data Science au service des métiers et au cœur de la transformation MGEN",
                            'Salon des TTS',
                            'DSI MGEN',
                            'Metavers'
                        );
                    }
                },
                {
                    label: "Romain BOURGON\nLundi 29 Mars \n14h-15h",
                    className: "primary",
                    callback: () => {
                        createDownloadICSFile(
                            'Romance Standard Time',
                            new Date('Mar 29, 2023 14:00'),
                            new Date('Mar 29, 2023 15:00'),
                            'TTS 17.1',
                            "La Data Science au service des métiers et au cœur de la transformation MGEN",
                            'Salon des TTS',
                            'DSI MGEN',
                            'Metavers'
                        );
                    }
                },
                {
                    label: "Romain BOURGON\nLundi 31 Mars \n11h-12h",
                    className: "primary",
                    callback: () => {
                        createDownloadICSFile(
                            'Romance Standard Time',
                            new Date('Mar 31, 2023 11:00'),
                            new Date('Mar 31, 2023 12:00'),
                            'TTS 17.1',
                            "La Data Science au service des métiers et au cœur de la transformation MGEN",
                            'Salon des TTS',
                            'DSI MGEN',
                            'Metavers'
                        );
                    }
                },
                {
                    label: "Steven YVEN\nLundi 29 Mars \n14h-15h",
                    className: "primary",
                    callback: () => {
                        createDownloadICSFile(
                            'Romance Standard Time',
                            new Date('Mar 29, 2023 14:00'),
                            new Date('Mar 29, 2023 15:00'),
                            'TTS 17.1',
                            "La Data Science au service des métiers et au cœur de la transformation MGEN",
                            'Salon des TTS',
                            'DSI MGEN',
                            'Metavers'
                        );
                    }
                },
                {
                    label: "Steven YVEN\nLundi 31 Mars \n11h-12h",
                    className: "primary",
                    callback: () => {
                        createDownloadICSFile(
                            'Romance Standard Time',
                            new Date('Mar 31, 2023 11:00'),
                            new Date('Mar 31, 2023 12:00'),
                            'TTS 17.1',
                            "La Data Science au service des métiers et au cœur de la transformation MGEN",
                            'Salon des TTS',
                            'DSI MGEN',
                            'Metavers'
                        );
                    }
                },
            ]
        );
    });

                WA.room.area.onEnter('officeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup(
            "officePopup", 
            "Venez ici pour échanger avec l'équipe du Lab Inno",  
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    //trouver le chemin relatif des tilesets
    WA.room.area.onEnter('librarySignTTS1').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS1",
        "Ressources de TTS N°1 : L'automatisation robotisée des process (RPA) \n " +
            "Intervenants : Rami TORKHANI \n " +
            "(SAO) \n " +
            "Aurélien GRANDJEAN \n " +
            "(AOC)",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    //trouver le chemin relatif des tilesets
    WA.room.area.onEnter('librarySignTTS2').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS2",
            "Ressources de TTS N°2 : Conteneurisation, un des enjeux des process devsecops  \n " +
            "Intervenants : Frédéric ROULET \n " +
            " Yannick MULLER \n " +
            "(société REDHAT) \n " +
            "Cédric ROMéRO \n" +
            "Philippe GAVOIS",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('librarySignTTS3').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS3",
            "Ressources de TTS N°3 : Accessibilité & Handicap  \n " +
            "Intervenants : Marielle MORIZOT \n " +
            "Mathieu FROIDURE \n " +
            "(Président de la société URBILOG)\n ",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('librarySignTTS4').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS4",
            "Ressources de TTS N°4 : Pratique centrées utilisateurs : l'UX research  \n" +
            "Intervenants : Roxanne SPIES \n" +
            "(Prestataire au sein du LAB et Experte User Research) \n" +
            " France WANG \n" +
            "(CPO de la plateforme Tandemz)\n" +
            "Alice TAPIA \n" +
            "(UX/UI designer)",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('librarySignTTS5').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS5",
            "Ressources de TTS N°5 : Outillage Ansible, AWX et Maestro\n" +
            "Intervenants : Cédric Romero \n" +
            "(TMO) \n" +
            "Emmanuel Muller \n" +
            "(TMO)\n" +
            "Dominique Parisot \n" +
            "(TMO)\n" +
            "Mathieu Goulin \n" +
            "(TMO)\n" +
            "Anas Haddad \n" +
            "(FST) \n" +
            "Jean-François Javel \n" +
            "(DSA)",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('librarySignTTS6.1').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS6.1",
            "Ressources de TTS N°6.1 : Intelligence artificielle - Vulgarisation et demystification\n" +
            "Intervenants : Isabelle DONATO \n" +
            "(Directrice Innovation FabLab INETUM)\n" +
            "Jean-Paul MULLER \n" +
            "(Global Practice Manager INETUM)\n",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });


    WA.room.area.onEnter('librarySignTTS7').subscribe(() => {
    currentPopup = WA.ui.openPopup("librarySignPopupTTS7",
        "Ressources de TTS N°7 : L'automatisation dans les projets applicatifs, accelerateur devsecops d'aujourdh'ui et de demain\n" +
        "Intervenants :Rémi RAPENNE \n" +
        "Frédéric ROULET\n" +
        "Ludovic PIOT \n",
        [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
});

    WA.room.area.onEnter('librarySignTTS8').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS8",
            "Ressources de TTS N°8 : L'écosystéme des applications mobile MGEN\n" +
            "Intervenants : Inès ROUANET\n" +
            "(Digital Factory)\n" +
            "Agnès CHATELLE \n" +
            "(Direction Digitale)\n",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('librarySignTTS6.2').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS6.2",
            "Ressources de TTS N°6.2 : L'écosystéme des applications mobile MGEN\n" +
            "Intervenants : Amine BENHENNI\n" +
            "(expert stratégie et exécution DATA & IA)\n" +
            "Christophe GAZEAU \n" +
            "(expert Digital de AKORDIA)\n" +
            "Christophe GAZEAU \n" +
            "(expert stratégie et exécution DATA & IA)\n" +
            "Marième LOUGADI \n" +
            "Franck GRANDMAIRE \n" +
            "(Equipe industrialisation de QTS (Qualité Transformation Sécurité))" ,
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('librarySignTTS9').subscribe(() => {
        currentPopup = WA.ui.openPopup("librarySignPopupTTS9",
            "Ressources de TTS N°9 : Les cas d'usage de la Blockchain\n" +
            "Intervenants : Théotime PINON\n" +
            "(Cabinet de conseil OCTO)\n",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('welcomeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("welcomePopup",
            "Bienvenue au LAB Hours du LAB Inno \n" +
            "\n" +
            "\n" +
            "La zone rouge permet d'acceder aux Replays d'un TTS \n" +
            "La zone jaune permet d'acceder a l'article d'un TTS \n" +
            "La zone verte permet d'acceder au Sharepoint contenant le document du TTS " +
            "\n" +
            "\n" +
            "Vous pouvez également partager votre humeur en appuyant sur les touches 1 à 6 \n" +
            "de votre clavier",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('welcomeZone2').subscribe(() => {
        currentPopup = WA.ui.openPopup("welcomePopup2",
            "Bienvenue au LAB Hours du LAB Inno \n" +
            "\n" +
            "\n" +
            "La zone rouge permet d'acceder aux Replays d'un TTS \n" +
            "La zone jaune permet d'acceder a l'article d'un TTS \n" +
            "La zone verte permet d'acceder au Sharepoint contenant le document du TTS " +
            "\n" +
            "\n" +
            "Vous pouvez également partager votre humeur en appuyant sur les touches 1 à 6 \n" +
            "de votre clavier",
            [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('libraryIndication').subscribe(() => {
        currentPopup = WA.ui.openPopup("libraryIndicationPopup",
            "Bienvenue dans les archives des TTS 2021",  [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onEnter('officeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("officeIndicationPopup",
            "Suivez ce chemin jusqu'au bout et prenez en haut \n pour atteindre nos bureaux ",  [{ label: "Fermer", className: "primary", callback: () => {closePopup()}}]);
    });

    WA.room.area.onLeave('clock').subscribe(closePopup);
    WA.room.area.onLeave('tts6.3Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts10Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts11Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts12Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts13Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts14Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts15Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts16Zone').subscribe(closePopup);
    WA.room.area.onLeave('tts17.1Zone').subscribe(closePopup);
    WA.room.area.onLeave('officeIndication').subscribe(closePopup);



    WA.room.area.onLeave('officeZone').subscribe(closePopup);
    WA.room.area.onLeave('welcomeZone').subscribe(closePopup);
    WA.room.area.onLeave('welcomeZone2').subscribe(closePopup);
    WA.room.area.onLeave('libraryIndication').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS1').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS2').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS3').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS4').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS5').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS6.1').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS7').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS6.2').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS8').subscribe(closePopup);
    WA.room.area.onLeave('librarySignTTS9').subscribe(closePopup);

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
    const icsBody = 
        'BEGIN:VCALENDAR\n' +
        'X-WR-TIMEZONE:Romance Standard Time\n' +
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
        'LOCATION:' + venueName + '\\n' + " " + address + ', ' + " " + city + ', ' + '\n' +
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






