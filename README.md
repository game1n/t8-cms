# T8 CMS

T8 is a minimal CMS for static sites and blogs.

[![npm version](https://badge.fury.io/js/t8-cms.svg)](https://badge.fury.io/js/t8-cms)

##### Tech Stack
  - ReactJS
  - TypeScript 
  - Material UI 
  - Styled Components
  - Supabase(BaaS)

## Project Folder Structure
```
-src
    -navigation
    -config
    -screens
    -components
-public
-package.json
```
      


##### How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/game1n/t8-cms/pulls)

- Take a look at the existing [Issues](https://github.com/game1n/t8-cms/issues) or [create a new issue](https://github.com/game1n/t8-cms/issues/new)!
- [Fork the Repo](https://github.com/game1n/t8-cms/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/game1n/t8-cms/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

##### Running the project

1.Clone the repo:

```bash 
git clone https://github.com/game1n/t8-cms.git
```

2. Navigate to the cloned directory:

```bash
cd t8-cms 
```

3. Install dependencies:

```bash 
yarn install
```

4. Run the project

```bash 
yarn start
```

5. Open the browser to visit the website at http://localhost:3000



##### DB Setup

The DDL file `t8_ddl.sql` for setting up tables is present in `./resources/postgres/`. It has the DDL for the all the tables required for t8 and the steps to run this file to setup your local postgres DB are present in the file. Since we currently don't support local DB access and are directly using Supabase, you can refer the DDL for table schema and index to setup your own Supabase DB to work with t8.

