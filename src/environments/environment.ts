// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAwMND1TJ-dzM4dtEpaplGiSvTEaojxeFE",
    authDomain: "project-2966895523221308821.firebaseapp.com",
    databaseURL: "https://project-2966895523221308821.firebaseio.com",
    projectId: "project-2966895523221308821",
    storageBucket: "project-2966895523221308821.appspot.com",
    messagingSenderId: "571506926720"
  },
  scopes: {
    google: [
      {
        name: "https://www.googleapis.com/auth/cloud-platform",
        description:
          "View and manage your data across Google Cloud Platform services"
      }
    ],
    github: [
      {
        name: "user",
        description:
          "Grants read/write access to profile info only. Note that this scope includes user:email and user:follow."
      },
      {
        name: "repo",
        description:
          "Grants read/write access to code, commit statuses, invitations, collaborators, adding team memberships, and deployment statuses for public and private repositories and organizations."
      }
    ]
  }
};
