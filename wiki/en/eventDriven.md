# Event-Driven

## What does this mean?
An event-driven architecture is a system design where processes and actions are only activated by specific events. This ensures more efficient use of system resources and reduces energy consumption, because the system doesn't have to constantly check for changes (like with API polling). Instead, the system remains inactive until an event occurs, such as completing a transaction or uploading a file. This leads to a significant reduction in energy waste and lower CO₂ emissions.

Examples of event-driven architectures:

- **Event-driven cloud services**: Applications that use services like AWS Lambda, Google Cloud Functions, or Azure Event Grid only activate resources when a specific event occurs. For example, when a file is uploaded to cloud storage, processing only starts when that event occurs, while resources remain inactive between events.
  
- **Asynchronous processing**: In event-driven architectures, processes can occur asynchronously, which better distributes system load and avoids peak loads. This ensures more efficient utilization of available infrastructure.

## How are we doing?
We are actively working on transforming our BizTalk solutions to cloud-native, event-driven architectures. This transition enables us to fully utilize the flexibility and scalability of modern cloud infrastructures. Through this shift, we not only improve the performance and efficiency of our systems, but also achieve significant cost and energy savings.

- **Energy savings and sustainability**: By eliminating always-active processes and switching to event-driven processes, we reduce our energy consumption and lower our CO₂ emissions. This contributes to our goal of creating a more sustainable IT environment.
- **Improved resilience**: Cloud-native solutions not only provide us with flexibility, but also increase the resilience and availability of our systems. Event-driven architectures help us minimize downtime and ensure faster response to changes in supply and demand.

## Where can I read more about this?
- <a href="https://solace.com/blog/evolution-of-apis-restful-event-driven-apis/">From RESTful to Event-Driven</a>
