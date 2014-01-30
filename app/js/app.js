var app = app || {};

$(function() {
    app.projects = [
        {
            "name": "Roguelike",
            "url": "http://whostolemyhat.github.io/roguelike/",
            "desc": "<p>A simple roguelike game made for Dec's <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p>",
            
            "tags": ["game", "javascript", "phaser"],
            "date": "2013-12-30",
            "published": true
        },
        {
            "name": "Particle system",
            "url": "http://whostolemyhat.github.io/particle-system/",
            "desc": "<p>An HTML5 canvas particle system demo.</p>",
            "img": "/static/images/projects/particles.png",
            "tags": ["javascript"],
            "date": "2013-10-24",
            "published": true
        },
        {
            "name": "Tessellate",
            "url": "/games/tessellate/",
            "desc": "<p>Tessellate - a tetris clone written in Javascript. My April entry for <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p>",
            "img": "/static/images/projects/tessellate.png",
            "tags": ["game", "javascript"],
            "date": "2013-04-30",
            "published": true
        },
        {
            "name": "Tilemap generator",
            "url": "http://whostolemyhat.github.io/level-generator",
            "desc": "<p>An implementation of <a href=\"http://gamedevelopment.tutsplus.com/tutorials/cave-levels-cellular-automata--gamedev-9664/\" target=\"_blank\">Gamedevtut's cave generator</a> I'm using in a game. Creates a random tilemap and exports as JSON.</p>",
            
            "tags": ["javascript"],
            "date": "2013-08-04",
            "published": true
        },
        {
            "name": "Copycat",
            "url": "/games/copycat/",
            "desc": "<p>A memory game - repeat the sequence! February entry for <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p><p><a href=\"/blether/1gam-february-copycat-game\" title=\"Writeup of Copycat project\">Writeup of the Copycat project</a> on my blog.</p>",
            "img": "/static/images/projects/copycat.png",
            "tags": ["game", "javascript"],
            "date": "2013-02-28",
            "published": true
        },
        {
            "name": "Pew Pew",
            "url": "/games/pewpew/",
            "desc": "<p>An HTML5 shoot-em-up game - my January entry for <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p><p><a href=\"/blether/one-game-a-month-january-pew-pew\" title=\"Writeup of PewPew project\">Writeup of the PewPew project</a> on my blog.</p>",
            "img": "/static/images/projects/pewpew.png",
            "tags": ["game", "javascript"],
            "date": "2013-01-30",
            "published": true
        },
        {
            "name": "Noughts and Crosses",
            "url": "noughts-and-crosses",
            "desc": "<p>A version of noughts of crosses with simple AI, using Javascript.</p>",
            "img": "/static/images/projects/noughts-and-crosses-small.jpg",
            "tags": ["game", "javascript"],
            "date": "2012-05-30",
            "published": true
        },
        {
            "name": "Snake",
            "url": "snake",
            "desc": "<p>A clone of the game found on old Nokia phones using Javascript and HTML canvas.</p>",
            "img": "/static/images/projects/snake-small.jpg",
            "tags": ["game", "javascript"],
            "date": "2012-04-30",
            "published": true
        },
        {
            "name": "Pong",
            "url": "pong",
            "desc": "<p>Pong - hit the ball past your opponent to win points.</p>",
            "img": "/static/images/projects/pong-small.jpg",
            "tags": ["game", "javascript"],
            "date": "2012-02-30",
            "published": true
        },
        {
            "name": "Random Team Generator",
            "url": "/projects/team-generator",
            "desc": "<p>A simple web app which generates random teams from user-submitted names. Built using the Flask framework.</p>",
            
            "tags": ["python", "flask"],
            "date": "2013-01-08",
            "published": true
        },
        {
            "name": "Bookmark application",
            "url": "https://github.com/whostolemyhat/bookmarks",
            "desc": "<p>A (work-in-progress) bookmark site which I wrote to learn about Flask (a very small Python web framework).</p>",
            
            "tags": ["python", "flask"],
            "date": "2012-09-04",
            "published": true
        },
        {
            "name": "Sort Your Life Out!",
            "url": "/projects/sort-your-life-out/",
            "desc": "<p>An Android to-do list app, designed for simplicity because I was fed up of downloading huge apps which had features I never used. Download from <a href=\"https://play.google.com/store/apps/details?id=uk.jamestease.todo\">Google Play</a>.</p>",
            "img": "/static/images/projects/sort-your-life-out/icon.png",
            "tags": ["android"],
            "date": "2012-09-04",
            "published": true
        },
        {
            "name": "Wiki app",
            "url": "http://jt-udacity.appspot.com/",
            "desc": "<p>The final of <a href=\"http://www.udacity.com/overview/Course/cs253/CourseRev/apr2012\" title=\"Udacity Web Application Engineering course\" target=\"_blank\">Udacity CS253 (Web Application Engineering)</a> was to build a wiki-like" +
                    "app using Google App Engine - this is the app I built. Pages can be created and edited" +
                    "only by logged-in users - you can " +
                    "<a href=\"http://jt-udacity.appspot.com/signup\" title=\"Sign up for an account\" target=\"_blank\">sign up here</a>." +
                "</p>",
            
            "tags": ["python"],
            "date": "2012-04-30",
            "published": true
        },
        {
            "name": "Todo list",
            "url": "http://www.diminishedseventh.co.uk/labs/todo/",
            "desc": "<p>A to-do list, made to teach myself jQuery and Ajax techniques (ajax loading, drag-and-dropping and inline editing).</p>",
            "img": "/static/images/projects/to-do.jpg",
            "tags": ["javascript", "php"],
            "date": "2012-04-30",
            "published": true
        },
        {
            "name": "Balls",
            "url": "balls",
            "desc": "<p>Javascript balls drawn on HTML5 canvas, which bounce around the screen. That's it really.</p>",
            "img": "/static/images/projects/balls.jpg",
            "tags": ["javascript"],
            "date": "2012-01-05",
            "published": true
        }
    ];

    new app.ProjectLibraryView(app.projects);
});