# cyclonedx-dotnet-generate

Initial version based on the official CycloneDX Github Action.
https://github.com/CycloneDX/gh-dotnet-generate-sbom

## Inputs

### `path`

**Required** The path to a .sln, .csproj, .vbproj, or packages.config file or the path to a directory which will be recursively analyzed for packages.config files.

Be sure to quote paths with spaces.

### `out`

Output directory, default is "./"

Be sure to quote paths with spaces.

### `json`

Produce a JSON BOM instead of XML, set to any value instead of false.

### `github-bearer-token`

Optionally provide the GitHub action bearer token for license resolution (example below).

## Example usage

```
- name: Generate .NET SBOM
  uses: devolutions/actions/cyclonedx-dotnet-generate@master
  with:
    path: ./CycloneDX.sln
    github-bearer-token: ${{ secrets.GITHUB_TOKEN }}
```

## Build

To build this action, use ncc : https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github
