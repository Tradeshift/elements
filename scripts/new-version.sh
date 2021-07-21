#!/bin/sh

latest_release="$(git describe --abbrev=0)"

npm run lerna-version
version="v$(node -p 'require("./lerna.json").version')"

if [ $latest_release = $version ]
then
	echo "No new version. Exit."
else
	# create a new branch
	branch="release/$version"
	git checkout -b $branch

	# commit a changelog and a new version
	git add .
	git commit -m "chore(release): $version"

	# push the new branch to origin
	git push --set-upstream origin $branch

	# push the new tag
	git push origin $version
fi
