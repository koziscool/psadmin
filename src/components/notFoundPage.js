
"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
                <div>
                    <h1>Page not found</h1>
                    <p>Sorry, nothing to see here.</p>
                    <p><Link to="app" >Back to Home</Link></p>
                </div>
            );
    }
});

module.exports = NotFoundPage;

