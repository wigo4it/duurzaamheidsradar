# Twin Datacenters

## What does this mean?
A twin data center is a concept in which two data centers operate in close cooperation and support each other in case of emergency. These data centers are geographically separated but connected via a fast and reliable network connection. They work together to manage data and services redundantly and more securely. This means that if one data center fails due to an outage, natural disaster, or maintenance, the other data center can immediately take over without any noticeable impact on the availability of services or data.

Although a twin data center offers many advantages in terms of reliability and data protection, it is not a sustainable concept:

- Because both data centers maintain virtually identical systems and data, it means that double the amount of power is required to keep both locations operational. This significantly increases total energy consumption, even if only one data center is actively used at a given time (active/passive).

- Two data centers each require their own cooling systems, which consumes additional energy. Data centers generate a lot of heat due to the constant operation of servers, making cooling essential. In a twin data center scenario, this need is of course doubled.

- Managing two identical data centers requires additional hardware, network connections, and maintenance. This extra infrastructure leads to greater demand for energy and material use, which in turn contributes to the organization’s ecological footprint.

<video width="640" height="480" controls>
  <source src="wiki/datacenteruit.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

## How are we doing?
Wigo4it has had no on-premises data centers since 2024. Everything now runs in the cloud and is deployed as efficiently as possible. We build according to our SLA and therefore never run more than necessary from an availability or security perspective. How do we still guarantee the same level of service without the twin data center concept?

- All infrastructure is defined in Terraform code, and we can redeploy everything with just a few clicks. Each year we test this during our Workation, where we rebuild everything from scratch in another region.

- Pay-as-you-go: Because we now have much better insight into what is running and what it costs, we can manage it much more effectively. There is never hardware humming away unused anymore, because that would directly cost money. (In the past, it was already paid for anyway.)

- Costs have been more than halved in the cloud compared to having our own data centers. This is because we no longer own hardware, no longer have long-term contracts, and currently pay only for what we actually use.

## Where can I read more about this?
- <a href="https://www.compact.nl/articles/strategische-keuzen-rondom-datacenters-2/">Twin datacenter concept</a>