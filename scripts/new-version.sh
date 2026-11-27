#!/bin/sh

# npm run new-version        stable release; a current beta graduates (0.41.1-beta.1 => 0.41.1)
# npm run new-version:beta   beta release (0.41.0 => 0.41.1-beta.0, 0.41.1-beta.0 => 0.41.1-beta.1)
# After the release PR is merged, release.yml publishes beta versions with the `beta` dist-tag
# and stable versions with `latest`. Set RELEASE_REMOTE when `origin` is not Tradeshift/elements.

remote="${RELEASE_REMOTE:-origin}"
current="$(node -p 'require("./lerna.json").version')"

if [ "$1" = "beta" ]
then
	version_args="--conventional-prerelease --preid beta"
else
	case "$current" in
		*-*) version_args="--conventional-graduate" ;;
		*) version_args="" ;;
	esac
fi

latest_release="$(git describe --abbrev=0)"

npm run lerna-version -- $version_args
version="v$(node -p 'require("./lerna.json").version')"

if [ $latest_release = $version ]
then
	echo "No new version. Exit."
else
	# create a new branch
	branch="release/$version"
	git checkout -b $branch

	# run install scripts to avoid unexpected changes in package-lock.json
	npm ci
	npm run lerna:bootstrap:ci

	# commit a changelog and a new version, and tag it. lerna-version runs with --no-git-tag-version:
	# lerna 5 formats files with the workspace prettier before committing, which fails with prettier 3.
	git add .
	git commit -m "chore(release): $version"
	git tag -a $version -m $version

	# push the new branch
	git push --set-upstream "$remote" $branch

	# push the new tag
	git push "$remote" $version
fi
