# Green AI

## What does this mean?
Green AI is the practice of using artificial intelligence as sustainably as possible, both when building and when using AI systems. Where ['Green Coding'](wiki.html?page=greenCoding) focuses on writing our own software more efficiently, Green AI focuses on making smart choices about the AI tools and models we use. It means deliberately minimizing AI energy use without reducing the value it delivers.

- **Choose the smallest model that does the job**: Using a large language model to summarize meeting notes is like using a truck to do groceries. Smaller, specialized models can often do the same work with a fraction of the energy.

- **Smart caching of results**: If the same or similar prompts are asked repeatedly, recalculating every time is wasteful. Smart caching strategies can significantly reduce inference requests.

- **Batch processing where possible**: Grouping requests and processing them in bulk is often more energy-efficient than handling each request individually in real time. This aligns well with our ['Batches'](wiki.html?page=batches) principle.

- **Carbon-aware scheduling of AI workloads**: Heavy AI tasks such as batch inference or model fine-tuning can be scheduled when the electricity grid is greener. See also ['Carbon Aware SDK'](wiki.html?page=carbonAwareSDK) and ['Electricity Map'](wiki.html?page=electricityMap).

- **Model governance**: Which AI tools may employees use? Do we have visibility into collective usage? A conscious procurement policy for AI services is part of our broader ['Purchasing policy'](wiki.html?page=inkoopbeleid).

## How are we doing?
For Wigo4it, Green AI is a relatively new concept we are actively exploring. We use AI with enthusiasm, but the explicit sustainability trade-offs are still early stage. We have already taken a concrete first step.

