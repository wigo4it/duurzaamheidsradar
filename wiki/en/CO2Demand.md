# CO2 Demand

## What does this mean?
This topic actually overlaps quite a bit with ['ElectricityMaps'](wiki.html?page=electricitymap). CO2 demand-driven solutions in the IT sector focus on minimizing CO2 emissions by dynamically adjusting processes and infrastructure to the availability of renewable energy sources or periods of lower CO2 intensity. This approach, also known as carbon-aware computing, enables IT systems to optimize their energy consumption based on the CO2 emissions associated with electricity production at a given time or in a specific region. Below are a few examples to keep this page somewhat distinct:

- An organization could decide to run its daily backups in the afternoon when solar energy is widely available, instead of in the evening when there may be greater reliance on fossil fuels.

- A company might choose to schedule its machine learning training tasks—which require significant computing power—at night when servers are otherwise idling, or during the day if the grid is drawing more heavily on renewable sources.

- Event-driven or serverless architectures such as AWS Lambda or Azure Functions are inherently more efficient since they only use compute power when needed. By combining these models with CO2 demand-driven principles, tasks can be executed at times when energy production is more sustainable, further reducing overall energy use.

## How are we doing?
It all comes down to running workloads in line with the balance between supply and demand for green energy. We may be repeating ourselves a little, but in the future we would like to:

- Provide CO2-neutral environments by running them in regions where the sun is shining, or by compensating with carbon credits through CarbonAPI.

- Run nightly batches by default in the Sweden region, where electricity is generated through hydropower and combined heat and power plants.

- Schedule non-critical processes during the day when sufficient green energy is available in Western Europe. This way, we avoid having to run workloads in another region.

## Where can I read more about this?
- <a href="https://watttime.org/">WattTime</a>
- <a href="https://app.electricitymaps.com/zone/NL">Electricity Maps</a>