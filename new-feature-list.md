# Step-by-step list for a new feature

- git status
  # Check the current state of the repository to ensure it's clean

- git pull origin main
  # Get the latest changes from the remote main branch

- git branch -a
  # List all existing branches (local and remote) to avoid naming conflicts

- git checkout -b feature/new-feature-name
  # Create and switch to a new descriptive feature branch

- git status
  # Confirm you're on the new branch and everything is clean

# Now make your changes (edit/add files)...

- git add .
  # Stage all changes

- git commit -m "Implement [clear description of the feature]"
  # Commit with a meaningful message

- git push origin feature/new-feature-name
  # Push the new branch to GitHub

# Then go to GitHub and create a Pull Request to merge into main

- git status
  # Final check