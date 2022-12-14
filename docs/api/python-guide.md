---
sidebar_position: 2
---

# Python Library

Official Lotus Python library to capture and send events to any Lotus instance (self-hosted or cloud).

This library uses an internal queue to make calls non-blocking and fast. It also batches requests and flushes asynchronously, making it perfect to use in any part of your web app or other server side application that needs performance.

## Installation

```bash
pip install lotus-python
```

First grab a new api key from the Settings tab. Then change the host to wherever you want to send data to and omit the line if you are using Lotus Cloud.

Make sure to import the lotus library and set your api key **before** making any calls.

```python
import lotus
lotus.api_key = 'YOUR API KEY'
lotus.host = 'https://api.uselotus.io/'
```

To debug, you can set debug mode.

```python
lotus.debug = True
```
