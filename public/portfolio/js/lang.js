var langs = ['en', 'fr'];
var current_lang_index = (getCookie("thomaspsl_cookie_lang") == undefined) ? 0 : getCookie("thomaspsl_cookie_lang");
let current_lang = langs[current_lang_index];

const dictionary = {
    // COMMON 

        // TITLE

        'leavePage': {
            'fr': 'Ne partez pas si vite ! 😭',
            'en': 'Don’t leave so fast! 😭'
        },

        // NAVIGATION

        'navHome': {
            'fr': 'Accueil',
            'en': 'Home'
        },
        'navProfile': {
            'fr': 'Profil et Compétences',
            'en': 'Profile and Skills'
        },
        'navEducation': {
            'fr': 'Éducation et Expériences',
            'en': 'Education and Experiences'
        },
        'navDownload': {
            'fr': 'Télécharger mon CV Français',
            'en': 'Download my English CV'
        },
        
        // FOOTER

        'footerHome': {
            'fr': 'Accueil',
            'en': 'Home'
        },
        'footerService': {
            'fr': 'Service',
            'en': 'Service'
        },
        'footerContact': {
            'fr': 'Contactez-moi',
            'en': 'Contact me'
        },
        'copyright': {
            'fr': '©2021 - PEISSEL Thomas | Tous droits réservés',
            'en': '©2021 - PEISSEL Thomas | All Rights Reserved'
        },


    // HOME

        // TOP

        'titleHome': {
            'fr': 'Portfolio | Accueil',
            'en': 'Portfolio | Home'
        },
        'titreHome': {
            'fr': "Salut ! Mon nom est </br><span class='name'>Thomas Peissel</span>",
            'en': "Hello! My name is </br><span class='name'>Thomas Peissel</span>"
        },
        'titrePerso': {
            'fr': "Je suis un étudiant en DUT d'Informatique",
            'en': "I'm a student in DUT of Computer Science"
        },
        'titreButton': {
            'fr': "Plus d'info",
            'en': "More info"
        },
        'titreWelcome': {
            'fr': "Bienvenue sur mon Portfol<span class='io'>io</span>",
            'en': "Welcome to my Portfol<span class='io'>io</span>"
        },

        // BOTTOM

        'titleMiscellaneous': {
            'fr': 'Centres d\'intérêts',
            'en': 'Miscellaneous'
        },
        'myhobbies': {
            'fr': 'Mes passe-temps',
            'en': 'My hobbies'
        },
        'dateBirth': {
            'fr': 'Date d\'anniversaire : 26 Février 2002 (19 ans)',
            'en': 'Date of birth: 26th February 2002 (19 years)'
        },
        'nationality': {
            'fr': 'Nationalité : Française',
            'en': 'Nationality: French'
        },
        'address': {
            'fr': 'Adresse : 38 chemin du Maquis 74000 ANNECY, France',
            'en': 'Address: 38 chemin du Maquis 74000 ANNECY, France'
        },
        'phone': {
            'fr': 'Téléphone : 07 82 34 73 69',
            'en': 'Phone #: +33(0)7 82 34 73 69'
        },
        'mail': {
            'fr': 'Email : thomas.peissel@etu.univ-smb.fr',
            'en': 'Email: thomas.peissel@etu.univ-smb.fr'
        },
        'miscellaneous': {
            'fr': 'Hors de mon temps de travail, j\'ai une vraie passion pour les jeux vidéo basés principalement<br> sur l\'univers créatif et imaginaire comme la licence Pokémon. Je tiens encore une grande affection<br> pour le football que j\'ai fait à haut niveau pendant plus de 14 ans, j\'en pratique d\'ailleurs<br> toujours de temps en temps à titre d\'amusement avec d\'anciens amis.',
            'en': 'Outside of my working time, I have a real passion for video games based mainly on the creative<br> and imaginary universe like the Pokémon license. I still have a great affection for football that I <br>did at high level for more than 14 years, I practice it always from time to time as fun with old <br>friends.'
        },


    // PROFILE

        // TOP

        'titleProfile': {
            'fr': 'Portfolio | Profil',
            'en': 'Portfolio | Skills'
        },
        'titleSkills': {
            'fr': 'Compétences et Langages',
            'en': 'Skills and Languages'
        },
        'myskills': {
            'fr': 'Mes compétences',
            'en': 'My skills'
        },

            // TABLE WEB

            'web': {
                'fr': 'Web',
                'en': 'Web'
            },
            'web0': {
                'fr': 'Html',
                'en': 'Html'
            },
            '1%0': {
                'fr': '95%',
                'en': '95%'
            },
            'web1': {
                'fr': 'Css/Js',
                'en': 'Css/Js'
            },
            '1%1': {
                'fr': '80%',
                'en': '80%'
            },
            'web2': {
                'fr': 'Php',
                'en': 'Php'
            },
            '1%2': {
                'fr': '70%',
                'en': '70%'
            },

            // TABLE SGBD

            'sgbd': {
                'fr': 'Database',
                'en': 'Base Donnée'
            },
            'sgbd0': {
                'fr': 'Oracle',
                'en': 'Oracle'
            },
            '2%0': {
                'fr': '90%',
                'en': '90%'
            },
            'sgbd1': {
                'fr': 'MySQL',
                'en': 'MySQL'
            },
            '2%1': {
                'fr': '70%',
                'en': '70%'
            },
            'sgbd2': {
                'fr': 'Postgre',
                'en': 'Postgre'
            },
            '2%2': {
                'fr': '85%',
                'en': '85%'
            },

            // TABLE LOGICIEL

            'log': {
                'fr': 'Locigiels',
                'en': 'Software'
            },
            'log0': {
                'fr': 'C',
                'en': 'C'
            },
            '3%0': {
                'fr': '70%',
                'en': '70%'
            },
            'log1': {
                'fr': 'C++',
                'en': 'C++'
            },
            '3%1': {
                'fr': '60%',
                'en': '60%'
            },
            'log2': {
                'fr': 'C#',
                'en': 'C#'
            },
            '3%2': {
                'fr': '85%',
                'en': '85%'
            },

            // TABLE LANGUE

            'langue': {
                'fr': 'Langues',
                'en': 'Languages'
            },
            'langue0': {
                'fr': 'Français',
                'en': 'French'
            },
            'lvllangue0': {
                'fr': 'Natif',
                'en': 'Fluent'
            },
            'langue1': {
                'fr': 'Anglais',
                'en': 'English'
            },
            'lvllangue1': {
                'fr': 'Niveau B1',
                'en': 'Level B1'
            },
            'langue2': {
                'fr': 'Espagnol',
                'en': 'Spanish'
            },
            'lvllangue2': {
                'fr': 'Niveau B2',
                'en': 'Level B2'
            },

        // BOTTOM

        'objective': {
            'fr': 'Objectif de Travail',
            'en': 'Job Objective'
        },
        'myobj': {
            'fr': 'Mon objectif',
            'en': 'My objective'
        },
        'textobjective': {
            'fr': 'À la recherche d\'un stage stimulant dans une organisation pour utiliser mes compétences techniques de développement web et de base de données, ainsi que pour améliorer mes connaissances sur les tendances nouvelles et émergentes dans le secteur informatique.',
            'en': 'Looking for an exciting internship in an organization to use my technical skills as a web development and database, as well as to improve my knowledge of new and emerging trends in the IT sector.'
        },

    // EDUCATION

        // TOP

        'titleEducation': {
            'fr': 'Portfolio | Éducation',
            'en': 'Portfolio | Education'
        },
        'titleQualification': {
            'fr': 'Études',
            'en': 'Educations'
        },
        'mycareer': {
            'fr': 'Mon parcours',
            'en': 'My career'
        },

        'mygrad': {
            'fr': 'Études Supérieures',
            'en': 'Graduate studies'
        },
        'diplomaDut': {
            'fr': '2022 - DUT Informatique (en préparation)',
            'en': '2022 - DUT Informatique (in preparation)'
        },
        'cityDut': {
            'fr': 'Université d\'Annecy - Annecy-le-Vieux, France',
            'en': 'University of Annecy - Annecy-le-Vieux, France'
        },

        'mybac': {
            'fr': 'Baccalauréat',
            'en': 'Baccalaureate'
        },
        'diplomaCollege': {
            'fr': '2020 - Baccalauréat spécialité SSI',
            'en': '2020 - French Baccalaureate SSI'
        },
        'list1': {
            'fr': 'Diplôme choix Scientifique et Science de l\'Ingénieur',
            'en': 'High School diploma specialized in science and computer engineering'
        },
        'list2': {
            'fr': 'Option informatique et science du numériqued',
            'en': 'Computer and digital systems option'
        },
        'cityCollege': {
            'fr': 'Lycée Monge - Chambéry, France',
            'en': 'Monge High School - Chambéry, France'
        },

        'myref': {
            'fr': 'Références',
            'en': 'References'
        },
        'prof1': {
            'fr': 'Stephanie BOUCHON :',
            'en': 'Stephanie BOUCHON:'
        },
        'infoprof1-1': {
            'fr': 'Professeur d’anglais (IUT Annecy)',
            'en': 'English Teacher (IUT Annecy)'
        },
        'infoprof1-2': {
            'fr': 'stephanie.bouchon@univ-smb.fr',
            'en': 'stephanie.bouchon@univ-smb.fr'
        },
        'prof2': {
            'fr': 'Luc DAMAS :',
            'en': 'Luc DAMAS:'
        },
        'infoprof2-1': {
            'fr': 'Enseignant chercheur (IUT Annecy)',
            'en': 'Associate Professor (IUT Annecy)'
        },
        'infoprof2-2': {
            'fr': 'luc.damas@univ-smb.fr',
            'en': 'luc.damas@univ-smb.fr'
        },

        // BOTTOM

        'titleWork': {
            'fr': 'Expériences de travail',
            'en': 'Work Experiences'
        },
        'subExperience': {
            'fr': 'Mes expériences',
            'en': 'My experiences'
        },
        'futur': {
            'fr': 'FUTUR',
            'en': 'FUTURE'
        },

            // 5EM

            'job5': {
                'fr': 'INTÉRIMAIRE INFORMATICIEN',
                'en': 'ACTING INFORMATICIAN'
            },
            'date5': {
                'fr': 'Juillet 2019 - Août 2019 | Yvroud (Aiton 73)',
                'en': 'July 2019 - August 2019 | Yvroud (Aiton 73)'
            },
            'info5-1': {
                'fr': 'Chargé de la dématérialisation de fiche de mise en service',
                'en': 'Responsible for the dematerialisation of the commissioning form'
            },
            'info5-2': {
                'fr': 'Application et logiciel utilisés : Kizeo, Excel',
                'en': 'Application and software used: Kizeo, Excel'
            },

            // 4EM

            'job4': {
                'fr': 'EMPLOYÉ POLYVALENT',
                'en': 'MULTI-PURPOSE EMPLOYEE'
            },
            'date4': {
                'fr': 'Août 2020 - Août 2020 | Super U (Francin 73)',
                'en': 'August 2020 - August 2020 | Super U (Francin 73)'
            },
            'info4-1': {
                'fr': 'Travail à mi-temps en mise en rayon et en boucherie',
                'en': 'Part-time work in shelf stocker and butchery'
            },
            'info4-2': {
                'fr': 'Utilisation de logiciels professionnels : gestion article périmé, ERP',
                'en': 'Use of professional software: obsolete item management, ERP'
            },

            // 3EM

            'job3': {
                'fr': 'EMPLOYÉ POLYVALENT',
                'en': 'MULTI-PURPOSE EMPLOYEE'
            },
            'date3': {
                'fr': 'Septembre 2020 - à ce jour | Carrefour City (Annecy)',
                'en': 'September 2020 - Today | Carrefour City (Annecy)'
            },
            'info3-1': {
                'fr': 'Poste occupé le dimanche : caissier/mise en rayon',
                'en': 'Sunday position: cashier/shelf stocker'
            },
            'info3-2': {
                'fr': 'Utilisation de logiciels professionnels : gestion colis, caisse, ERP',
                'en': 'Use of professional software: parcel management, cash register, ERP'
            },

            // 4EM

            'job2': {
                'fr': 'DÉVELOPPEUR - CHEF DE PROJET',
                'en': 'DEVELOPER - PROJECT LEADER'
            },
            'date2': {
                'fr': 'Mars 2021 - à ce jour | IUT Annecy (Annecy-le-Vieux)',
                'en': 'March 2021 - Today | IUT Annecy (Annecy-le-Vieux)'
            },
            'info2-1': {
                'fr': 'Projet tutoré pour un client : M. THIEUX Jean-François',
                'en': 'Mentored Project for a client: M. THIEUX Jean-François'
            },
            'info2-2': {
                'fr': 'Web design / Front-end : <a href="http://www.weiha.online" target="_blank">www.weiha.online</a>',
                'en': 'Web design / Front-end: <a href="http://www.weiha.online" target="_blank">www.weiha.online</a>'
            },

            // 5EM

            'job1': {
                'fr': 'Prochainement',
                'en': 'Soon'
            },
            'date1': {
                'fr': '',
                'en': ''
            },
            'info1-1': {
                'fr': '',
                'en': ''
            },
            'info1-2': {
                'fr': '',
                'en': ''
            },
};