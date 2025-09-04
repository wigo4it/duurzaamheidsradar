# Terracost

## What does this mean?
Terracost is a tool used with Terraform to create cost estimates for cloud infrastructure before it is deployed. It supports major cloud providers such as AWS, Google Cloud, and Microsoft Azure, and helps users compare costs across different providers. Terracost integrates seamlessly with Terraform and provides detailed cost analyses for specific resources, enabling organizations to budget more effectively, optimize costs, and make well-informed decisions when building infrastructure as code.

- Helps identify the most expensive resources and potential cost savings.

- Can be used as part of the Terraform plan and apply phases to generate cost estimates before infrastructure changes are made.

- Assists in understanding the cost implications of specific infrastructure changes.

Wigo4it uses Terracost in several repositories to gain direct insight into the cost impact (and therefore often the environmental impact) of certain choices in the code. For example, can we also manage with a different SKU? It helps you determine the financial impact of your infrastructure changes. A small extension in VS Code that creates just a bit more awareness!

## Where can I read more about this?
- <a href="https://www.cycloid.io/open-source/terracost">Terracost</a>