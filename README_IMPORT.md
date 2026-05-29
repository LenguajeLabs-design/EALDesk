## EALDesk import notes

This folder is a cleaned export of the Replit project, prepared for upload into the GitHub repository `LenguajeLabs-design/EALDesk`.

### Project shape

- Root workspace uses `pnpm`
- Main frontend app: `artifacts/english-lab-planner`
- API server: `artifacts/api-server`
- Shared packages: `lib/*`
- Optional mockup playground: `artifacts/mockup-sandbox`

### Suggested next steps in GitHub

1. Upload the contents of this folder into the repository root.
2. In GitHub Codespaces or your local machine, run `pnpm install`.
3. Start the frontend from `artifacts/english-lab-planner`.
4. Start the API server from `artifacts/api-server` if the app expects backend routes.

### Notes

- This export originally included Replit cache and metadata files. Those were excluded from this cleaned folder.
- I was not able to run a full install or build from this session because network access for package installation and GitHub push was unavailable here.
