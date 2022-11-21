import ApiSchema from "@theme/ApiSchema";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# The customer object

## `customer` object

<ApiSchema id="lotus" pointer='#/components/schemas/Customer' />

Customers represent your users or customers. They can have subscriptions, invoices, payment methods, and more.

## `customer_detail` object

<ApiSchema id="lotus" pointer='#/components/schemas/CustomerDetail' />

Customer detail includes slightly more information about the customer than the customer object.

## `customer_access` response

<ApiSchema id="lotus" pointer='#/components/schemas/GetCustomerAccessSuccess' />

Customer access indicates whether a customer has access to a particular feature or metric.
