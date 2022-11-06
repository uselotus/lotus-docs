---
sidebar_position: 2
---

# Create Metrics

Creating billable metrics is the first step in setting up your pricing on Lotus. Metrics represent everything that you want to track in your software. Some of the most common metrics you can define are users/seats, API calls, and gb of storage.

Metrics can be as complex as you need to be and come in a few basic types.

1. **Aggregation**

   These are metrics that have no inherent state, instead we define how to aggregate the usage based on events that are passed in. Common examples are: API calls and # of queries.

2. **Stateful**

   These are metrics in which a persistant state is being tracked within the information sent to Lotus. Common examples are: seats and gb of storage.

### Aggregation Metrics

<p>

Defining an aggregation metric starts with defining the <code>event_name</code>.

Next define the aggregation type. To pick an aggregation type, think about how you want to pass in usage information as events into Lotus. Many of the aggregation types depend on you passing in certain key/value pairs in the properties.

The different types for an aggregation metric are shown here:

- <code>COUNT</code>

  - Associate each usage event as 1 occurance of usage and count up all events

- <code>UNIQUE</code> <b>:property field required </b>

  - Associate each event with the same property field, as 1 occurance of usage and count all the unique property values

- <code>SUM</code> <b>:property field required </b>

  - Sum over a certain property of each event

- <code>MAX</code> <b>:property field required </b>

  - Take the max of a certain property field of all events

Lastly, give this metric a display nam, but make sure the name is unique compared to all other metrics.

</p>

### Stateful Metrics

<p>

Defining a stateful metric also starts with defining the <code>event_name</code>.

In an event based on a stateful metric, you will be passing back the state of usage in the properties. Therefore a property field is required.

Currently, we provide two types with the default aggregation type: <code>MAX</code>.

- <code>MAX</code> <b>:property field required </b>

  - Take the max of the state property over the specified period of time.

- <code>LAST</code> <b>:property field required </b>

  - Take the last value of the state property over the specified period of time.

Then, to define the period of time in which we aggregate the state, choose an interval.

Lastly, also give this metric a unique display name that can then be referenced in the frontend when creating plans or analyzing usage. This can be the same as the event name.

</p>
