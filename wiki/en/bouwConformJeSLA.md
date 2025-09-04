# Build According to SLA

## What does this mean?

Building according to your Service Level Agreement (SLA) prevents over-engineering and unnecessary use of resources. With an SLA of 99.5%, it's not necessary to guarantee extremely high availability (Fault Tolerance), like with airplanes, where everything must be executed redundantly. A high availability solution is comparable to a car; you can have downtime. If you have a flat tire, you stop on the shoulder for a moment, change the tire and get back on the road.

It's important to understand that an SLA of 99.5% means there's an acceptable downtime of about 3.65 hours per month. This is sufficient for many applications. By building according to your SLA, you can ensure your system is reliable without unnecessary use of hardware and energy.

- Automate everything. This prevents ([pets](wiki.html?page=pets)), i.e., systems that must be manually managed and are therefore vulnerable to errors and must be executed redundantly.

- If you use scaling, make sure it scales across multiple availability zones. This increases the reliability and availability of your services, because the system is resilient to failure in a single zone.

## How are we doing?

We build cars, not airplanes.

- Because we have automated everything and can recreate resources ([cattle](wiki.html?page=cattle)) in the cloud within minutes, we no longer need a twin datacenter (FT) concept. This halves the number of resources used. This allows us to guarantee the reliability and availability of our services while halving our CO2 footprint.

- Business-critical components are scaled across multiple availability zones. This is not the same as a twin datacenter, because we don't use more resources, but distribute them intelligently.

## Where can I read more about this?
- <a href="https://www.ibm.com/docs/en/powerha-aix/7.2?topic=aix-high-availability-versus-fault-tolerance">High availability versus fault tolerance</a>
