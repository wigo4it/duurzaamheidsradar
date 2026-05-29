# FinOps Agent

## What does this mean?
FinOps, a combination of Finance and DevOps, is a practice where teams share responsibility for cloud costs. It is not only about saving money, but about conscious cloud spending: the right resources, at the right time, for the right price. This directly connects to sustainability: an overprovisioned environment is not only expensive, but also wastes energy.

A **FinOps Agent** goes one step further: it is an automated, AI-driven agent that continuously monitors cloud infrastructure for waste, proposes concrete savings actions, and after approval can even implement changes or create Azure DevOps tickets. This makes FinOps scalable and consistent, without requiring teams to manually inspect dashboards.

- **Cost and CO2 together**: Cloud costs and CO2 emissions are two sides of the same coin. A VM that is oversized costs money and consumes unnecessary energy. FinOps actions are therefore almost always sustainability actions as well. This aligns directly with ['Right Size Provisioning'](wiki.html?page=rightSizeProvisioning) and ['Reduce idle time'](wiki.html?page=reduceIdleTime).

- **From insight to action**: Traditional FinOps often stops at recommendations. An agent goes further: it analyzes Azure Advisor, Cost Management, and resource metrics, weighs the findings, and presents a ranked shortlist of optimization actions with expected impact in euros and CO2.

- **Lowering the threshold**: Without tooling, FinOps insights disappear in busy sprints. An agent makes this structural by turning it into a fixed, automated step, similar to static code analysis in a pipeline.

- **Team ownership**: FinOps only works when the teams using the cloud also own the costs. The agent helps by bringing insights to the right people, linked to concrete actions in Azure DevOps.

## How are we doing?
Wigo4it's CEE team has an operational FinOps agent. This is something we can be proud of. It is one of our more concrete sustainability instruments.

- The agent runs periodically and automatically analyzes our Azure environment for oversized SKUs, idle resources, and inefficient Log Analytics retention.

- Savings recommendations are submitted for approval before anything is changed. The agent never acts autonomously without consent, by design.

- Concrete results: scaling down VMs, adjusting SQL Managed Instance cores, and reducing idle agent pools have already saved hundreds of euros per month, with corresponding CO2 reductions.

- The next step is to report explicit CO2 impact next to financial impact, so sustainability becomes even more visible in decision-making.

## Where can I read more about this?
- <a href="https://www.finops.org/introduction/what-is-finops/">FinOps Foundation: What is FinOps?</a>
- <a href="https://learn.microsoft.com/en-us/azure/cost-management-billing/finops/overview-finops">Microsoft: FinOps on Azure</a>
- <a href="https://learn.microsoft.com/en-us/azure/advisor/advisor-overview">Azure Advisor</a>
