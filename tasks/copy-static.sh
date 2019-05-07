#!/bin/bash -eu
rm -rf .out/
rm -rf static/

# Copy *.css from @tradeshift/elements
mkdir -p static
mkdir -p static/packages
mkdir -p static/packages/core
mkdir -p static/packages/core/src
find packages/core/src/ -name '*.css' -exec cp -prvf '{}' 'static/packages/core/src' ';'

# Copy webcomponentsjs polyfill
# mkdir -p static/node_modules
# mkdir -p static/node_modules/@webcomponents
# mkdir -p static/node_modules/@webcomponents/webcomponentsjs
# cp -prvf node_modules/@webcomponents/webcomponentsjs static/node_modules/@webcomponents/
