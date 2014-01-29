var app = app || {};

app.ProjectLibraryView = Backbone.View.extend({
    el: '#projects',

    initialize: function(initialProjects) {
        this.collection = new app.ProjectLibrary(initialProjects);
        this.render();
        this.listenTo(this.collection, 'add', this.renderProject);
    },

    render: function() {
        this.collection.each(function(item) {
            this.renderProject(item);
        }, this);
    },

    renderProject: function(item) {
        var projectView = new app.ProjectView({
            model: item
        });

        this.$el.append(projectView.render().el);
    },

    events: {
        'click #add': 'addProject'
    },

    addProject: function(e) {
        e.preventDefault();

        var formData = {};
        $('#addProject').children('input, textarea').each(function(i, el) {
            if($(el).val() !== '') {
                formData[el.id] = $(el).val();
            }
        });

        console.log(formData);

        this.collection.add(new app.Project(formData));
    }
});