#!/usr/bin/env bash

set -eux
port="$(server_port=88 node ././test/example.js)"
(( $port == 88 ))
echo OK

