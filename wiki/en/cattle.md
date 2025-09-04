# Cattle

## What does this mean?
In the sustainability context, cattle refers to servers that are identically configured and can be easily replaced without personal attention through automation.

- By configuring servers identically and making them easily replaceable, they can be easily scaled down when demand decreases.

- Because cattle servers are identically configured and can be easily replaced, it's not necessary to make individual backups.

- This model (cattle) is ideal for self-service environments where resources are built up and torn down on demand (Pay-As-You-Go, PAYG). This ensures environments only run when they're actually being used.

## How are we doing?
All static components that run cloud native are based on the 'cattle' model. This means they are identically configured and can be easily replaced without individual attention. In summary, we can say that only our database is still treated as ['pets'](wiki.html?page=pets), while the underlying infrastructure, such as the database server itself, also functions according to the 'cattle' model.

- All infrastructural components are based on the cattle model and scale on demand. This ensures more efficient use of resources.

- Non-production environments are requested via self-service and removed when not in use. This minimizes unnecessary resource usage.

- No more backups are made of infrastructural components, because they can be easily recreated in case of failure. This reduces storage requirements.

## Where can I read more about this?
- <a href="https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/">The History of Pets vs Cattle and How to Use the Analogy Properly</a>