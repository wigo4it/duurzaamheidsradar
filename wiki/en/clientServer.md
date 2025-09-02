# Client Server

## What does this mean?
Client-server models are based on a central server model, where clients (users or applications) connect to a specific server to access data or applications. This often leads to underutilization of resources, because servers must remain constantly active to handle requests, even when little use is made of the capacity. This inefficient use of server capacity increases energy consumption, resulting in a larger ecological footprint. A client-server model is therefore considered outdated.

- Client-server architectures are often difficult to scale. Adding more users or increasing demand for computing power often requires purchasing new hardware or adapting the infrastructure, which brings costs and energy waste. This makes the system less flexible than cloud-based solutions, which can automatically scale up or down depending on demand, improving energy efficiency.

- Because client-server models are often managed on-location (on-premises), they typically consume more energy and require more hardware than cloud-based alternatives.

- The technology used in client-server architectures is often outdated and not designed with modern sustainability requirements in mind. New technologies such as cloud computing (IaaS, PaaS, SaaS) and serverless computing optimize the use of computing power and energy, reducing total energy consumption.

In short, a client-server application is less sustainable because it handles resources inefficiently, is harder to scale and requires local management, leading to more energy consumption. Modern cloud-based architectures offer flexible, scalable and energy-efficient solutions, often powered by renewable energy, and are therefore much more sustainable.

## How are we doing?
Wigo4it used to have such an old-fashioned application with a client-server model. During our cloud journey we rebuilt all of this with the result:

- The entire application is now web-based and runs on .NET 7 and 8.

- We no longer need Citrix, cost savings of almost one million (hardware and software).

- The backend runs in AKS and everything is 100% automated with Terraform and pipelines. No more separate VMs that we have to manage.

## Where can I read more about this?
- <a href="https://www.wigo4it.nl/?utm=duurzaamheidsradar">Wigo4it website</a>
