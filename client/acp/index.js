var React     = require('react'),
    AwardsApp = require('./components/AwardsApp.react');

React.render(
    <AwardsApp />,
    document.getElementsByClassName('manage-awards')[0]
);