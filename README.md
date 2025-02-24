# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






## Local Development with Docker

To build and run the application locally using Docker, follow these steps:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/ChaituKNag/supercharged-todos.git
    cd supercharged-todos
    ```

2.  **Build the Docker Image:**

    * **Production Build:**
        ```bash
        docker build . --file Dockerfile1 --tag superchargedtodo:v1  #Any Version as per your choice 
        ```

3.  **Run the Docker Container:**

    * **Production Build:**
        ```bash
        docker run -it -d -p 80:80 superchargedtodo:v1
        ```
        * Open your browser and navigate to `http://localhost`.
    * **Development Build:**
        ```bash
        docker run -p 5173:5173 -it your-image-name:dev
        ```
        * Open your browser and navigate to `http://localhost:5173`.

4.  **Stop the Container:**

    * To stop the running container, press `Ctrl+C` in the terminal where you started it, or use the command:
        ```bash
        docker stop <container_id_or_name>
        ```
        * You can find the container ID or name by running `docker ps`.

**Important Considerations:**

* **Dockerfile Location:** If your Dockerfile is not in the root directory, specify the correct path using the `-f` flag in the `docker build` command.
* **Port Mapping:** Ensure that the port mapping (`-p`) in the `docker run` command matches the port exposed by your application in the Dockerfile.
* **Development vs. Production:** If you have separate Dockerfiles for development and production, clearly indicate which one to use.
* **Environment Variables:** If your application requires environment variables, explain how to set them using the `-e` flag in the `docker run` command or by using a `.env` file and the `--env-file` flag.
* **Docker Compose (Optional):** If your application uses Docker Compose, provide instructions for using `docker-compose up` and `docker-compose down`.
* **Troubleshooting:** 

* **OS Specific Instructions:** npm is required 
    for Debian based system's 
    ```bash 
    apt-get install npm  or  apt install npm
    npm install  # from the source code directory
    npm run dev  # 
    npm run build

**Example with Environment Variables:**

```markdown
## Local Development with Docker

...

3.  **Run the Docker Container with Environment Variables:**

    ```bash
    docker run -p 5173:5173 -e API_ENDPOINT=http://localhost:8080 -it your-image-name:dev
    ```

...