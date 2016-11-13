# potterAPI Contributing Guide

## Step 1: Fork

Fork the [project](https://github.com/potterAPI/potterAPI) on GitHub and check out your copy
locally.

```text
$ git clone https://github.com/<username>/potterAPI.git
$ cd node
$ git remote add upstream https://github.com/potterAPI/potterAPI.git
```

## Step 2: Branch

Create a branch and start hacking:

```text
$ git checkout -b awesome-new-feature
```

## Step 3: Commit

Add files and commit:

```text
$ git add my/changed/files
$ git commit
```

Each commit message consists of a **header** and an optional **body**.  The header has a special
format that includes a **type**, a **scope**, and a **subject**:

```text
<type>[<scope>]: <subject>
<BLANK LINE>
<body>
```

The **header** is mandatory but the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be
easier to read on GitHub as well as in various git tools.

Examples:

```text
docs[CONTRIBUTING.md]: add commit message guidelines
```

```text
fix[middleware]: change request handler path
```

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header
of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash
is the SHA of the commit being reverted.

### Type
Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (example scopes: white-space,
formatting, missing semi-colons)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes:
webpack, npm)
- **ci**: Changes to CI configuration files and scripts (example scopes: Travis, Circle)
- **chore**: Other changes that don't modify `src` or `test` files

### Scope
The scope could be anything specifying place of the commit change, e.g., `router`, `User model`.

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

If your patch fixes an open issue, you can add a
[reference](https://help.github.com/articles/closing-issues-via-commit-messages/)
to it at the end of the log. For example:

```text
fixes potterAPI/potterAPI#88
```

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

## Step 4: Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time.

```text
$ git pull --rebase upstream master
```

## Step 5: Test

Bug fixes and features **should come with tests**. Looking at other tests to see how they should be
structured may be helpful.

Make sure the linter is happy and that all tests pass. Please do not submit patches that fail
either check.

## Step 6: Push

```text
$ git push origin awesome-new-feature
```

Go to https://github.com/<username>/potterAPI and select your branch. Then create a
['Pull Request'](https://help.github.com/articles/creating-a-pull-request/)
and describe the changes you made.

Pull requests will be accepted after they are reviewed.

**Thanks heaps for contributing!**

By making a contribution to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I have the right to submit it
under the open source license indicated in the file; or

- (b) The contribution is based upon previous work that, to the best of my knowledge, is covered
under an appropriate open source license and I have the right under that license to submit that
work with modifications, whether created in whole or in part by me, under the same open source
license (unless I am permitted to submit under a different license), as indicated in the file; or

- (c) The contribution was provided directly to me by some other person who certified (a), (b) or
(c) and I have not modified it.

- (d) I understand and agree that this project and the contribution are public and that a record of
the contribution (including all personal information I submit with it, including my sign-off) is
maintained indefinitely and may be redistributed consistent with this project or the open source
license(s) involved.
