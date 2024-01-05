# Story Genius

Generate Jira user stories with AI

## Setup

### Tunneling

With the current version of Forge running `forge tunnel` causes a ngrokError because `forge tunnel` command uses `ngrok` internally and `ngrok` requires authentication to establish a connection.
To fix this we need to authenticate with `ngrok` and provide our athentication when running `forge tunnel`

- Check out the `ngrok.sample.yml` for more information.
- Create a `ngrok.yml` file and Copy the content from `ngrok.sample.yml` (change the `authtoken` with the actual value from the `ngrok` dashboard)
- When running `forge tunnel` specify the path to your `ngrok` config as `forge tunnel --ngrok-config <path to your ngrok.yml>`
