# Backups

## What does this mean?
Backups play a crucial role in protecting data, but they also have an impact on sustainability. Backups require additional storage space, which directly leads to increased energy consumption. This applies to both on-premises storage and cloud storage. Every time a full backup is created, the amount of stored data increases, requiring more server capacity and cooling. This results in a higher ecological footprint, especially if backups are unnecessarily large or created too frequently.

Sustainability can be promoted through smart backup techniques such as:

- Incremental backups: These only store changed or new data since the last backup, consuming much less space and energy than full backups.

- Deduplication: This process prevents the same data from being stored multiple times, drastically reducing required storage capacity.

- Smart retention policies: By regularly deleting or archiving old and unnecessary backups, companies can optimize storage and save energy.

- And perhaps most importantly: Only backup the data you really need. For example, ensure your infrastructure is in code, so you don't need to make backups of it.

## How are we doing?
Wigo4it now only makes backups of production data. Previously, on-premises, we made backups of entire servers (vmdks) which we then stored redundantly. We did have deduplication enabled. However, it's now much better organized:

- All infrastructure is in code. We only make backups of production data.

- The backup of production data is also written elsewhere according to the BIO standard (data exit strategy).

- Over the past four years, we've gone from 140TB of backups to 10TB of backups. A reduction of over 90%!

## Where can I read more about this?
- <a href="https://www.wigo4it.nl/?utm=duurzaamheidsradar">Wigo4it website</a>
