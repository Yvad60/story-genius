# Story Genius

Generate Jira user stories with AI

## Setup

### Tunneling

With the current version of Forge running `forge tunnel` causes a ngrokError because `forge tunnel` command uses `ngrok` internally and `ngrok` requires authentication to establish a connection.
To fix this we need to authenticate with `ngrok` and provide our athentication when running `forge tunnel`

- Check out the `ngrok.sample.yml` for more information.
- Create a `ngrok.yml` file and Copy the content from `ngrok.sample.yml` (change the `authtoken` with the actual value from the `ngrok` dashboard)
- When running `forge tunnel` specify the path to your `ngrok` config as `forge tunnel --ngrok-config <path to your ngrok.yml>`

#### Important update

If you are using forge CLI version 7.0.0 or higher. `forge tunnel` command no longer accepts the `--ngrok-config` flag. instead the path to `ngrok` config is passed through `forge settings set ngrok-config-path <file>` command.
Note that the path to the `ngrok` file has to be absolute. 
