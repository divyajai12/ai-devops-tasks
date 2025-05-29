May 19 10:15:32 server dockerd[1234]: time="2025-05-19T10:15:32.123456789Z" level=info msg="Container 78a2b3c4 health status changed from starting to healthy"
May 19 10:16:45 server dockerd[1234]: time="2025-05-19T10:16:45.987654321Z" level=info msg="Container 78a2b3c4 failed to connect to 172.17.0.3:5432: connection refused"
May 19 10:16:47 server dockerd[1234]: time="2025-05-19T10:16:47.246813579Z" level=warning msg="Container 78a2b3c4 health status changed from healthy to unhealthy"
The container (ID: 78a2b3c4) initially starts and passes its health check, so its status changes from "starting" to "healthy."
Shortly after, the container tries to connect to another service at IP 172.17.0.3 on port 5432 (the default port for PostgreSQL), but the connection is refused—meaning nothing is listening on that port at that time.
Because of this failed connection, the container’s health check fails, and its status changes from "healthy" to "unhealthy."
Issues identified:
Database Unavailable: The application container cannot connect to the database at 172.17.0.3:5432. This could be because the database container is not running, is still starting up, or is not accessible due to network issues.
Health Check Failure: The application’s health check depends on being able to connect to the database. When it fails, Docker marks the container as unhealthy, which can disrupt service.
Possible Network Misconfiguration: If containers are not on the same Docker network or if the application is using a hardcoded IP instead of a service name, connectivity issues can occur.
Summary:
The logs show that your application container starts healthy but becomes unhealthy because it cannot connect to its database. The main issue is the unavailability or inaccessibility of the database at the expected address and port.
