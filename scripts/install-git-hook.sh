#!/bin/sh

if ! test -d .git; then
	echo "Execute scripts/install-git-hooks in the top-level directory"
	exit 1
fi

ln -sf ../../scripts/pre-commit.hook .git/hooks/pre-commit || exit 1
chmod +x ./scripts/pre-commit.hook

echo
echo "Git hooks are installed successfully"