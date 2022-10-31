# current.camController.mode

## Planned implementation
Scrape JSON for all cameras for all vehicles. All default values are needed in the handling editor.

## Camera change-, vehicle change- and seed/world change behavior
Camera settings will be kept though camera mode change, vehicle change and even seed/world change.
You only need to change the camera setting once and it will persist.

Originally I planned on overriding values on many different events but now I see two possibilities:
 1. Override values on '@onCameraChange'
 2. Find where all camera modes are stored and override them there (once)

I bet the second option is a lot harder. I'll take a look and update here when I find a good solution.



## Properties

### Properties available for all camera types
 - `farSpeed`: At what speed should 'far' values be maxed out
 - `i`: Camera mode index, similar to `name`
 - `name`: Camera mode name, similar to `i`
 - `pitch`: Camera pitch (near and far)
 - `posOffset`: Camera position offset (x, y, z)
 - `range`: Camera distance (near and far)
 - `smoothFactor`: How smooth the camera follows the vehicle
 - `yOffset`: Camera y offset (near and far)

### Properties available for some camera types
 - `hideVehicle`: ('Bonnet')
 - `rollFactor`: ('First Person' and 'Bonnet')



## Default camera modes
These values are from the in-game Roadster.

### Near Chase
```
{
  "farSpeed": 45,
  "i": 0,
  "name": "Near Chase",
  "pitch": {
    "near": 0.3,
    "far": 0.2
  },
  "posOffset": {
    "x": 0,
    "y": 0,
    "z": 1.4
  },
  "range": {
    "near": 4,
    "far": 4.75
  },
  "smoothFactor": 1.5,
  "yOffset": {
    "near": 0.1,
    "far": 2
  }
}
```

### Far Chase
```
{
  "farSpeed": 45,
  "i": 1,
  "name": "Far Chase",
  "pitch": {
    "near": 0.25,
    "far": 0.15
  },
  "posOffset": {
    "x": 0,
    "y": 0,
    "z": 1.4
  },
  "range": {
    "near": 6,
    "far": 9
  },
  "smoothFactor": 1.25,
  "yOffset": {
    "near": 1,
    "far": 2
  }
}
```

### First Person
```
{
  "farSpeed": 45,
  "i": 2,
  "name": "First Person",
  "pitch": {
    "near": 0.05,
    "far": 0.05
  },
  "posOffset": {
    "x": 0,
    "y": 0.4,
    "z": 3
  },
  "range": {
    "near": 0.75,
    "far": 0.75
  },
  "rollFactor": -0.75,
  "smoothFactor": 0.3,
  "yOffset": {
    "near": 0.7,
    "far": 0.7
  }
}
```

### Bonnet
```
{
  "farSpeed": 45,
  "hideVehicle": true,
  "i": 3,
  "name": "Bonnet",
  "pitch": {
    "near": 0.05,
    "far": 0.05
  },
  "posOffset": {
    "x": 0,
    "y": 0.4,
    "z": 3.4
  },
  "range": {
    "near": 0,
    "far": 0
  },
  "rollFactor": -0.75,
  "smoothFactor": 0.3,
  "yOffset": {
    "near": 0.6,
    "far": 0.6
  }
}
```
