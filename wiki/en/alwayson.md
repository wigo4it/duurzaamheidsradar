# Always On

## What does this mean?
The "always-on" principle, where IT systems and hardware run continuously, may seem like a convenient way to guarantee constant access and availability at first glance. However, this model has significant disadvantages in terms of sustainability within the IT sector. The continuous use of servers, data centers, and hardware that is always operational leads to inefficiencies and increased ecological impact. The costs and environmental effects of this approach are significant and are often overlooked. By understanding why an always-on infrastructure is not sustainable, companies and organizations can make better-informed decisions about how to optimize their IT environments to reduce energy consumption and minimize their ecological footprint. Here are the main reasons (with a snowball effect) why this always-on concept is not sustainable:

- High Energy Consumption:

Always-on equipment and data centers continuously consume energy, even when systems are not actively being used. This creates constant high energy consumption and thus inefficiency. Much hardware is not optimized for continuous use, leading to unnecessary energy consumption and a larger ecological footprint.

- Excessive Cooling

Always-on hardware generates constant heat, which means data centers must be continuously cooled. This further increases energy consumption, as cooling systems must also run continuously. The extra energy needed for cooling and hardware maintenance burdens the infrastructure and increases the total environmental impact.

- Hardware Wear

Hardware that is constantly in use ages faster and has a shorter lifespan. This leads to more frequent replacement and more electronic waste. Faster hardware replacement creates more e-waste that is often difficult to recycle and has harmful effects on the environment.

## How are we doing?
80% of all workloads run according to the [OnDemand](wiki.html?page=onDemand&lang=en) principle. We consciously choose to use as much as possible only what we need at that moment. We do have some reservations for certain workloads, because we know they are used 24/7.
We also still have 20% always-on. This 20% runs on Azure VMware Solution (AVS). We deployed AVS for the last 20% of workloads that we couldn't make cloud-ready or cloud-native in time. This enabled us to lift and shift our old VMware environment to Azure. From there we will retire these workloads or make them cloud native. In short, what is the status regarding always-on at Wigo4it:

- 20% still runs on AVS. We see AVS as a mortgage. We want to pay off this AVS mortgage in the next two years. See our <a href="https://techradar.wigo4it.nl">TechRadar</a>

- 80% is cloud-ready or cloud-native and based on on-demand and pay-per-use.

- We use optimization tools that keep us sharp about whether we have too much running 24/7.

- With the Guide we ensure that even our clients indirectly make sustainable choices based on the on-demand principle.

## Where can I read more about this?
- [OnDemand](wiki.html?page=onDemand&lang=en)
- [Guide](wiki.html?page=wegwijzer&lang=en)
- <a href="https://techradar.wigo4it.nl">TechRadar</a>
- <a href="https://azure.microsoft.com/en-us/products/azure-vmware">Azure VMware Solution</a>