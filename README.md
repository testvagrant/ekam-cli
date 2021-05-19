ekam-cli
========

One stop framework for functional automation

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ekam-cli.svg)](https://npmjs.org/package/ekam-cli)
[![Downloads/week](https://img.shields.io/npm/dw/ekam-cli.svg)](https://npmjs.org/package/ekam-cli)
[![License](https://img.shields.io/npm/l/ekam-cli.svg)](https://github.com/KrishnB/ekam-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ekam-cli
$ ekam COMMAND
running command...
$ ekam (-v|--version|version)
ekam-cli/0.4.0 darwin-x64 node-v10.16.3
$ ekam --help [COMMAND]
USAGE
  $ ekam COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ekam create`](#ekam-create)
* [`ekam help [COMMAND]`](#ekam-help-command)

## `ekam create`

Create e new ekam project

```
USAGE
  $ ekam create

OPTIONS
  -n, --name=name  name of project
  -p, --path=path  path to create project
```

_See code: [src/commands/create.js](https://github.com/krishnanandb/ekam-cli/blob/v0.4.0/src/commands/create.js)_

## `ekam help [COMMAND]`

display help for ekam

```
USAGE
  $ ekam help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
