#! /bin/sh

rm ./index.js
find ./electrious -name '*.js' | sed "s/.*/require('&')/" > index.js
