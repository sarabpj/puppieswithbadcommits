# Example of Bad Git Workflow

1. Both users clone the same repo and gets setup (npm install, knex migrate:latest)
2. User1 decides that a puppy's age isn't important anymore.  Change migration to have puppy name and breed.
3. User1 drops db, migrates again, displays breed instead of age in views.
4. User2 decides how the age is displayed is bad.  Changes the view to display age differently.  Commits
5. User1 pushes to github
6. User2 pulls from master

