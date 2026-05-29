# FinOps-agent

## Wat wordt hiermee bedoeld?
FinOps — een samentrekking van Finance en DevOps — is een praktijk waarbij teams gezamenlijk verantwoordelijkheid nemen voor de cloudkosten. Het gaat niet alleen over besparen, maar over bewust omgaan met clouduitgaven: de juiste resources, op het juiste moment, voor de juiste prijs. Dat raakt direct aan duurzaamheid: een overprovisioned omgeving is niet alleen duur, maar ook onnodig energieverslindend.

Een **FinOps-agent** gaat een stap verder: het is een geautomatiseerde, AI-aangedreven agent die continu de cloudinfrastructuur monitort op verspilling, concrete besparingsvoorstellen doet en — na goedkeuring — zelfs wijzigingen doorvoert of Azure DevOps-tickets aanmaakt. Dat maakt FinOps schaalbaar en consistent, zonder dat een team handmatig dashboards hoeft te doorzoeken.

- **Kosten én CO2 samen**: Cloudkosten en CO2-uitstoot zijn twee kanten van dezelfde medaille. Een VM die te groot is geschaald, kost geld én verbruikt onnodige energie. FinOps-acties zijn daarmee vrijwel altijd ook duurzaamheidsacties. Dit sluit naadloos aan op ['Right Size Provisioning'](wiki.html?page=rightSizeProvisioning) en ['Reduce idle time'](wiki.html?page=reduceIdleTime).

- **Van inzicht naar actie**: Traditionele FinOps stopt vaak bij aanbevelingen. Een agent gaat verder: hij analyseert Azure Advisor, Cost Management en resourcemetrics, weegt de bevindingen af en presenteert een gerangschikte shortlist van besparingsacties met de verwachte impact in euro's en CO2.

- **Drempel verlagen**: Zonder tooling verdwijnen FinOps-inzichten in drukke sprints. Een agent maakt het structureel door er een vaste, geautomatiseerde stap van te maken — net als een statische code-analyse in je pipeline.

- **Verantwoordelijkheid bij het team**: FinOps werkt alleen als de teams die de cloud gebruiken, ook eigenaar zijn van de kosten. De agent helpt daarbij door inzichten direct naar de juiste mensen te brengen, gekoppeld aan concrete acties in Azure DevOps.

## Hoe staan we ervoor?
Het CEE-team van Wigo4it heeft een werkende FinOps-agent operationeel. Dit is iets waar we trots op mogen zijn — het is een van de concretere duurzaamheidsinstrumenten die we hebben.

- De agent draait periodiek en analyseert automatisch onze Azure-omgeving op oversized SKUs, idle resources en inefficiënte Log Analytics-retentie.

- Besparingsvoorstellen worden ter goedkeuring voorgelegd voordat er iets wordt aangepast. De agent handelt nooit autonoom zonder akkoord — een bewuste keuze.

- Concrete resultaten: downscalen van VM's, aanpassen van SQL Managed Instance-cores en het terugbrengen van idle agent pools hebben al honderden euro's per maand bespaard — en daarmee ook CO2.

- De volgende stap is om de agent ook expliciete CO2-impact te laten rapporteren naast de financiële impact, zodat duurzaamheid nog zichtbaarder wordt in de besluitvorming.

## Waar kan ik hier meer over lezen?
- <a href="https://www.finops.org/introduction/what-is-finops/">FinOps Foundation: What is FinOps?</a>
- <a href="https://learn.microsoft.com/en-us/azure/cost-management-billing/finops/overview-finops">Microsoft: FinOps op Azure</a>
- <a href="https://learn.microsoft.com/en-us/azure/advisor/advisor-overview">Azure Advisor</a>
