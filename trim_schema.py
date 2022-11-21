import copy
import sys

from ruamel.yaml import YAML

yaml=YAML()   # default, if not specfied, is 'rt' (round-trip)
with open('schemas/old_project_schema.yaml') as fp:
    data = yaml.load(fp)
allowed_endpoints = {
    "/api/customer_access/" : "customer_access",
    "/api/customers/" : "customers",
    r"/api/customers/{customer_id}/" : "customer",
    r"/api/plans/{plan_id}/" : "plan",
    "/api/subscriptions/" : "subscriptions",
    r"/api/subscriptions/{subscription_id}/" : "subscription",
    "/api/track" : "track",
}
lst = list(data["paths"].keys())
for x in lst:
    if x not in allowed_endpoints:
        del data["paths"][x]
    else:
        if "delete" in data["paths"][x]:
            del data["paths"][x]["delete"]
with open('schemas/project_schema.yaml', 'w') as fp:
    yaml.dump(data, fp)

for x in data["paths"]:
    for method in data["paths"][x]:
        data_copy = copy.deepcopy(data)
        keys = list(data_copy["paths"].keys())
        for k in keys:
            if k != x:
                del data_copy["paths"][k]
        with open(f'schemas/{allowed_endpoints[x]}_{method}.yaml', 'w') as fp:
            yaml.dump(data_copy, fp)

