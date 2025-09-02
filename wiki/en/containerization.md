# Containerization

## What does this mean?
Containerization is a technique in software development where applications are packaged together with their dependencies into containers. These containers are lightweight, isolated environments that can run on the same host or virtual machine (VM), but are much more efficient than VMs. Containers are isolated from each other, allowing them to work independently, but share the operating system kernel. This makes them more flexible and efficient in terms of resources and energy consumption.

- Containers all run on the same OS kernel, which means you don't have to load additional operating systems and there's less overhead. This leads to more efficient use of physical or virtual hardware.

- Containers can be started almost instantly, while VMs take longer to boot their operating system and processes. This faster startup time reduces energy consumption and ensures applications are available faster, which is both operationally and environmentally friendlier.

- Because containers are lighter and consume fewer resources, they can be more easily deployed in large-scale environments. This means data centers can be used more efficiently, requiring fewer physical servers to perform the same amount of work. Fewer servers means less energy consumption for both running the servers and cooling in the data center.

- Containers can easily be scaled up or down based on demand. This means you can shut down inactive containers and save energy. In VM-based environments, it's much more difficult to flexibly adjust resources without significant overhead.

## How are we doing?
Previously, Wigo4it had more than 1000 servers running 24/7, 365 days a week in the data center. What a waste of energy, idle time, hardware purchases, etc. Now we hardly have any VMs and use the following services based on containerization:

- Azure Kubernetes Service

- WebApps

- App Services

## Where can I read more about this?
- <a href="https://en.wikipedia.org/wiki/Containerization_(computing)">Containerization</a>