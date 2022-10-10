---
sidebar_position: 1
---

# Extending Billable Metrics

Billable metrics are the way to transform raw events into usable aggregations that you can later use for permission gating, billing, and analytics. Lotus currently supports two types of billable metrics: `Aggregation` metrics and `Stateful` metrics. 

Aggregation metrics can be thought of as computing SQL-like aggregations over the values of properties of the events; for example, the count of events with name `api_call`, or the sum of the property `character_count` of the events of type `message`. 

Stateful metrics, on the other hand, assume that events are documenting a change to some underlying state. For example, the property `num_users` in events of type `log_users` might inform Lotus of how many users a customer currently has on the product. There's always some numebr of users; the events are smply there to inform Lotus of changes. If you're using seats as a gating mechanism or billing metric, you'll want to use stateful metrics.

We recognize that there's probably a lot more ways that you might want to aggregate the events you're sending to Lotus. Because of that, we've made it as easy as possible to add your own custom types of metrics, for when the defaults aren't enough! You can keep your metric proprietary, or fork the repo, submit a PR, and make it available to the community. The rest of this page will walk you through the process of creating your own custom metric. 

To learn how to contribute to the project, please check out our [contributing guide](/docs/contributing).

## Backend

The places where payment providers are used in the Lotus workflow are:
- Calculating usage. This functionality is mainly used for displaying metric usage graphs, and for gating access to a part of the product depending on use.
- Calculating _billable_ usage. Though this can often be the same thing as usage, it all depends on what granularity you're calculating the usage in. For example, if your billable metric is the `max` of `property`, then you might reasonably expect the daily usage graph to include the maximum per day. However, if you wanted to see a daily revenue graph, then you only really generated revenue on the day that the event with the `max` over `property` in teh whole billing period occurred.

### Creating your own Billable Metric type

To create your own metric, you have to do the following:
1. Add your metric type to the [Metric Types enum](https://github.com/uselotus/lotus/blob/99f21da00eb8782a757202f21c37031477760f53/metering_billing/utils.py#L66) and the [Metric Type choice set](https://github.com/uselotus/lotus/blob/99f21da00eb8782a757202f21c37031477760f53/metering_billing/utils.py#L71). This will allow your metric type to be used in the model.
2. Create a concrete class that implements the `BillableMetricHandler` interface. This interface is defined in [`metering_billing/billable_metrics.py`](https://github.com/uselotus/lotus/blob/main/metering_billing/billable_metrics.py)). You can see the implementation of the `AggregationHandler` and `StatefulHandler`, representing the implementation for `Aggregation` and `Stateful` metrics, respectively. The type hints should be relatively self-explanatory, but if you have any doubts, don't be afraid to reach out in the [Lotus Community Slack](https://lotus-community.slack.com).
    * One key point is that to make it fully extensible, we are storing all the extra required fields in the `properties` JSONField of the BillableMetric model. This means that you'll have to parse the `properties` field to get the extra fields you need, and also be responsible for validating the `properties` field when a new object is being created. The comments will guide you through it.
3. Still in `metering_billing/billable_metrics.py`, add a mapping from your entry in the `Metric Types enum` to the [`METRIC_HANDLER_MAP`](https://github.com/uselotus/lotus/blob/d1726c0635a1cc0a9b14d768a390b684e18cd669/metering_billing/billable_metrics.py#L432). This mapping will get propagated throughout Lotus and will be used to extract your handler and use the methods you implemented in the previous step in order to make Lotus run.

That's it! After doing this and either pushing to your local version or merging a PR, you should be able to use your new metric type as if it were one of the default ones.




