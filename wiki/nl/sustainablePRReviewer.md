# Sustainable PR Reviewer

## Wat wordt hiermee bedoeld?
Een pull request review gaat normaal over correctheid, leesbaarheid en het volgen van architectuurkeuzes. Maar waarom controleren we niet tegelijk of de code ook duurzaam is geschreven? De Sustainable PR Reviewer is een geautomatiseerde agent die bij elke pull request meekijkt door de bril van duurzaamheid. Hij controleert of de duurzame principes zijn gehanteerd en geeft — waar het beter kan — concrete, actiegerichte suggesties.

- **Duurzaamheid als kwaliteitscriterium**: Net zoals we code reviewen op testdekking of naamgeving, kan duurzaamheid een vast onderdeel zijn van onze definitie van 'goede code'. De reviewer maakt dit objectief en herhaalbaar.

- **Gebaseerd op bewezen patronen**: De reviewer gebruikt de patronen van de [Green Software Foundation](https://patterns.greensoftware.foundation/) als referentie — een open standaard voor duurzame softwareontwikkeling. Dat zijn geen vage principes, maar concrete, toepasbare richtlijnen, van het vermijden van onnodige API-aanroepen tot het efficiënt omgaan met geheugen en batch-verwerking.

- **Onderdeel van de agents-structuur**: De reviewer maakt deel uit van de bredere agents-aanpak van Wigo4it. Via `copilot-instructions.md` en `agents.md` zijn onze agents al geïnstrueerd om duurzame code te schrijven — de Sustainable PR Reviewer sluit de cirkel door ook te controleren of dat daadwerkelijk is gebeurd. Zie ook ['Green AI'](wiki.html?page=greenAI).

- **Niet blokkend, wel bewustmakend**: De reviewer is niet bedoeld om PR's af te keuren, maar om het gesprek te starten. Een suggestie als "overweeg deze loop te batchen om het aantal databaseaanroepen te halveren" levert meer op dan een stilzwijgende goedkeuring van inefficiënte code.

## Hoe staan we ervoor?
De Sustainable PR Reviewer is in ontwikkeling — nog niet klaar, maar de richting is helder.

- We bouwen de reviewer als een AI-agent die als extra stap in onze pull request workflow wordt ingezet, naast de bestaande checks in onze CI/CD-pipeline.

- De Green Software Foundation patterns zijn de inhoudelijke basis. We maken een selectie van de meest relevante patronen voor onze codebase en werkwijze.

- De koppeling met `agents.md` zorgt dat de reviewer dezelfde taal spreekt als onze ontwikkelagents — consistentie in wat we vragen te schrijven en wat we achteraf controleren.

- Zodra de reviewer af is, willen we de bevindingen ook koppelen aan onze ['CO2monitoring'](wiki.html?page=CO2monitoring) — zodat we kunnen zien of de adviezen van de reviewer daadwerkelijk effect hebben op de energieprofielen van onze applicaties.

- Tijdlijn: we streven ernaar de eerste versie live te hebben voor eind 2026 Q2.

## Waar kan ik hier meer over lezen?
- <a href="https://patterns.greensoftware.foundation/">Green Software Foundation: Software Patterns</a>
- <a href="https://greensoftware.foundation/articles/what-is-green-software">Green Software Foundation: What is Green Software?</a>
- <a href="https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-requests">Azure DevOps: Pull Requests</a>
