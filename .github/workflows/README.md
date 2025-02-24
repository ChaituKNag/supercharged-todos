# CI/CD Documentation

This document describes the CI/CD workflows used in this repository.

## Workflows

### Build and Test (build-and-test.yml)

This workflow builds and tests the application on every push to the `main` branch and on pull requests.

* **Steps:**
    1.  Checkout code
    2.  Install dependencies
    3.  Run tests
* **Environment Variables:**
    * `NODE_ENV`: Set to `test` for testing.

### Docker Build and Push (reactBuild.yml)

This workflow builds and pushes a Docker image to Docker Hub on every push to the `main` branch.

* **Steps:**
    1.  Checkout code
    2.  Build Docker image
    3.  Push Docker image to Docker Hub
* **Secrets:**
    * `DOCKER_HUB_USERNAME`
    * `DOCKER_HUB_TOKEN`

## Deployment

The application is deployed to a Kubernetes cluster using the following manifest files:

* `k8s/deployment.yaml`
* `k8s/service-nodeport.yaml`   test locally with any kubernetes engine
* `k8s/ingress.yaml`

## Troubleshooting

* **Build failures:** Check the test logs for errors.
* **Docker push failures:** Verify Docker Hub credentials.

## Contributing

To contribute to the CI/CD setup, please follow these guidelines:

* ...