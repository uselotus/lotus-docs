---
sidebar_position: 1
---

# Node.js Library

## Installing

Install the lotus-node package for use in your node.js based backend.

```bash npm2yarn
npm install lotus-node
```

## Initializing

First grab a new api key from the Settings tab. Then change the host to wherever you want to send data to and omit the line if you are using Lotus Cloud.

```jsx
const lotus = new Lotus(api_key, {
  host: "https://api.uselotus.io/", // You can omit this line if using Lotus Cloud
});
```
