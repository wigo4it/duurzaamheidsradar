# Pets

## What does this mean?

In the sustainability context, pets refers to servers that are individually configured and require personal attention for maintenance and replacement.

- By individually configuring and managing servers, they cannot be easily scaled down when demand decreases, resulting in unnecessary energy consumption.

- Because 'pets' servers are unique, it's necessary to make and manage individual backups, requiring extra resources and storage space.

- This model (pets) is less suitable for self-service environments where resources are built up and torn down on demand (Pay-As-You-Go, PAYG). This causes environments to often keep running, even when not actually being used, leading to waste of resources and energy.

## How are we doing?

All static components that run cloud native are based on the ['cattle'](wiki.html?page=cattle) model. This means they are identically configured and can be easily replaced without individual attention. In summary, we can say that only our production databases are still treated as pets, while the underlying infrastructure, such as the database server itself, also functions according to the 'cattle' model.

- We have moved about 30% of our workloads to Azure VMware Solutions (AVS), so we can decommission both our physical data centers. Think of AVS as an animal shelter full of pets. Over the next two years, the pets will either be phased out or rebuilt as cattle.

## Where can I read more about this?
- <a href="https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/">The History of Pets vs Cattle and How to Use the Analogy Properly</a>
