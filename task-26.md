
List of Issues and Explanations
❌ Typo: stesp instead of steps
Issue:
The Build stage used stesp instead of steps.

Why it’s a problem:
Jenkins pipelines require the correct steps keyword to define the commands to be executed.

Fix:
Changed stesp → steps.

❌ Invalid command: npm build
Issue:
npm build isn’t a default npm command.

Why it’s a problem:
Unless you’ve explicitly defined a build command in your npm scripts, this will fail.
Standard convention is to use npm run build.

Fix:
Replaced npm build with npm run build.

⚠️ Branch condition uses master
Issue:
The Deploy stage runs only when on the master branch.

Why it’s a problem:
Many modern repositories default to main instead of master for the primary branch.

Fix:
Updated to branch 'main'.
(Adjust depending on your actual repo default branch.)

⚠️ Docker image push lacks registry context and unique tagging
Issue:
docker push myapp:latest will push to Docker Hub (or default registry) using the latest tag.

Why it’s a problem:
Using latest makes it hard to track builds. Best practice is to tag images with unique identifiers (like the Jenkins build number).

Fix suggestion:
Optionally tag images with ${env.BUILD_NUMBER} or another unique value. Example:
docker build -t myapp:${env.BUILD_NUMBER} .

✅ Summary
#	Issue	Explanation	Fix
1	Typo in stesp	Jenkins expects steps keyword.	Correct to steps
2	npm build is invalid	Standard is npm run build for custom scripts.	Change to npm run build
3	Branch check on master	Most repos now use main.	Update to match your repo branch
4	Docker image tagging	Using latest lacks traceability.	Tag with unique build numbers