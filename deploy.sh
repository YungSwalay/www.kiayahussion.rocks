#!/usr/bin/env bash

if ! which sass &>/dev/null; then
	echo "Please install sass then run ./deploy.sh again" 1>&2
	exit 2
fi
if ! which gsutil &>/dev/null; then
	echo "Please install gsutil then run ./deploy.sh again" 1>&2
	exit 2
fi

sass "$(pwd):$(pwd)"
gsutil rsync -x '.*\.sass$|.*\.map$|.*\.scss$|deploy.sh$|LICENSE$|README.md$|\.git.*$' -R . "gs://$(basename "$(pwd)")"
