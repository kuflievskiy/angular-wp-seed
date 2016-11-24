# Contributing process

## Ensure that your forked copy is up to date: <a href="https://help.github.com/articles/syncing-a-fork/">Syncing a fork</a>

```git
# Fetch the branches and their respective commits from the upstream repository. Commits to master will be stored in a local branch, upstream/master.
git fetch upstream

# Check out your fork's local master branch.
git checkout master

# Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes.
# If your local branch didn't have any unique commits, Git will instead perform a "fast-forward"
git merge upstream/master
```

## Send pull-request for a review: <a href="https://help.github.com/articles/creating-a-pull-request-from-a-fork/">Creating a pull request from a fork </a>

## Old school way ( Send a patch )

If you are not familar with github pull-requests, you can send me a path on the email address : kuflievskiy@gmail.com.

```git
git config --global diff.noprefix true

# 20425 - issue ID
git diff --no-prefix > ~/#20425_updated_dockblocks.diff

# Apply patch
patch -p0 < ~/#20425_updated_dockblocks.diff
```


// @todo : this section is in progress, for more details contact me via email: kuflievskiy@gmail.com