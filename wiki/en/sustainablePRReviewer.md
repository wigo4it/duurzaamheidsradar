# Sustainable PR Reviewer

## What does this mean?
A pull request review is usually about correctness, readability, and architecture choices. But why not also check whether code is sustainable? The Sustainable PR Reviewer is an automated agent that looks at each pull request through a sustainability lens. It checks whether sustainable principles are applied and, where improvements are possible, gives concrete and actionable suggestions.

- **Sustainability as a quality criterion**: Just like we review code for test coverage or naming, sustainability can become a fixed part of our definition of good code. The reviewer makes this objective and repeatable.

- **Based on proven patterns**: The reviewer uses [Green Software Foundation patterns](https://patterns.greensoftware.foundation/) as its reference, an open standard for sustainable software engineering. These are practical guidelines, from avoiding unnecessary API calls to using memory efficiently and applying batch processing.

- **Part of our agent structure**: The reviewer is part of Wigo4it's broader agent approach. Through `copilot-instructions.md` and `agents.md`, our agents are already guided to write sustainable code. The Sustainable PR Reviewer closes the loop by checking whether this actually happened. See also ['Green AI'](wiki.html?page=greenAI).

- **Not blocking, but awareness-building**: The reviewer is not meant to reject pull requests. It is meant to start useful discussions. A suggestion such as "consider batching this loop to halve database calls" is more valuable than silently approving inefficient code.

## How are we doing?
The Sustainable PR Reviewer is in development, not finished yet, but the direction is clear.

- We are building the reviewer as an AI agent that runs as an extra step in our pull request workflow, next to existing CI/CD checks.

- Green Software Foundation patterns are the content baseline. We are selecting the most relevant patterns for our codebase and way of working.

- Integration with `agents.md` ensures the reviewer speaks the same language as our development agents, consistency between what we ask to write and what we check afterward.

- Once the reviewer is ready, we want to connect findings to our ['CO2 Monitoring'](wiki.html?page=CO2monitoring), so we can see whether reviewer guidance measurably improves application energy profiles.

- Timeline: we aim to have the first version live by the end of 2026 Q2.


## Where can I read more about this?
- <a href="https://patterns.greensoftware.foundation/">Green Software Foundation: Software Patterns</a>
- <a href="https://greensoftware.foundation/articles/what-is-green-software">Green Software Foundation: What is Green Software?</a>
- <a href="https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-requests">Azure DevOps: Pull Requests</a>
