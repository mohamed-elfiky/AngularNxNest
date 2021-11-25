# Monorepo

## why use monorepo?

### Shared code and visibility 
- Keeps your code DRY across your entire organization. 
- Reuse validation code, UI components, and types across the codebase. 
- Reuse code between the backend, the frontend, and utility libraries.

### Atomic changes 
- Change a server API and modify the downstream applications that consume that API in the same commit. 
- You can change a button component in a shared library and the applications that use that component in the same commit. 
- A monorepo saves the pain of trying to coordinate commits across multiple repositories.

### Developer mobility
- Get a consistent way of building and testing applications written using different tools and technologies. 
- Developers can confidently contribute to other teams’ applications and verify that their changes are safe.

### Single set of dependencies 
- Use a single version of all third-party dependencies, reducing inconsistencies between applications. 
- Less actively developed applications are still kept up-to-date with the latest version of a framework, library, or build tool.

## folder organization

### LIFT principle (Locate, Identify, Flattest structure, Try to be Dry)
- in short terms:
    - Make locating intuitive & fast.
    - Naming files s.t they communicate content.
    - Keep folder structure as flat as possible

- When we talk about flat folder structure combined with uncle bob's screaming architecture (the architecture should scream the intent of the business) we get functional organization (organize by feature).


## CI

### overview of steps:
- A root pipeline will be triggered with any change in the monorepo.
- The root pipeline shall detect the affected apps, and it will trigger their pipelines accordingly.
- The root pipeline dockerizes a base image that contain the src (apps, libs) and the installed packages.
- Each app pipeline dokereizes it's own image and pull the base image from the registry.

### challenges 
The more code you add to the monorepo, the slower the CI might get.
More about that in Critique section.

### CI the NX way
There are 2 approaches: 
- Root pipeline and pipeline for each app:
  - we setup a root pipeline, for each docker image.
  - we setup a pipeline in each app that get's triggered by changes in those folder.
  - rename the pipelines in Devops UI.
  - use trigger.
  - change working directories.
  - visit https://github.com/julie-ng/azure-pipelines-monorepo for more info.

- Single pipeline:
  - let NX take care of rebuilding what needs to be rebuild.
## monorepo, a critique.


## NX
### nx folder structure.
- the apps folder should be as light-weight as possible
- all the heavy lifting should be in the libs folder
- the tools folder is for script that acts on your code, like database script(seeding for ex), deploy scripts, ..
- nx.json and workspaces.json helps nx how your apps and libs relate to each other.