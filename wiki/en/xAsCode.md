# Infrastructure as Code

## What does this mean?
Infrastructure as Code (IaC), Everything as Code, or X as Code promote sustainability because they enable automation, scalability, and efficiency in infrastructure. Instead of managing servers manually one by one, everything is automated. The key sustainability benefits are:

- Fewer errors & less waste: IaC eliminates manual errors and overprovisioning (if properly configured), ensuring infrastructure is managed more accurately and resources are used more efficiently—leading to less energy waste.

- Dynamic scaling: Instead of maintaining constant overcapacity, infrastructure can be scaled up when needed and scaled down when no longer required. This results in lower energy consumption and optimized use of hardware.

- Efficient cloud usage: IaC generally leverages cloud infrastructures, where shared resources and energy-efficient data centers—often powered by renewable energy—are utilized. This reduces the ecological footprint and increases sustainability.

In short, IaC ensures more efficient use of IT resources, optimizes energy consumption, and reduces reliance on physical hardware, all contributing to more sustainable IT management.

## How are we doing?
Wigo4it automates everything—and we really mean everything. The only thing not yet automated is the provisioning of our HR system accounts in Entra (that’s still on the roadmap ;-)). But again, we truly automate everything:

- The entire infrastructure is redeployed via Terraform plan at least once a week. Once a year we also fully test this from scratch in another region.

- Through our Self-Service Wegwijzer, municipalities deploy entire environments themselves—everything behind the scenes is fully automated.

- Hundreds of end-to-end tests run whenever there’s a new version of our software.

- Security and compliance are automatically integrated into the pipelines (shift-left security and compliance).

## Where can I read more about this?
- <a href="https://en.wikipedia.org/wiki/Infrastructure_as_code">Infrastructure as Code</a>