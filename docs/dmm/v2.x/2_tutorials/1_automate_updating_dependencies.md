# Automate Updating Dependencies

## Table of Contents

- [Description](#description)
- [Example](#example)

## Description

You can use Dmm to automatically update your dependencies. For example, if you
are using GitHub actions, all you need is a new workflow that uses dmm to update
your dependencies at a specified interval and create a new pull request for you
to review!

This tutorial will explain how to use Dmm as a "bumper" in GitHub. It will not
explain the ins and outs of a GitHub workflow file. For this, refer to GitHub's
documentation.

## Example

```yml
# .github/workflows/bumper.yml

name: Update dependencies and bump version numbers

on:
  schedule:
    # Runs at 00:00 UTC every day
    - cron: '0 0 * * *'

jobs:

  update:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Install Deno
      uses: denoland/setup-deno@v1

    - name: Update dmm
      run: |
        deno install \
          --allow-read=deps.ts,tests/deps.ts \
          --allow-write=deps.ts,tests/deps.ts \
          --allow-net='cdn.deno.land,api.deno.land,x.nest.land,raw.githubusercontent.com,github.com,api.github.com' \
          https://deno.land/x/dmm/mod.ts
        dmm update
        cd tests
        dmm update

    - name: Create pull request
      uses: peter-evans/create-pull-request@v3
      with:
        token: ${{ secrets.TOKEN }}
        commit-message: 'Update dependencies'
        title: 'chore: Update dependencies'
        body: 'This pull request was auto-generated by GitHub Actions.'
        branch: update-dependencies
```

The above example will run dmm to update your dependencies (if needed) every day
and create a pull request for you to review.