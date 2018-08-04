// Implement and event emitter class
// TODO:
//  - Methods: addListener, removeListener and emit
//  - support multiple listeners of one event

class EventEmitter {

  constructor() {
    this.listeners = new Map();
  }

  addListener(name, callback) {
    if (!this.listeners.has(name)) {
      this.listeners.set(name, new Set());
    }

    this.listeners.get(name).add(callback);
  }

  removeListeners(name, callback) {
    const callbacks = this.listeners.get(name);
    
    if (!callbacks) {
      // add message 'no callbacks for this event was registered'
      return false;
    }

    if (!callbacks.delete(callback)) {
      // add message 'callback was not registered for the event'
      return false;
    }

    if (!callbacks.length) {
      this.listeners.delete(name);
    }

    return true;
  }

  emit(name, ...args) {
    const listeners = this.listeners.get(name);
    if (!listeners) { return; }

    listeners.forEach((callback) => {
      callback({name}, ...args);
    });
  }
}

function testEventEmitter() {
  const emitter = new EventEmitter();
  const cb = (...args) => console.log(...args);
  emitter.addListener('change', cb);
  emitter.emit('change', 'some', 'args', 'set');
}

testEventEmitter();
