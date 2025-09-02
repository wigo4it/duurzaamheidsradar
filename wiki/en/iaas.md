# Infrastructure as a Service

## What does this mean?
Infrastructure as a Service (IaaS) is a cloud computing model where you have to arrange many things yourself such as virtual machines, storage, networks and other computer resources via the internet. Instead of investing in and managing physical hardware yourself, organizations can rent on-demand computing power and storage capacity from cloud providers with IaaS. IaaS is comparable to buying a pizza in the store and baking it at home. You still have to do quite a lot yourself. If you look from a sustainability and security perspective, that's also the reason you should want to manage as little IaaS as possible:

- Much under own management and so you are responsible for Security patching and efficient setup.

- PaaS and SaaS are generally more sustainable than IaaS because they offer more optimization through shared use of infrastructure and economies of scale. This leads to lower energy consumption per user. SaaS is particularly efficient because the software is fully managed by the provider, minimizing energy waste.

- IaaS, however, is more sustainable than on-premises infrastructure, because cloud providers can apply advanced energy optimizations and renewable energy. On-premises systems often consume more energy due to inefficient management and underutilized hardware. See also ['Twin Data Centers'](wiki.html?page=twinDatacenters)

![alt text](wiki/pizzaservice.jpg)

## How are we doing?
Wigo4it has a mantra that states we want to release 30 times a day for potentially 200 municipalities. That's only possible if you don't write custom solutions (custom work is not sustainable anyway) and make as much use as possible of what the cloud has to offer. We therefore try to limit IaaS to the minimum and mainly use other types of resources:

- Container as a Service (CaaS) in the form of Azure Kubernetes Service and Container Apps.

- App services such as WebApps

- SQL managed instances (PaaS)

All these services scale much better than IaaS services, allowing us to deploy our environment as efficiently as possible.

## Where can I read more about this?
- <a href="https://engineering.dunelm.com/pizza-as-a-service-2-0-5085cd4c365e">Pizza as a Service</a>