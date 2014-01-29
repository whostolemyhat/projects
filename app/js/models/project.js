var app = app || {};

app.Project = Backbone.Model.extend({
    defaults: {
        name: 'New Project',
        url: '#',
        desc: '',
        img: 'img/placeholder.png',
        tags: 'None',
        date: '2014-01-24',
        published: true
    }
});