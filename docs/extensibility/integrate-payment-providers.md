---
sidebar_position: 1
---

# Integrating New Payment Providers

Currently, Lotus only supports Stripe as a payment provider. However, we tried designing our code in such a way that you can easily integrate other payment providers. Whether you want to create a proprietary integration in your self-hosted solution, or you want to create a new integration for the community to use, we've got you covered.

To learn how to contribute to the project, please check out our [contributing guide](/docs/contributing).

## Backend

The places where payment providers are used in the Lotus workflow are:
- Connecting an organization to a payment provider. We must provide functionality to allow the frontend to communicate to a user whether they've been connected to a payment provider, and to update the organization model with the appropriate information.
- Interfacing with the payment provider to generate an "external" invoice. Even though we keep our own version of an invoice, we need to let the payment provider know how to charge the customer.

### Creating your own payment provider

To create your own integration, you have to do the following:
1. Create a concrete class that implements the `PaymentProvider` interface. This interface is defined in [`metering_billing/payment_providers.py`](https://github.com/uselotus/lotus/blob/main/metering_billing/payment_providers.py)). You can see the implementation of the Stripe version (`StripeConnector` class) in the file. The type hints should be relatively self-explanatory, but if you have any doubts, don't be afraid to reach out in the [Lotus Community Slack](https://lotus-community.slack.com).
2. Add your payment provider to the [Payment Providers enum](https://github.com/uselotus/lotus/blob/80894dfa73796e8e29622f66047692c457bff1f9/metering_billing/utils.py#L53) and the [Supported Payment Providers choice set](https://github.com/uselotus/lotus/blob/80894dfa73796e8e29622f66047692c457bff1f9/metering_billing/utils.py#L57). This will allow it to be a field in the models and be used throughout Lotus. 
3. Go to the URLs in `lotus/urls.py` and add your new payment provider as an endpoint. The get and post methods from step 1 will take care of interfacing with the frontend. You can see [here how we implemented this with Stripe](https://github.com/uselotus/lotus/blob/80894dfa73796e8e29622f66047692c457bff1f9/lotus/urls.py#L124). 
4. To make our connector implement the second functionality mentioned in the last section, go to the `metering_billing/invoice.py` file, and add an instance of your connector to the `payment_providers` dictionary. From here, the boilerplate will take care of using the methods you defined to execute Lotus' billing logic. To see how we did it with Stripe, [check out this line](https://github.com/uselotus/lotus/blob/80894dfa73796e8e29622f66047692c457bff1f9/metering_billing/invoice.py#L24).


