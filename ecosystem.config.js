module.exports = {
  apps: [
    {
      name: "frontend",
      cwd: "/home/ubuntu/terraformassign/frontend",
      script: "npm",
      args: "start",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    },
    {
      name: "backend",
      cwd: "/home/ubuntu/terraformassign/backend",
      // Direct path to the virtualenv's gunicorn executable:
      script: "/home/ubuntu/terraformassign/backend/venv/bin/gunicorn",
      args: "-w 2 -b 0.0.0.0:5000 app:app",
      interpreter: "none",
      env: {
        FLASK_ENV: "production"
      }
    }
  ]
};