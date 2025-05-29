Explanation of the Relationships Between Pipeline Stages:
Checkout Code → Build
Relationship:
The pipeline begins by retrieving the latest source code from the version control system (like Git).
This code is required before any build or test operations can proceed.

Build → Test
Relationship:
After fetching the code, the application is built (compiled or bundled, depending on language).
Once a build artifact or executable exists, you can run unit tests to validate individual components.

Test → Static Code Analysis
Relationship:
Once functional correctness is validated by tests, static code analysis examines code quality, coding standard violations, potential bugs, and maintainability issues — without executing the code.

Static Code Analysis → Security Checks
Relationship:
After ensuring code quality, the pipeline performs security scans on the codebase or dependencies to detect vulnerabilities like outdated packages, known exploits, or insecure configurations.

Security Checks → Build Docker Image
Relationship:
If the code passes quality and security gates, it’s packaged into a Docker image.
This image is a deployable container containing your application and its environment.

Build Docker Image → Integration Tests
Relationship:
The newly built Docker image is deployed to a test environment, where integration tests run to verify the entire system (e.g. APIs, services, databases) work together as expected.

Integration Tests → Deploy to Staging
Relationship:
If integration tests succeed, the image is deployed to a staging environment — a production-like setup for final validation, often used for UAT (User Acceptance Testing) or QA.

Deploy to Staging → Deploy to Production
Relationship:
After final testing and approval in staging, the same image is promoted to production, ensuring that the tested artifact is the one deployed — preventing "it works on staging but not in production" issues.


