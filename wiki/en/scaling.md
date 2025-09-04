# Scaling

## What does this mean?
Scaling is the adjustment of system and infrastructure capacity to meet changing demand. This can mean both adding more power to existing machines and adding more machines. Scaling is essential in cloud computing and modern applications to handle resources more efficiently and ensure performance, with other sustainable benefits:

- With scaling, companies can adjust their IT resources to actual demand. Instead of always running at full capacity, systems can automatically scale up during peaks and scale down during low load. This prevents energy waste and ensures that only the required computing power and storage are used.

- By scaling dynamically, data centers and servers can consume less energy when demand is low. This not only reduces costs, but also reduces the ecological footprint by minimizing energy waste.

- Scaling in cloud environments uses shared infrastructure, ensuring that hardware is used more efficiently by multiple users and organizations. This reduces the need for constantly purchasing new physical servers, contributing to sustainability.

## How are we doing?
Wigo4it has implemented scaling in various places:

- Our Azure Kubernetes Cluster automatically scales nodes up and down depending on demand. This way we only run the necessary container infrastructure that we really need.

- Our WebApps use Azure App Service auto-scaling. This automatically scales our WebApps or APIs depending on CPU usage, memory usage, or other configured thresholds.

- Our Virtual Machine Scalesets scale automatically depending on demand. This prevents us from running unnecessarily many VMs when demand is low.

## Where can I read more about this?
- <a href="https://www.nops.io/blog/cloud-scalability/">Cloud scalability</a>