- We set up an agent structure that actively steers our AI agents toward sustainable code. Through `copilot-instructions.md` and `agents.md`, agents receive concrete guidance for sustainable development. This includes references to the [Green Software Foundation patterns](https://patterns.greensoftware.foundation/), so sustainability is built in rather than an afterthought.

- We are building a ['Sustainable PR Reviewer'](wiki.html?page=sustainablePRReviewer), an agent that checks each pull request for sustainable principles and suggests concrete improvements where possible.

- We are exploring whether recurring, predictable AI tasks can run on smaller or local models instead of large cloud-based LLMs.

- In our ['FinOps Agent'](wiki.html?page=finopsAgent), we also look at using the smallest effective model, not only for cost reasons but also for energy footprint.

- A spike is planned to investigate whether Azure AI inference can be scheduled during periods of low grid CO2 intensity.

## Example of our Copilot sustainability-instructions.md

---
applyTo: "applications/**,platform/**,clusters/**,applicationsets/**"
---

# Sustainable GitOps — Green Software Principles for platform-gitops-w4

> **Mission**: minimize the energy use and carbon footprint of WIGO4IT's Kubernetes platform through sustainable GitOps, aligned with the [Green Software Foundation](https://greensoftware.foundation/).

**Scope**: this instruction applies to the workload and platform manifests in this repo (`applications/`, `platform/`, `clusters/`, `applicationsets/`). The Azure infrastructure layer (Terraform in CloudFoundation) has its own, leaner sustainability guideline; VM SKU and node-pool sizing lives there, not here.

**Two things to confirm with the team** before treating them as hard rules: the metrics datasource for KEDA triggers and KPIs (see Operations), and any relaxation of mTLS (see Requirements & Design).

Weigh **energy efficiency**, **hardware efficiency**, and **carbon awareness** against correctness, security, and the platform's existing architecture. Where a pattern here conflicts with a deliberate platform choice (for example self-hosting CloudNativePG and RabbitMQ), the platform choice wins: apply these patterns to new components, not as a reason to undo settled ones.

---

## Core Sustainability Principles

### 1. Energy Efficiency
Minimize energy per operation through efficient algorithms, right-sized resources, and demand-based scheduling.

### 2. Hardware Efficiency
Maximize utilization of provisioned hardware to reduce embodied carbon from idle capacity.

### 3. Carbon Awareness (temporal, not geographic)
Shift flexible work in **time** to when grid carbon intensity is lower. Region is not a lever: WIGO4IT runs in West Europe (with Germany West Central for DR only) for data-sovereignty reasons, so "run where carbon is lowest" does not apply. Time-shifting non-urgent batch work does.

---

## Requirements & Design

### Match Service Level Objectives to Business Needs
**Pattern**: [Match SLO](https://patterns.greensoftware.foundation/requirements/match-slo)

- **DON'T** target 99.99% availability unless the service is business-critical.
- **DO** design nonprod for lower availability (single replica, no PDB) to cut redundancy.
- **DO** size `replicaCount` to real traffic, not theoretical peaks.

```yaml
# Over-provisioned for a dev environment
replicaCount: 3
podDisruptionBudget:
  minAvailable: 2

# Right-sized for nonprod: single replica, downtime acceptable, no PDB
replicaCount: 1
```

### Encrypt What Is Necessary — security trade-off, needs sign-off
**Pattern**: [Encrypt What Is Necessary](https://patterns.greensoftware.foundation/requirements/encrypt-what-is-necessary)

TLS everywhere costs CPU, but relaxing it is a security decision, not a sustainability one. The default on this platform stays mTLS `STRICT`. Treat the following as proposals that require security sign-off, never defaults an agent applies on its own:

- Terminating TLS at the Istio ingress and treating the mesh interior as trusted.
- `PERMISSIVE` mTLS in nonprod to save proxy CPU during development.

Do not switch a workload to `PERMISSIVE` or plaintext without an explicit, reviewed decision.

### Shed Lower-Priority Traffic Under High Load
**Pattern**: [Shed Lower-Priority Traffic](https://patterns.greensoftware.foundation/requirements/shed-lower-priority-traffic)

- **DO** use rate limits and Istio `outlierDetection` to shed low-priority load and fail fast instead of burning energy on failing backends.

---

## Architecture

### Containerize and Right-Size Workloads
**Patterns**: [Containerize Your Workloads](https://patterns.greensoftware.foundation/architecture/system-topology/containerize-your-workload-where-applicable), [Use Energy-Efficient Hardware](https://patterns.greensoftware.foundation/architecture/technology-selection/use-energy-efficient-hardware)

- **DO** prefer containers over VMs for better bin-packing.
- **DO** evaluate ARM (Ampere) node pools for workloads whose images are multi-arch. Validate that every image in the workload publishes an `arm64` variant before scheduling it there. (Node-pool definitions live in Terraform/CloudFoundation.)
- **DON'T** request oversized resources; match requests to measured usage.

### Choose the Region Closest to Users
**Pattern**: [Choose Region Closest to Users](https://patterns.greensoftware.foundation/architecture/system-topology/choose-region-closest-to-users)

- Workloads run in `westeurope`, which is both closest to Dutch users and fixed by data-sovereignty. Treat this as a constraint, not a tunable carbon lever.
- **DON'T** add cross-region replication except for the existing DR setup (Germany West Central).

### Scale Logical Components Independently
**Pattern**: [Scale Logical Components Independently](https://patterns.greensoftware.foundation/architecture/system-topology/scale-logical-components-independently)

- **DO** give user-facing and background components separate Deployments with their own resource profiles, so each scales on its own demand.

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 3            # user-facing, higher availability
  template:
    spec:
      containers:
        - name: api
          resources:
            requests: { cpu: 100m, memory: 128Mi }
            limits:   { cpu: 200m, memory: 256Mi }
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: worker
spec:
  replicas: 1            # low-volume background processing
  template:
    spec:
      containers:
        - name: worker
          resources:
            requests: { cpu: 50m, memory: 64Mi }
            limits:   { cpu: 100m, memory: 128Mi }
```

### Use a Service Mesh Only If Needed
**Pattern**: [Use Service Mesh Only If Needed](https://patterns.greensoftware.foundation/architecture/system-topology/evaluate-using-a-service-mesh)

- **DON'T** inject Istio sidecars into workloads that need no mTLS, traffic management, or Envoy observability.
- **DO** set `sidecar.istio.io/inject: "false"` on those; it saves the sidecar's memory and CPU per pod.
- Istio ambient mode lowers per-pod overhead further; adopt it when the platform moves to ambient.

### Queue Non-Urgent Processing
**Pattern**: [Queue Non-Urgent Requests](https://patterns.greensoftware.foundation/architecture/system-topology/queue-non-urgent-requests)

- **DO** route async work through the existing RabbitMQ (operator-managed on ikv) or Azure Service Bus.
- **DO** drain low-priority queues during lower-carbon hours.

### Reduce Network Traversal
**Pattern**: [Reduce Network Traversal](https://patterns.greensoftware.foundation/architecture/system-topology/reduce-network-traversal-between-VMs)

- **DO** co-locate chatty services with pod affinity; prefer in-cluster DNS over external endpoints for internal calls.

### Implement Stateless Design
**Pattern**: [Implement Stateless Design](https://patterns.greensoftware.foundation/architecture/system-topology/implement-stateless-design)

- **DO** keep services stateless and ephemeral; externalize session state to Redis or a managed cache so pods stay small and disposable.

---

## Development

### Set Explicit Resource Requests and Limits

- **ALWAYS** set `resources.requests` and `resources.limits` on every container.
- **DON'T** let `limits.cpu` exceed roughly `2 x requests.cpu`; large gaps cause throttling and wasted scheduling headroom.
- **DO** run the VerticalPodAutoscaler in recommendation mode to right-size from real usage.

```yaml
containers:
  - name: app
    resources:
      requests: { cpu: 100m, memory: 128Mi }
      limits:   { cpu: 200m, memory: 256Mi }
```

The security baseline below is enforced by Kyverno on this platform, so set it on every workload:

```yaml
securityContext:
  runAsNonRoot: true
  allowPrivilegeEscalation: false
  capabilities:
    drop: [ALL]
  seccompProfile:
    type: RuntimeDefault
```

### Compress Stored and Transmitted Data
**Patterns**: [Compress Stored Data](https://patterns.greensoftware.foundation/development/data-handling/compress-stored-data), [Compress Transmitted Data](https://patterns.greensoftware.foundation/development/data-handling/compress-transmitted-data)

- **DO** enable gzip on HTTP responses at the Istio layer.
- **DO** compress logs and metrics before shipping to Log Analytics.
- **DO** keep vendored Helm chart archives compressed.

### Minimize Deployed Environments
**Pattern**: [Minimize Deployed Environments](https://patterns.greensoftware.foundation/development/minimizing-deployed-environments)

- **DON'T** spin up a cluster per feature branch; isolate with namespaces.
- **Current state**: clusters include hub-nonprod, hub-prod, ikv-nonprod, ikv-nonprod-vnext, ikv-prod. Evaluate whether `ikv-nonprod-vnext` is still needed once its migration/validation purpose ends, rather than running it indefinitely.

### Cache Deliberately, Not Aggressively
**Pattern**: [Cache Static Data](https://patterns.greensoftware.foundation/development/data-handling/cache-static-data)

Caching only saves recompute when the data is stable. Cache the wrong thing and you serve stale data or thrash the cache.

- **DO** cache genuinely static or slow-changing data: configuration, reference data, container images.
- **DO** pre-pull or cache container images on nodes so pods don't re-download layers on every scale-up.
- **DON'T** cache data that changes often; query on demand and set honest TTLs.

### Use Asynchronous Communication
**Pattern**: [Use Async Instead of Sync](https://patterns.greensoftware.foundation/development/use-async-instead-of-sync)

- **DO** prefer message queues over synchronous HTTP for inter-service calls.
- **DON'T** block threads waiting on I/O; it wastes CPU cycles.

---

## Operations

> **Datasource note**: the KEDA `prometheus` triggers and the PromQL KPIs below assume a Prometheus-compatible query endpoint. On this platform that is the LGTM stack (Grafana Mimir) being rolled out on the hub, not a vanilla `prometheus.monitoring:9090`. Point `serverAddress` at the actual Mimir/LGTM gateway, or use KEDA's `azure-monitor` scaler when the metric lives in Azure Monitor. Confirm the endpoint with the team before adding triggers.

### Scale Workloads With Demand (KEDA)
**Patterns**: [Scale Infrastructure with User Load](https://patterns.greensoftware.foundation/operations/capacity-management/scale-infrastructure-with-user-load), [Scale Kubernetes Workloads on Demand](https://patterns.greensoftware.foundation/operations/capacity-management/scale-kubernetes-workloads-based-on-events)

KEDA is installed on this platform but not yet used by any workload (no `ScaledObject` instances exist), so treat the examples as the adoption pattern.

- **DO** scale on the signal that drives load: queue depth (RabbitMQ/Service Bus), HTTP rate, or a custom metric, rather than CPU alone.
- **DO** set `minReplicaCount: 0` for batch and queue-driven workers that tolerate cold starts.
- **DON'T** scale user-facing prod to zero; keep `minReplicaCount: 1-2` to avoid a cold start on the first request.

```yaml
# Queue worker: scale-to-zero is fine, no user waits on a cold start
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: batch-processor
spec:
  scaleTargetRef:
    name: batch-processor
  minReplicaCount: 0
  maxReplicaCount: 5
  triggers:
    - type: rabbitmq
      metadata:
        queueName: low-priority
        queueLength: "10"
```

```yaml
# User-facing prod API: scale with load, never to zero
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: api
  namespace: production
spec:
  scaleTargetRef:
    name: api
  minReplicaCount: 2                 # never cold-start a user request
  maxReplicaCount: 10
  cooldownPeriod: 300
  triggers:
    - type: prometheus
      metadata:
        serverAddress: http://<mimir-or-lgtm-query-endpoint>   # not prometheus.monitoring:9090
        metricName: http_requests_per_second
        query: sum(rate(http_requests_total{app="api"}[2m]))
        threshold: "100"
        activationThreshold: "10"
```

### Scale Down Nonprod Outside Business Hours
**Patterns**: [Scale Down Unused Applications](https://patterns.greensoftware.foundation/operations/capacity-management/scale-down-unused-applications), [Scale Down Kubernetes Workloads](https://patterns.greensoftware.foundation/operations/capacity-management/scale-down-kubernetes-workloads)

The hub nonprod cluster already stops outside office hours at the cluster level: `aks-013-hubcluster` starts 08:00 and stops 20:00 CET on weekdays via the `aa-013-hubcluster` Automation runbook. Use KEDA `cron` triggers for finer, workload-level scaling on top of that, for apps that only need part of that window. This complements the runbook; it does not replace it.

```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: dev-api
  namespace: dev
spec:
  scaleTargetRef:
    name: dev-api
  minReplicaCount: 0
  maxReplicaCount: 2
  triggers:
    - type: cron
      metadata:
        timezone: Europe/Amsterdam
        start: 0 8 * * 1-5
        end: 0 20 * * 1-5            # align with the cluster auto-stop window
        desiredReplicas: "1"
```

### Optimize CPU Utilization
**Patterns**: [Optimize Average CPU](https://patterns.greensoftware.foundation/operations/capacity-management/optimize-avg-cpu-utilization), [Optimize Peak CPU](https://patterns.greensoftware.foundation/operations/capacity-management/optimize-peak-cpu-utilization)

- **DO** aim for 50-70% average node CPU; use an HPA to absorb spikes.
- **DON'T** run clusters below ~20% CPU; consolidate workloads or scale nodes down.
- A KEDA `ScaledObject` manages its own HPA, so don't stack a separate HorizontalPodAutoscaler on a KEDA-scaled target.

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 60
```

### Match Node Utilization
**Pattern**: [Match Utilization Requirements](https://patterns.greensoftware.foundation/operations/capacity-management/match-utilization-requirements-of-vm)

- **DO** prefer fewer, larger nodes at higher utilization over many small, under-used nodes. (Node-pool sizing itself is Terraform/CloudFoundation; this is the workload-packing side.)

### Delete Unused Storage and Set Retention
**Patterns**: [Delete Unused Storage](https://patterns.greensoftware.foundation/operations/resource-lifecycle/delete-unused-storage-resources), [Set Retention Policies](https://patterns.greensoftware.foundation/operations/resource-lifecycle/set-retention-policy-on-storage-resources)

- **DO** delete unused Azure Disks, PVCs, and orphaned image layers.
- There is no native PVC TTL annotation. Reclaim storage with a real mechanism: `reclaimPolicy: Delete` on the StorageClass for ephemeral data, Azure Blob lifecycle management for backups, or a scheduled cleanup CronJob. Do not emit fictional `ttl:` annotations.

### Remove Unused Assets (ArgoCD prune)
**Pattern**: [Remove Unused Assets](https://patterns.greensoftware.foundation/operations/resource-lifecycle/remove-unused-assets)

- **DO** keep `automated.prune: true` and `selfHeal: true` so resources removed from Git are deleted (already used across this repo).

```yaml
spec:
  template:
    spec:
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
```

### Optimize Storage Utilization
**Pattern**: [Optimize Storage Utilization](https://patterns.greensoftware.foundation/operations/resource-lifecycle/optimise-storage-resource-utilisation)

- **DO** use `emptyDir` for temporary data instead of a PersistentVolume.
- **DON'T** store large binaries in Git; use Blob Storage.

### Time-Shift Batch CronJobs
**Pattern**: [Time-Shift Kubernetes Cron Jobs](https://patterns.greensoftware.foundation/operations/time-shift-kubernetes-cron-jobs)

This is the one carbon lever the fixed region leaves open: when, not where.

- **DO** schedule non-urgent batch work during lower-carbon daytime hours rather than at midnight.
- Querying real-time carbon intensity ([Electricity Maps](https://www.electricitymaps.com/), [WattTime](https://www.watttime.org/)) is an optional external dependency, reasonable for a few heavy batch jobs, not worth wiring into every CronJob.

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-report
spec:
  schedule: "0 12 * * *"             # midday CET, higher solar share
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
            - name: report-generator
              image: ghcr.io/wigo4it/report-generator:latest
```

### Circuit Breakers
**Pattern**: [Use Circuit Breaker Patterns](https://patterns.greensoftware.foundation/operations/capacity-management/use-circuit-breaker)

- **DO** use Istio `outlierDetection` to fail fast on unhealthy backends; use exponential backoff on retries.

```yaml
apiVersion: networking.istio.io/v1
kind: DestinationRule
metadata:
  name: api
spec:
  host: api
  trafficPolicy:
    outlierDetection:
      consecutiveErrors: 3
      interval: 30s
      baseEjectionTime: 60s
      maxEjectionPercent: 50
```

---

## Chart and Image Selection

### Avoid Bitnami Images
Bitnami's free Debian image catalogue is being wound down, so those images risk going stale and unpatched. Prefer official upstreams:

- `registry.k8s.io/*` for Kubernetes components
- `ghcr.io/*` for GitHub-hosted projects
- `quay.io/*` for Red Hat / community projects
- the upstream project's own registry otherwise

This repo still has roughly 23 references to `bitnami/*`. Treat those as a migration backlog and don't add new ones.

### Managed vs Self-Hosted Is Already Decided for Postgres and Queues
This platform deliberately self-hosts CloudNativePG (hub-prod/nonprod) and RabbitMQ (operator-managed, ikv). Do not propose replacing them with Azure Database for PostgreSQL or Service Bus; that decision is made. For genuinely new components with no existing decision, weigh managed against self-hosted on cost, operational load, and compliance.

---

## Measurement and Observability

Metrics come from the platform observability stack (LGTM / Grafana Mimir on the hub, plus Azure Monitor / Log Analytics). The PromQL below assumes the Mimir endpoint; the same KPIs translate to Azure Monitor KQL where the metric lives there.

| Metric | Target | Source |
|--------|--------|--------|
| Average node CPU utilization | 50-70% | `avg(rate(container_cpu_usage_seconds_total[5m]))` |
| Average memory utilization | 60-80% | `avg(container_memory_working_set_bytes / container_spec_memory_limit_bytes)` |
| Nonprod workloads scaled down outside hours | >80% | KEDA / runbook metrics |
| PVC deletion lag after last use | <7 days | custom audit |
| Unused Helm releases | 0 | `helm list -A \| grep -v deployed` |
| Carbon intensity at deploy time (optional) | <300 gCO2/kWh | Electricity Maps API |

---

## Checklist: Sustainable Component Review

Before merging a PR that adds or changes a workload, verify:

- [ ] **Resource requests and limits** set on every container.
- [ ] **Limits ≤ ~2x requests** to avoid throttling and wasted headroom.
- [ ] **minReplicaCount** matches criticality: `0` for batch/queue/nonprod, `1-2` for user-facing prod.
- [ ] **HPA or KEDA** configured for variable load (not both on the same target).
- [ ] **PodDisruptionBudget** only on prod workloads with `replicaCount >= 2`.
- [ ] **Istio sidecar disabled** where mTLS/traffic-management/observability aren't needed.
- [ ] **seccompProfile.type: RuntimeDefault** and the rest of the Kyverno-enforced security baseline set.
- [ ] **Image is official upstream**, not Bitnami.
- [ ] **Storage cleanup is real** (`reclaimPolicy`, Blob lifecycle, or cleanup CronJob), not a fictional `ttl` annotation.
- [ ] **Batch jobs time-shifted** to lower-carbon daytime hours where timing is flexible.
- [ ] **Circuit breakers / retries** configured for external dependencies.
- [ ] **Any mTLS relaxation** has explicit security sign-off.

---

## Further Reading

- [Green Software Foundation Patterns](https://patterns.greensoftware.foundation/)
- [WIGO4IT Sustainable IT Impact Assessment](https://www.wigo4it.nl/nieuws/sustainable-it-impact-assessment-siia-vermeld-wigo4it-als-voorbeeld/)
- [Kubernetes Resource Management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)
- [KEDA Scalers](https://keda.sh/docs/latest/scalers/)
- [Electricity Maps](https://www.electricitymaps.com/) — real-time grid carbon intensity

---

## Enforcement

- **Agent**: `security-reviewer` flags sustainability and security violations in PRs.
- **Tool**: `kustomize-validate.sh` checks that resource requests and limits are present.
- **Policy**: Kyverno enforces the `RuntimeDefault` seccomp profile and resource constraints.

Every platform engineer is also a sustainability engineer: challenge wasteful patterns, and keep the rule above the example. 🌱

## Where can I read more about this?
- <a href="https://greensoftware.foundation/articles/sustainable-ai">Green Software Foundation: Sustainable AI</a>
- <a href="https://arxiv.org/abs/1906.02629">Strubell et al.: Energy and Policy Considerations for Deep Learning in NLP</a>
- <a href="https://www.microsoft.com/en-us/research/blog/green-ai/">Microsoft Research: Green AI</a>
