var app = app || {};

app.ProjectView = Backbone.View.extend({
    tagName: 'div',
    className: 'projectContainer',
    template: _.template( $('#projectTemplate').html() ),

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );

        return this;
    }
});