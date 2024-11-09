const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object("I am the Instance");
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();

const StateManager = (function() {
    let instance;

    function createInstance() {
        const state = {};
        return {
            getState: function(key) {
                return state[key];
            },
            setState: function(key, value) {
                state[key] = value;
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const appState1 = StateManager.getInstance();
const appState2 = StateManager.getInstance();
appState1.setState('theme', 'dark');
console.log(appState2.getState('theme')); 
