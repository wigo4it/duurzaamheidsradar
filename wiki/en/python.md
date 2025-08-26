# Green Python

## What does this mean?
Programming languages have different levels of energy and resource efficiency, making them more or less sustainable depending on how well they handle system resources like CPU usage and memory. Here's an overview of some programming languages that are among the least sustainable:

**Python**: While Python is very popular due to its simplicity and versatility, it's not very efficient in terms of energy consumption. The language has high overhead and runs slower than languages like C or Go, resulting in higher energy and resource costs, especially in large-scale applications.

**Ruby**: Also relatively slow and has higher system requirements. The flexibility of the language comes with performance costs, resulting in more energy consumption for the same tasks compared to more efficient languages.

**JavaScript**: While widely used for web development, it's not the most energy-efficient language, especially when not properly optimized. In server-side environments, such as with Node.js, energy consumption can be significant due to how the language works with asynchronous processes.

In short, the choice of programming language can have a significant impact on software energy efficiency, especially when deployed at scale.

![Green Coding Comparison](wiki/greencoding.png)

## How are we doing?
Wigo4it previously ran Python but has since moved away from it. Apart from that, Wigo4it uses the following sustainable languages:

- **C#**: Not the most sustainable, but on average 15x more efficient than the aforementioned languages.
- **Blazor**: Lightweight programming language for front-end development.

Our approach to green coding:
- Regular performance audits of our applications
- Optimization of algorithms to reduce computational complexity
- Efficient database queries to minimize server load
- Code reviews focusing on performance and resource usage

## Where can I read more about this?
- [Green Programming: Reducing Carbon Emissions when Coding](https://datascience.aero/green-programming-reducing-your-carbon-emissions-when-coding/)
- [The Carbon Footprint of Programming Languages](https://greenlab.di.uminho.pt/wp-content/uploads/2017/09/paperSLE.pdf)
- [Sustainable Software Engineering](https://docs.microsoft.com/en-us/learn/modules/sustainable-software-engineering-overview/)
