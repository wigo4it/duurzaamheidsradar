# Energy Proportionality

## What does this mean?
Energy proportionality is the concept where energy consumption of a device, such as a server or CPU, should be proportional to the actual workload the device is performing. Ideally, a processor would only use energy proportional to the computing power actually demanded, but in practice many systems work less efficiently at partial load.

Examples of energy proportionality:

- **High load, high efficiency**: When a CPU runs at 100% of its capacity, it's generally most energy efficient, because all energy is converted into performance.
- **Low load, lower efficiency**: At 50% load, a CPU still consumes a relatively large portion of its maximum energy, but only delivers half the performance, leading to lower energy efficiency.
- **The difference with cars**: While a car drives most efficiently at lower speeds (like 90 km/h), and becomes inefficient at high speeds (like 200 km/h), a CPU works exactly the opposite. With a CPU, energy efficiency actually increases as load rises toward 100%, because energy consumption is proportional to delivered performance.
- **Modern CPUs improve proportionality**: Newer CPUs have technologies like "dynamic voltage and frequency scaling" (DVFS), allowing them to adjust their energy consumption based on workload. This makes them more efficient than older generations. Although progress has been made, energy consumption at partial load remains a challenge. Even when a processor is only 20-30% loaded, it can consume up to 50-70% of its maximum energy.

## How are we doing?
The quest for better energy proportionality is an important topic for us, because improving energy efficiency at lower loads can lead to significant energy savings, especially in our cloud. Therefore, we prefer to scale smaller initially and then scale up as demand grows, instead of immediately over-dimensioning.

## Image
![alt text](wiki/energyProportionality.png)
