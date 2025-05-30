import jenkins
import getpass

def connect_to_jenkins(url, username, password):
    try:
        server = jenkins.Jenkins(url, username=username, password=password)
        user = server.get_whoami()
        version = server.get_version()
        print(f"Connected to Jenkins {version} as {user['fullName']}\n")
        return server
    except Exception as e:
        print(f"Failed to connect to Jenkins: {e}")
        exit(1)

def list_jobs(server):
    try:
        jobs = server.get_jobs()
        print("Available Jenkins Jobs:")
        for job in jobs:
            print(f"- {job['name']}")
        print()
    except Exception as e:
        print(f"Error fetching jobs: {e}")

def check_latest_build_status(server, job_name):
    try:
        job_info = server.get_job_info(job_name)
        last_build = job_info.get('lastCompletedBuild')
        if not last_build:
            print(f"No completed builds for job '{job_name}'")
            return
        build_info = server.get_build_info(job_name, last_build['number'])
        status = build_info['result']
        print(f"Latest build for '{job_name}': #{last_build['number']} - Status: {status}")
    except Exception as e:
        print(f"Error fetching build status for job '{job_name}': {e}")

def trigger_job(server, job_name):
    try:
        server.build_job(job_name)
        print(f"Triggered job '{job_name}' successfully.")
    except Exception as e:
        print(f"Error triggering job '{job_name}': {e}")

def main():
    # Jenkins credentials and URL
    jenkins_url = input("Jenkins URL (e.g., http://localhost:8080): ")
    username = input("Username: ")
    password = getpass.getpass("API Token or Password: ")

    server = connect_to_jenkins(jenkins_url, username, password)

    # List jobs
    list_jobs(server)

    # Check latest build status for a selected job
    job_name = input("Enter the job name to check its latest build status: ")
    check_latest_build_status(server, job_name)

    # Trigger a selected job
    trigger_choice = input(f"Do you want to trigger '{job_name}'? (y/n): ").lower()
    if trigger_choice == 'y':
        trigger_job(server, job_name)

if __name__ == "__main__":
    main()