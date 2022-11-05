// A facade is a class that provides a simplified API for larger body of code. 
// It is often to used to hide low-level details of a subsystem.

class PlumbingSystem {
    // low evel access to plubming system
    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
  }
  
  class ElectricalSystem {
    // low evel access to electrical system
    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
  }
  
  class House {
  
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();
  
    public turnOnSystems() {
      this.electrical.setVoltage(120);
      this.electrical.turnOn();
      this.plumbing.setPressure(500);
      this.plumbing.turnOn();
    }
  
    public shutDown() {
      this.plumbing.turnOff();
      this.electrical.turnOff();
    }
  
  }
  
  const client = new House();
  client.turnOnSystems();
  client.shutDown();