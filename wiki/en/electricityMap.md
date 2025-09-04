# Electricity Map

## What does this mean?
Electricity Maps is a website/tool that provides real-time insight into CO2 emissions from electricity production around the world. The map shows which energy sources are used in different regions. For example, renewable energy such as wind and solar power, or fossil fuels such as coal and gas. It also indicates how much CO2 is emitted per kilowatt hour (kWh) of electricity. This information helps companies and individuals make informed decisions about electricity use and minimize environmental impact.

What does Electricity Maps do?

- The map shows current energy production and CO2 emissions from different regions and countries, so you can see which areas are currently using clean energy.

- In addition to real-time information, Electricity Maps also provides historical data on energy use and emissions, which can be useful for trend analysis.

- Electricity Maps offers an API that allows companies and developers to access this CO2 and energy data to enrich their own applications or systems with sustainability information.

Especially that last one is super interesting! The possibilities are endless by automatically optimizing workloads by moving them to regions with clean energy and executing processes at sustainable times. This helps companies increase energy efficiency and reduce their ecological footprint.

## How are we doing?
Wigo4it is currently playing with the Electricity Maps API. We see multiple applications:

- Automatically run our batches in the evening where green energy is available, for example in France which is often completely green due to nuclear power.

- Run our builds / releases automatically in the greenest place.

- Only run certain less important workloads when green energy is available (without moving out of West-Europe region).

- We can also use the <a href="https://carbon-aware-sdk.greensoftware.foundation/">Carbon Aware SDK</a> for this. This is a super cool initiative that we don't use enough yet. We're going to deploy this soon on our FunovationDay!

## Where can I read more about this?
- <a href="https://app.electricitymaps.com/zone/NL">Electricity Maps</a>
