# Dark Data

## What does this mean?
Dark data refers to the enormous amounts of information that organizations and individuals collect but do not analyze or use. This can include unstructured data, such as emails, customer information, photos, sensor data, or log files, which are often stored without a clear purpose. Although not actively used, this data contributes to an organization's energy consumption and ecological footprint, especially through the resources needed to store and secure this data:

- Storing dark data consumes a lot of energy, especially in data centers that run continuously and must be cooled, contributing to the ecological footprint.

- Data centers storing dark data contribute globally to significant CO2 emissions, having a negative impact on the environment.

- Globally, about 70% (!) of stored data is never accessed or used again.

## How are we doing?
Wigo4it tries to prevent unnecessary storage as much as possible. In the past, for example, we made complete backups (vmdk files) of our servers. Nowadays, the entire infrastructure is in code and we only back up production data. Additionally, we have a clear vision on archiving that we actively execute.

- We store hundreds of Terabytes less than four years ago.

- By removing redundant data and only keeping valuable data, our energy consumption has decreased, contributing to sustainability (and costs).

- Preventing dark data by being critical about what you log, store etc. by default. After all, not storing is the best.

## Where can I read more about this?
- <a href="https://en.wikipedia.org/wiki/Dark_data">Dark Data</a>
