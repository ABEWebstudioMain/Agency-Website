# 58agents-unit05 – Company Website (Team 1005)

This repository contains the source code for the **Company Landing Page of Team 1005** within **58Agents**.

---

## 🚀 Getting Started

After cloning the repository, several steps need to be performed to prepare the local development environment.

### ✅ Prerequisites

* **Node.js** (recommended: manage versions with [`nvm`](https://github.com/nvm-sh/nvm))
* Check the required Node.js version in the `package.json` file.

---

### 🔧 Setting up Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the local development server**

   ```bash
   npm run dev
   ```

   * After startup, the application URL will be shown in the console.
   * By default, the app runs at: [http://localhost:3000](http://localhost:3000)

---

### 🔑 Environment Variables

Since the application uses external services, several environment variables are required.
These can be stored in a **`.env.local`** file. Example:

```env
AWS_SES_REGION={{ value }}
AWS_SES_ACCESS_KEY_ID={{ value }}
AWS_SES_SECRET_ACCESS_KEY={{ value }}
NEXT_PUBLIC_RECAPTCHA_WEB={{ value }}
NEXT_PUBLIC_RECAPTCHA_SITE_KEY={{ value }}
NEXT_PUBLIC_COOKIE_FIRST={{ value }}
NEXT_PUBLIC_GTM_ID={{ value }}
```

---

### 📚 Helpful Resources for Development

* [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)
* [GitHub ↔︎ GCP WIF Authentication](https://github.com/google-github-actions/auth?tab=readme-ov-file#authenticate-to-google-cloud-from-github-actions)
* [GCP Project](https://console.cloud.google.com/welcome?project=sound-datum-331115)
* [GCP Artifact Repository](https://console.cloud.google.com/artifacts/docker/sound-datum-331115/europe-west3/x58agents-unit05/58agents-unit05)
* [GCP Cloud Run Service](https://console.cloud.google.com/run/detail/europe-west3/x58agents-unit05/metrics)
* [Cookie Consent Management](https://app.cookiefirst.com/)
* [Check CSP Config](https://securityheaders.com/)

---

## 🏗️ Creating a Production Build

* The deployment uses a **Docker container** that is distributed via **Google Cloud Run**.
* Local production builds are generally **not required**, but can be created as follows:

```bash
npm run build
```

---

## 🐳 Running the Application in Docker

1. **Build the container image**
   All `NEXT_PUBLIC_*` variables must be provided at build time:

   ```bash
   docker build \
       --build-arg NEXT_PUBLIC_COOKIE_FIRST=https://consent.cookiefirst.com/sites/faastball.com-5b3b4aff-190f-4a1d-9993-eb000bd9e8a8/consent.js \
       --build-arg NEXT_PUBLIC_RECAPTCHA_WEB=6Ldy9fopAAAAAG_2HW-0UU9EfAaHX0Kka-hI7_yJ \
       --build-arg NEXT_PUBLIC_GTM_ID=GTM-NLFH8FZ8 \
       -t 58agents-unit05 .
   ```

2. **Run the container locally**

   ```bash
   docker run \
       -p 3000:3000 \
       --env-file .env.local \
       58agents-unit05
   ```

   * The app will be available afterwards at: [http://localhost:3000](http://localhost:3000)

---

## 📂 Application Structure

* `config/` → JSON files for general configuration
* `content/` → Markdown files (`.md`) with YAML frontmatter, representing the site structure

> ⚠️ Make sure to always provide **valid syntax**. Invalid config or content files may break the application.

---

## 🆘 Support & Questions

If you need support with running the app locally or have questions about the deployment process, please contact **JFS**.

---

## ☁️ Deployment via GCP Cloud Run

To deploy the website as a container image on **Google Cloud Run**, several **manual steps** need to be performed in GCP.

---

### 1. Access the GCP project `58agents-web` (`sound-datum-331115`)

👉 [Verify project access](https://console.cloud.google.com/welcome/new?authuser=2&inv=1&invt=Ab55Nw&project=sound-datum-331115)

---

### 2. Create an Artifact Registry repository

* Name: `x58agents-unit05`
* Region: `europe-west3`

👉 [Create repository](https://console.cloud.google.com/artifacts?authuser=2&inv=1&invt=Ab55Nw&project=sound-datum-331115)

---

### 3. Create a Cloud Run service

* Service name: `x58agents-unit05`
* Region: `europe-west3`

👉 [Create service](https://console.cloud.google.com/run?authuser=2&project=sound-datum-331115&inv=1&invt=Ab55Pw)

> Note: First select a demo image, then it can be updated later.

---

### 4. Create a Workload Identity Provider

Set the following variables:

```bash
export PROJECT_ID=sound-datum-331115
export WORKLOAD_IDENTITY_POOL_ID=projects/257564014470/locations/global/workloadIdentityPools/github
export WORKLOAD_PROVIDER_NAME=58agents-unit05
export REPO=58agents/58agents-unit05
export GITHUB_ORG=58agents
```

Create the provider:

```bash
gcloud iam workload-identity-pools providers create-oidc "${WORKLOAD_PROVIDER_NAME}" \
--project="${PROJECT_ID}" \
--location="global" \
--workload-identity-pool="github" \
--display-name="58agents-unit05 Repo Provider" \
--attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
--attribute-condition="assertion.repository_owner == '${GITHUB_ORG}'" \
--issuer-uri="https://token.actions.githubusercontent.com"
```

---

### 5. Retrieve provider information

Save this value later as **GitHub Secret `GCP_WORKLOAD_IDENTITY_PROVIDER`**:

```bash
gcloud iam workload-identity-pools providers describe "${WORKLOAD_PROVIDER_NAME}" \
--project="${PROJECT_ID}" \
--location="global" \
--workload-identity-pool="github" \
--format="value(name)"
```

---

### 6. Create a Service Account & grant permissions

```bash
export SA_PREFIX=x58agents-unit05

gcloud iam service-accounts create "${SA_PREFIX}" --project "${PROJECT_ID}"

gcloud iam service-accounts add-iam-policy-binding "${SA_PREFIX}@${PROJECT_ID}.iam.gserviceaccount.com" \
--project="${PROJECT_ID}" \
--role="roles/iam.workloadIdentityUser" \
--role="roles/run.admin" \
--role="roles/iam.serviceAccountUser" \
--member="principalSet://iam.googleapis.com/${WORKLOAD_IDENTITY_POOL_ID}/attribute.repository/${REPO}"
```

---

### 7. Configure GitHub Secrets & Variables

To make the deployment pipeline work, you must configure the required **GitHub Secrets** and **Repository Variables**.

#### Required GitHub Secrets

* `GCP_WORKLOAD_IDENTITY_PROVIDER` → value retrieved in step 5
* `GCP_SERVICE_ACCOUNT_NAME` → e.g. `x58agents-unit05@sound-datum-331115.iam.gserviceaccount.com`
* `AWS_SES_REGION` → AWS SES region value
* `AWS_SES_ACCESS_KEY_ID` → AWS SES access key
* `AWS_SES_SECRET_ACCESS_KEY` → AWS SES secret key
* `RECAPTCHA_SECRET` → reCAPTCHA backend secret key

#### Required GitHub Repository Variables

* `GCP_PROJECT_ID` → `sound-datum-331115`
* `GCP_REGION` → `europe-west3`
* `GCP_ARTIFACT_REGISTRY_REPOSITORY_NAME` → `x58agents-unit05`
* `GCP_ARTIFACT_REGISTRY_IMAGE_NAME` → image name, e.g. `58agents-unit05`
* `GCP_CLOUD_RUN_SERVICE_NAME` → `x58agents-unit05`
* `NEXT_PUBLIC_COOKIE_FIRST` → public cookie consent URL
* `NEXT_PUBLIC_RECAPTCHA_WEB` → public reCAPTCHA site key
* `NEXT_PUBLIC_GTM_ID` → Google Tag Manager ID

Once these are configured, the provided GitHub Actions workflow (`deploy.yml`) will:

1. Authenticate against GCP using Workload Identity Federation.
2. Build and push the Docker image to Artifact Registry.
3. Deploy the image to Cloud Run with the necessary environment variables.
4. Output the Cloud Run service URL.

---

### 7. Grant project-level permissions to the Service Account (recommended)

Ensure the Service Account has the necessary roles at the **project level** to build and deploy:

```bash
# Artifact Registry write access (push images)
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${SA_PREFIX}@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

# (Optional) Viewer for general read access
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${SA_PREFIX}@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/viewer"
```

> You already granted `run.admin` and `iam.serviceAccountUser` above for Cloud Run deploys.

---

## 🔐 CI/CD: GitHub Actions Pipeline & Required Secrets/Variables

This project ships with a GitHub Actions workflow that builds a Docker image and deploys it to **Cloud Run**. To make it work, configure **Repository Variables** and **Repository Secrets** as described below.

### A) Create GitHub Repository **Variables** (Settings → *Secrets and variables* → *Actions* → **Variables**)

| Variable Name                           | Example                                          | Purpose                                    |
| --------------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| `GCP_PROJECT_ID`                        | `sound-datum-331115`                             | GCP project to deploy to                   |
| `GCP_REGION`                            | `europe-west3`                                   | Region for Artifact Registry & Cloud Run   |
| `GCP_ARTIFACT_REGISTRY_REPOSITORY_NAME` | `x58agents-unit05`                               | Artifact Registry repository name          |
| `GCP_ARTIFACT_REGISTRY_IMAGE_NAME`      | `58agents-unit05`                                | Container image name inside the repository |
| `GCP_CLOUD_RUN_SERVICE_NAME`            | `x58agents-unit05`                               | Cloud Run service name                     |
| `NEXT_PUBLIC_COOKIE_FIRST`              | `https://consent.cookiefirst.com/.../consent.js` | Public build arg for cookie consent        |
| `NEXT_PUBLIC_RECAPTCHA_WEB`             | `6Lxxxxxxxxxxxxxxxxxxxxxxxx`                     | Public build arg for reCAPTCHA site key    |
| `NEXT_PUBLIC_GTM_ID`                    | `GTM-XXXXXXX`                                    | Public build arg for Google Tag Manager ID |

> **Note:** Variables are injected via `${{ vars.* }}` and are suitable for **non-sensitive** values (incl. public build args).

### B) Create GitHub Repository **Secrets** (Settings → *Secrets and variables* → *Actions* → **Secrets**)

| Secret Name                      | How to obtain / example                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Output of step **5** above (e.g. `projects/…/locations/global/workloadIdentityPools/github/providers/58agents-unit05`)                                                                |
| `GCP_SERVICE_ACCOUNT_NAME`       | The **email** of the Service Account created in step **6**: `${SA_PREFIX}@${PROJECT_ID}.iam.gserviceaccount.com` (e.g. `x58agents-unit05@sound-datum-331115.iam.gserviceaccount.com`) |
| `AWS_SES_REGION`                 | Your AWS SES region (e.g. `eu-central-1`)                                                                                                                                             |
| `AWS_SES_ACCESS_KEY_ID`          | AWS IAM Access Key with SES permissions                                                                                                                                               |
| `AWS_SES_SECRET_ACCESS_KEY`      | Secret for the above Access Key                                                                                                                                                       |
| `RECAPTCHA_SECRET`               | Server-side reCAPTCHA secret from Google reCAPTCHA admin                                                                                                                              |

> **Sensitive values** must be stored as **Secrets**. These are injected via `${{ secrets.* }}`.

### C) Optional: Limit which repos can use the provider

If you created the provider with the `attribute-condition` shown above, it is already **restricted to your GitHub org**. You can additionally scope to a **single repository** by using the mapping with `attribute.repository == '58agents/58agents-unit05'` and updating the `gcloud` command accordingly.

---

## 🤖 GitHub Actions Workflow (Build & Deploy to Cloud Run)

Copy this file to `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy to Cloud Run

on:
  workflow_dispatch:
  push:
    branches: [ "main" ]

env:
  # Branch name (works for push and PRs)
  BRANCH_NAME: ${{ github.head_ref || github.ref_name }}
  # GCP project id
  PROJECT_ID: ${{ vars.GCP_PROJECT_ID }}
  # GCP region used generally (e.g. Cloud Run and Artifact Registry)
  REGION: ${{ vars.GCP_REGION }}
  # GCP Artifact Registry Host
  REGISTRY: "-docker.pkg.dev"
  # GCP Artifact Registry Repository
  REPOSITORY: ${{ vars.GCP_ARTIFACT_REGISTRY_REPOSITORY_NAME }}
  # GCP Artifact Registry Repository Image
  IMAGE: ${{ vars.GCP_ARTIFACT_REGISTRY_IMAGE_NAME }}
  # GCP Cloud Run service name
  SERVICE: ${{ vars.GCP_CLOUD_RUN_SERVICE_NAME }}

jobs:
  deploy:
    permissions:
      contents: read
      id-token: write

    runs-on: ubuntu-latest
    steps:
      # Checkout repository
      - name: Checkout
        uses: actions/checkout@v4

      # Authenticate Github Actions against GCP (via Workload Identity Federation)
      - name: Google Auth
        id: auth
        uses: google-github-actions/auth@v2
        with:
          token_format: access_token
          workload_identity_provider: ${{ secrets.GCP_WORKLOAD_IDENTITY_PROVIDER }}
          service_account: ${{ secrets.GCP_SERVICE_ACCOUNT_NAME }}

      # Authenticate Docker to Google Cloud Artifact Registry
      - name: Docker Auth
        id: docker-auth
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGION }}-docker.pkg.dev
          username: oauth2accesstoken
          password: ${{ steps.auth.outputs.access_token }}

      # Build application as Docker container image
      - name: Build and push container image
        id: docker-build
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            ${{ env.REGION }}${{ env.REGISTRY }}/${{ env.PROJECT_ID }}/${{ env.REPOSITORY }}/${{ env.IMAGE }}:${{ env.BRANCH_NAME }}-${{ github.sha }}
          build-args: |
            NEXT_PUBLIC_COOKIE_FIRST=${{ vars.NEXT_PUBLIC_COOKIE_FIRST }}
            NEXT_PUBLIC_RECAPTCHA_WEB=${{ vars.NEXT_PUBLIC_RECAPTCHA_WEB }}
            NEXT_PUBLIC_GTM_ID=${{ vars.NEXT_PUBLIC_GTM_ID }}

      # Deploy the Docker container image to Cloud Run
      - name: Deploy to Cloud Run
        id: deploy
        uses: google-github-actions/deploy-cloudrun@v2
        with:
          service: ${{ env.SERVICE }}
          region: ${{ env.REGION }}
          image: ${{ env.REGION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.REPOSITORY }}/${{ env.IMAGE }}:${{ env.BRANCH_NAME }}-${{ github.sha }}
          env_vars: |
            AWS_SES_REGION=${{ secrets.AWS_SES_REGION }}
            AWS_SES_ACCESS_KEY_ID=${{ secrets.AWS_SES_ACCESS_KEY_ID }}
            AWS_SES_SECRET_ACCESS_KEY=${{ secrets.AWS_SES_SECRET_ACCESS_KEY }}
            RECAPTCHA_SECRET=${{ secrets.RECAPTCHA_SECRET }}

      - name: Show Output
        run: echo ${{ steps.deploy.outputs.url }}
```

### Notes

* The workflow uses **WIF (Workload Identity Federation)**, so you **do not** need to store GCP JSON keys in GitHub.
* Public build args (`NEXT_PUBLIC_*`) are passed via **Variables**; server-side secrets are injected at **deploy time** to Cloud Run.
* The container tag includes both the branch name and commit SHA for easy rollbacks.

---

## ✅ End-to-End Checklist

1. GCP project access confirmed.
2. Artifact Registry repository created.
3. Cloud Run service created (can be created on first deploy as well).
4. Workload Identity Provider created & restricted to your org/repo.
5. Provider name copied into GitHub Secret `GCP_WORKLOAD_IDENTITY_PROVIDER`.
6. Service Account created with roles and principal binding.
7. Project-level roles added: `artifactregistry.writer` (and optionally `viewer`).
8. GitHub **Variables** and **Secrets** set as listed above.
9. `.github/workflows/deploy.yml` committed to the repo.
10. Push to `main` or run the workflow via **Run workflow** in GitHub Actions.

---
