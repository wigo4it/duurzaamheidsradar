# Green Builds

## What does this mean?
By Green builds we don't mean that the code works in this case. Green builds are software builds that are optimized to minimize CO2 emissions and energy consumption during the software building process. This concept is part of green software engineering, where the focus is on reducing the environmental impact of software development and use. In a green build, specific techniques and tools are used to increase energy efficiency and reduce the CO2 emissions of build pipelines. Other benefits:

- Green builds can be scheduled at times when energy production in the data center region mainly comes from renewable sources (such as solar and wind energy). This way, software is built at times when the CO2 intensity of energy production is low, reducing the ecological footprint of the building process.

- Green builds minimize waste in the building process through build reuse, caching and smart version management. This prevents the same tasks from being performed repeatedly, saving energy consumption.

- An example is instead of rebuilding the entire codebase every time, only rebuilding the parts that have actually changed, saving energy and time.

## How are we doing?
Wigo4it can do much more in relation to green builds. We already do a few things:

- During technical debt sprints we look at whether build pipelines can be more efficient. We do this with the help of AI (Github Copilot). Sounds a bit paradoxical, but as long as the AI can improve our code to run more sustainable and efficient builds and pipelines, the emissions pay for themselves!

- We would like to start running builds at times when green power is available at night. This still happens in West Europe. It would be cool to build this using the Carbon Aware SDK so that builds run on nuclear power in France.

- Future: "Why are green builds so popular at Wigo4it? Because they always get a green flag in the pipeline and the only 'bugs' you encounter are environmentally friendly!" 🌱💻

## Where can I read more about this?
- <a href="https://www.wigo4it.nl/?utm=duurzaamheidsradar">Wigo4it website</a>
