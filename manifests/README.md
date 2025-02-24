This directory contains the Kubernetes manifest files for deploying our application on any kubernetes env hosted locally or on cloud 

## How to Apply the Manifests

To deploy or update the application in your Kubernetes cluster, use the `kubectl apply` command.

1.  **Navigate to the Manifest Directory:**

    ```bash
    cd manifest
    ```

    Replace `<path-to-your-manifests-directory>` with the actual path to the directory containing your manifest files (e.g., `k8s`, `manifests`).

2.  **Apply the Manifests:**

    * To apply all manifest files in the directory, use the following command:

        ```bash
        kubectl apply -f deployment.yaml service-nodeport.yaml
        ```

    * To apply a specific manifest file, use the following command:

        ```bash
        kubectl apply -f your-manifest-file.yaml
        ```