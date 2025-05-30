This Python script uses the Jenkins REST API via the python-jenkins library to perform three main operations:

Connect to a Jenkins server using credentials

List all configured jobs on that server

Check the latest build status of a selected job

Trigger a build for a selected job

The script handles:

User authentication

Input prompts

Error handling for failed connections, job lookups, and API issues

📦 Libraries Used
Library	Purpose
jenkins (python-jenkins)	Provides a Python wrapper for Jenkins REST API
getpass	Securely handle password/token input from the user without echoing it to the console

Key Functions in the Script
Function	What it Does
connect_to_jenkins()	Connects to Jenkins using provided URL, username, and token
list_jobs()	Lists all jobs available on the Jenkins server
check_latest_build_status()	Gets the latest completed build for a job and displays its status
trigger_job()	Starts a new build of a selected Jenkins job
Notes
API Token vs Password:
Using an API token is safer than a password, especially for Jenkins servers exposed to the network.

Permissions:
The Jenkins user must have:

Job/View permission to list jobs

Job/Build permission to trigger builds

Job/Read permission to query build statuses

Jenkins URL:
This is typically http://localhost:8080 for local servers, or your Jenkins server's actual address.


