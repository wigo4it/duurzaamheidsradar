# Full Data Sets

## What does this mean?
Storing and processing complete datasets requires significant amounts of energy. Data centers run continuously, often with high cooling needs, leading to high CO2 emissions. This energy consumption makes storing and managing complete datasets unsustainable in the long term. 1 Terabyte of data consumes 15 kWh of power and costs 280KG of CO2.

Complete datasets take up a lot of storage space. As datasets become larger, more physical hardware is needed, leading to a larger ecological footprint. Additionally, outdated data often needs to be stored, requiring extra space and resources without this data always being useful.

Working with complete datasets can lead to inefficient processes, such as longer processing times and higher costs. This means more consumption of energy and time, without always contributing to valuable insights. This is inefficient and contributes to unnecessary burden on both IT systems and the environment.

Examples:

- Many companies collect enormous amounts of data, much of which is never used. This leads to waste of storage and processing power, which is both expensive and environmentally burdensome.

- Companies often keep complete datasets including outdated or irrelevant information. This increases the need for storage systems and servers, which continuously consume energy, without this data actually being useful.

- Often multiple environments (DTAP) run in the IT landscape and these environments use complete copies of (anonymized) production data. It's much more efficient if only a limited dataset is used.

## How are we doing?
Wigo4it now has on-demand environments so many fewer environments with complete datasets are running. Additionally, we have implemented the following or can still improve things:

- Outdated data is automatically deleted via retention policies and data that must be kept is archived (and kept minimally).

- We could still look at compression. This provides less storage.

- We already store data in the cloud. That's more sustainable due to fluctuations. We can handle storage needs more flexibly and only pay for what we use.

- We are exploring whether we can work with minimal datasets. For example, only including customers whose names begin with the letters A through C.

## Where can I read more about this?
- <a href="https://www.wigo4it.nl/?utm=duurzaamheidsradar">Wigo4it website</a>