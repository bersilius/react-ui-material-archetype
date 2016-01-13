module.exports = {
    handleChange: function(component, key) {
        return function(e) {
            var state = {};
            if (e.target.type === 'checkbox') {
                state[key] = e.target.checked;
            } else {
                state[key] = e.target.value;
            }
            component.setState(state);
        }.bind(component);
    },
};
