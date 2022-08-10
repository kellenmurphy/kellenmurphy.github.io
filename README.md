# [kellenmurphy.github.io](https://kellenmurphy.github.io)

This repository contains the source code for my [personal blog](https://kellenmurphy.com). This README documents some of the steps needed to add stuff to the site, mainly just for my own reference.

## `gh-pages` branch

This branch is protected, and from this branch the site will get deployed, so make sure to commit to a new branch (i.e. this is getting pushed to `chg081022-add-readme`) and create a PR to merge. Not sure why I'm doing this, but I'm doing it... ¯\\\_(ツ)\_/¯

## Drafts

Create draft posts in [`_drafts`](https://github.com/kellenmurphy/kellenmurphy.github.io/tree/gh-pages/_drafts) directory. Use the following command to run `jekyll` in "draft mode":

```bash
bundle exec jekyll serve --drafts
```

Posts should be created with the following front-matter:

```
---
layout: post
title: <title-goes-here>
category: <category-goes-here>
tags: <tags-go-here>
---
```

And here are the rough steps to go through to push the changes to the site.

1. Rename the draft with the format `YYYY-MM-DD-title.md` and move from [`_drafts`](https://github.com/kellenmurphy/kellenmurphy.github.io/tree/gh-pages/_drafts) to [`_posts`](https://github.com/kellenmurphy/kellenmurphy.github.io/tree/gh-pages/_posts). 

2. Commit to new branch and push changes.

3. Create and merge the PR.

4. ???
   
5. Profit!

Github Action will trigger and redeploy the site, seems to take about 30 seconds. 