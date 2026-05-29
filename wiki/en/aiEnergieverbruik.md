# AI Energy Consumption

## What does this mean?
Artificial Intelligence is fantastic. It helps us work smarter, find answers faster, and solve complex problems. But there is a downside: AI is very energy-hungry. A single query to a Large Language Model can use up to 10 times more energy than a regular Google search. Training a large language model has a carbon footprint comparable to five cars over their full lifetime. And while we increasingly use AI tools such as Copilot, ChatGPT, and Claude, those small energy sips quickly add up.

- **Training vs. inference**: Training an AI model is extremely energy-intensive and usually happens only once per model. Inference, the actual use of a model, is lighter per request, but because of the huge daily volume the total impact is still significant.

- **Datacenter growth because of AI**: Cloud providers are rapidly expanding datacenters to meet AI demand. Microsoft, Google, and Amazon have already had to adjust their 2030 carbon targets, partly because of AI. This is something to be aware of as an organization running on cloud services.

- **Prompt efficiency matters**: A long, unfocused prompt with lots of context costs more energy than a sharp and targeted question. Being deliberate about how we prompt AI is also a form of green coding.

- **Local vs. cloud models**: Smaller local models (such as Llama or Phi) use a fraction of the energy of large cloud-based LLMs, especially when run on energy-efficient hardware.

## How are we doing?
At Wigo4it we are enthusiastic users of AI tools, from Copilot in our IDEs to Claude as a thinking and writing partner. Only recently we became aware that this usage has an energy impact we should include in our sustainability perspective.

- We are not yet able to measure AI-related energy consumption as part of our total CO2 footprint. This is a gap in our ['CO2 Monitoring'](wiki.html?page=CO2monitoring).

- We are exploring whether better prompt strategies can reduce token usage and therefore energy consumption. See also ['Green AI'](wiki.html?page=greenAI).

- For new AI initiatives, energy demand is now included as a decision criterion, next to cost and functionality.

- Fun fact: if every Wigo4it colleague writes ten fewer AI prompts per day that lead nowhere, yearly savings are roughly comparable to one Amsterdam-Barcelona return flight.

## Where can I read more about this?
- <a href="https://www.iea.org/reports/electricity-2024">IEA: Electricity 2024 (AI & Datacenters)</a>
- <a href="https://huggingface.co/blog/carbon-footprint-of-ai">Hugging Face: Carbon Footprint of AI</a>
- <a href="https://www.nature.com/articles/s41586-024-07566-4">Nature: Energy implications of AI</a>
