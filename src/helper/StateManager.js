class StateManager {
  loadState = () => {
    try {
      let serializedState = localStorage.getItem("serializedState");

      if (serializedState === null) {
        return this.initializeState();
      }

      return JSON.parse(serializedState);
    } catch (err) {
      return this.initializeState();
    }
  };

  saveState = state => {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("serializedState", serializedState);
    } catch (err) {}
  };

  initializeState = () => {
    return {
      //state object
    };
  };
}

export default StateManager;
