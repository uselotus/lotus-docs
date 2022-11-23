---
sidebar_position: 3
---

# Typescript Library

## Installing

Install the lotus-typescript package for use in your Typescript Project.

```bash npm2yarn
npm install lotus-typescript
```

## Initializing

First grab a new api key from the Settings tab. Then change the host to wherever you want to send data to and omit the line if you are using Lotus Cloud.

```jsx
import Lotus = require("lotus-typescript")

const api_key= "YOUR API KEY";

const lotus = new Lotus(api_key, {
  host: "https://api.uselotus.io/", // You can omit this line if using Lotus Cloud
});
```
