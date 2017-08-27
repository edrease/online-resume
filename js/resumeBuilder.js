var bio = {
    name: "Edrease Peshtaz",
    role: "Front End Web Developer",
    contact: {
        "mobile": "253-691-7366",
        "email": "edrease@gmail.com",
        "github": "github.com/edrease",
        "twitter": "@edrease222",
        "location": "Seattle"
    },
    welcomeMessage: "Welcome to my resume page!",
    skills: ["iOS", "front end web development"],
    bioPic: "images/edrease.jpeg",

    display: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $('#header').prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        $('#header').prepend(formattedName);

        //Contact Info
        var formattedMobile = HTMLmobile.replace("%data%", this.contact.mobile);
        $('#topContacts').append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contact.email);
        $('#topContacts').append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", this.contact.github);
        $('#topContacts').append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contact.twitter);
        $('#topContacts').append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contact.location);
        $('#topContacts').append(formattedLocation);

        $('#footerContacts').append(formattedMobile);
        $('#footerContacts').append(formattedEmail);
        $('#footerContacts').append(formattedGithub);
        $('#footerContacts').append(formattedTwitter);
        $('#footerContacts').append(formattedLocation);

        var formattedMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $('#header').append(formattedMessage);

        var pic = HTMLbioPic.replace("%data%", this.bioPic);
        $('#header').append(pic);

        var skillHeader = HTMLskillsStart;
        $('#header').append(skillHeader);

        this.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#header').append(formattedSkill);
        });
    }
};

var education = {
    schools: [{
            name: "University of Washington",
            location: "Seattle",
            degree: "Bachelor of Arts",
            majors: ["Marketing"],
            dates: "September 2004 - June 2008",
            url: "http://www.washington.edu"
        },
        {
            name: "Code Fellows",
            location: "Seattle",
            degree: "Certification",
            majors: ["iOS"],
            dates: "August 2015 - September 2015",
            url: "http://www.codefellows.org"
        }
    ],
    onlineCourses: [{
        name: "Front End Web Developer Nanodegree",
        school: "Udacity",
        dates: "August 2017 - September 2017",
        url: "http://www.udacity.com"
    }],

    display: function() {
        var schoolStart = HTMLschoolStart;
        $('#education').append(schoolStart);

        this.schools.forEach(function(school) {
            var formattedName = HTMLschoolName.replace('%data%', school.name);
            formattedName = formattedName.replace('#', school.url);
            var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            formattedName += formattedDegree;
            $('#education').append(formattedName);
            var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            $('#education').append(formattedLocation);
            var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
            $('#education').append(formattedDates);
            //$('#education').append(formattedDegree);
            var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors[0]);
            $('#education').append(formattedMajor);

        });

        var onlineClassHeader = HTMLonlineClasses;
        $('#education').append(onlineClassHeader);

        this.onlineCourses.forEach(function(onlineCourse) {
            var formattedSchoolName = HTMLonlineSchool.replace('%data%', onlineCourse.school);
            var formattedName = HTMLonlineTitle.replace('%data%', onlineCourse.name);
            formattedName = formattedName.replace('#', onlineCourse.url);
            formattedName += formattedSchoolName;
            $('#education').append(formattedName);
            var formattedDates = HTMLonlineDates.replace('%data%', onlineCourse.dates);
            $('#education').append(formattedDates);
            var courseURL = HTMLonlineURL.replace('%data%', onlineCourse.url);
            $('#education').append(courseURL);
        });
    }

};

var work = {
    jobs: [{
        employer: "Maikya Inc.",
        title: "iOS Developer",
        location: "Seattle",
        dates: "April 2016 - July 2016",
        description: "Developed native iOS for startup based on matching users' with similar interests geolocally."
    }],

    display: function() {

        var start = HTMLworkStart;
        $('#workExperience').append(start);
        this.jobs.forEach(function(job) {
            var employer = HTMLworkEmployer.replace('%data%', job.employer);
            var title = HTMLworkTitle.replace('%data%', job.title);
            employer += title;
            $('#workExperience').append(employer);
            var location = HTMLworkLocation.replace('%data%', job.location);
            $('#workExperience').append(location);
            var dates = HTMLworkDates.replace('%data%', job.dates);
            $('#workExperience').append(dates);
            var description = HTMLworkDescription.replace('%data%', job.description);
            $('#workExperience').append(description);
        });
    }
};

var projects = {
    projects: [{
            title: "Untitled Game",
            dates: "August 2016 - Present",
            description: "A spy themed text adventure built only using the native iOS UI framework, UIKit.",
            images: []
        },
        {
            title: "Sketch &amp; Guess",
            dates: "September 2015 - February 2016",
            description: "A local party game that mixes the classic games of 'telephone' and Pictionary.",
            images: []
        },
        {
            title: "Oblique Strategies",
            dates: "May 2015",
            description: "A digitalized deck of cards developed by artists used for breaking creative blocks.",
            images: []
        }
    ],

    display: function() {

        var projectStart = HTMLprojectStart;
        $('#projects').append(projectStart);
        this.projects.forEach(function(project) {
            var title = HTMLprojectTitle.replace('%data%', project.title);
            $('#projects').append(title);
            var dates = HTMLprojectDates.replace('%data%', project.dates);
            $('#projects').append(dates);
            var description = HTMLprojectDescription.replace('%data%', project.description);
            $('#projects').append(description);
            //TODO: add images
        });
    }
};

var mapString = googleMap;
$('#mapDiv').append(mapString);

bio.display();
projects.display();
education.display();
work.display();