# Green AI

## Wat wordt hiermee bedoeld?
Green AI is de praktijk van het zo duurzaam mogelijk inzetten van kunstmatige intelligentie — zowel bij het bouwen als bij het gebruiken ervan. Waar ['Green Coding'](wiki.html?page=greenCoding) gaat over hoe we onze eigen software efficiënter schrijven, gaat Green AI over hoe we slim omgaan met de AI-tools en -modellen die we gebruiken. Het is de bewuste keuze om het energieverbruik van AI te minimaliseren zonder in te leveren op de waarde die het oplevert.

- **Kies het kleinste model dat de klus klaart**: Een groot taalmodel inzetten voor het samenvatten van een vergadernotitie is als een vrachtwagen gebruiken om boodschappen te doen. Kleinere, gespecialiseerde modellen doen hetzelfde werk met een fractie van het energieverbruik.

- **Slim cachen van resultaten**: Als je steeds dezelfde of vergelijkbare vragen stelt aan een AI-model, heeft het weinig zin om dat telkens opnieuw te berekenen. Slimme caching-strategieën kunnen het aantal inferentie-verzoeken flink terugdringen.

- **Batch processing waar mogelijk**: Verzoeken groeperen en in bulk verwerken is vaak energiezuiniger dan elk verzoek direct en individueel te verwerken. Dit sluit goed aan bij ons principe van ['Batches'](wiki.html?page=batches).

- **Carbon-aware scheduling van AI-workloads**: Zware AI-taken zoals batch-inferentie of het fine-tunen van modellen plannen op momenten dat het elektriciteitsnet groener is — zie ook de ['Carbon Aware SDK'](wiki.html?page=carbonAwareSDK) en de ['Electricity Map'](wiki.html?page=electricityMap).

- **Model governance**: Welke AI-tools mogen medewerkers gebruiken? Hebben we inzicht in het gezamenlijke gebruik? Een bewust inkoopbeleid voor AI-diensten maakt onderdeel uit van ons bredere ['Inkoopbeleid'](wiki.html?page=inkoopbeleid).

## Hoe staan we ervoor?
Green AI is voor Wigo4it een nieuw begrip dat we actief aan het verkennen zijn. We gebruiken AI enthousiast, maar de bewuste duurzaamheidsafweging daarin is nog pril. Toch hebben we al een concrete stap gezet.

- We hebben een agents-structuur ingericht waarmee we onze AI-agents actief sturen op duurzame code. Via `copilot-instructions.md` en `agents.md` geven we agents concrete richtlijnen mee over duurzaam ontwikkelen. Daarin verwijzen we onder andere naar de [patronen van de Green Software Foundation](https://patterns.greensoftware.foundation/) — zodat duurzaamheid geen bijzaak is, maar ingebakken zit in hoe onze agents code schrijven en reviewen.

- We zijn bezig met een ['Sustainable PR Reviewer'](wiki.html?page=sustainablePRReviewer) — een agent die bij elke pull request controleert of de duurzame principes zijn gehanteerd en waar mogelijk concrete verbeteringen suggereert.

- We verkennen of we voor terugkerende, voorspelbare AI-taken kleinere of lokale modellen kunnen inzetten in plaats van grote cloudgebaseerde LLMs.

- Bij de inzet van de ['FinOps-agent'](wiki.html?page=finopsAgent) kijken we ook naar het gebruik van het kleinste effectieve model — niet alleen vanwege kosten, maar ook vanwege de energievoetafdruk.

- Er staat een spike gepland om te onderzoeken of we Azure AI-inferentie kunnen plannen op momenten met lage CO2-intensiteit op het net.

## Waar kan ik hier meer over lezen?
- <a href="https://greensoftware.foundation/articles/sustainable-ai">Green Software Foundation: Sustainable AI</a>
- <a href="https://arxiv.org/abs/1906.02629">Strubell et al.: Energy and Policy Considerations for Deep Learning in NLP</a>
- <a href="https://www.microsoft.com/en-us/research/blog/green-ai/">Microsoft Research: Green AI</a>
