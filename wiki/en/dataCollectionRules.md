# Data Collection Rules

## What does this mean?
Data Collection Rules (in e.g. Azure) help determine which data is collected at all and how this data should be processed. In Azure Monitor and other services, you can use Data Collection Rules to specify which data should be collected, filtered and where this data should be sent. DCRs make it possible to store only the most relevant data and avoid unnecessary data exchange or processing. This helps optimize storage space and computing power, which in turn contributes to sustainability:

- With DCRs you can set specific filters to capture only relevant and useful data, instead of collecting unnecessary log files, telemetry or system data that is never used. This uses less storage and therefore less power.

- Sending large amounts of data over networks consumes energy and increases the load on network equipment. With DCRs you can control which data should be sent to central storage locations, such as Azure Monitor or Log Analytics. By sending less data, you reduce data traffic and the associated energy needs.

- In combination with retention policies, you can ensure that data collected by DCR is also not stored longer than necessary.

## How are we doing?
Wigo4it uses Data Collection Rules in combination with retention policies. These essentially fall under the future ['Deletion Strategy'](wiki.html?page=verwijderStrategie). How we have set this up:

- We use DCR policies so that newly deployed resources automatically get the correct DCR settings with the required Diagnostic settings and this cannot be forgotten.

- Thanks to DCR with diagnostics (Terraform code) we only store the data we really need.

- With retention policies such as operational nonprod logging being automatically deleted after 31 days, we don't end up with a pile of data that we never do anything with anymore.

## Where can I read more about this?
- <a href="https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-overview">Data Collection Rules</a>
- <a href="https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-configure?tabs=portal-3%2Cportal-1%2Cportal-2">Data retention policies</a>
