# codeforces-contest

Provides you with sample inputs and outputs for a codechef contest

![GitHub last commit](https://img.shields.io/github/last-commit/theninza/codeforces-contest?style=for-the-badge)&nbsp;
![GitHub issues](https://img.shields.io/github/issues/theninza/codeforces-contest?style=for-the-badge)&nbsp;
![GitHub repo size](https://img.shields.io/github/repo-size/theninza/codeforces-contest?style=for-the-badge)

## Tech-Stack

![Node](https://img.shields.io/badge/NodeJS-05122A?style=for-the-badge&logo=node.js)&nbsp;

## Installation

```sh
npm i -g codeforces-contest
```

You can also run it via npx

```sh
npx codeforces-contest
```

## Usage

> Note: If globally installed you can also use `cfc-cli` instead of `codeforces-contest`

```sh
codeforces-contest <command> [option]
```

### commands

```sh
help  #prints help info
```

### options

```sh
-u, --url       #Fetches sample inputs and outputs and creates folder for the contest

-f, --folder    #Defines the directory name for the folder in which the files will be

-l, --language  #Preferred language to write files. For example '-l cpp' will create .cpp files to write solutions

-c, --clear     #Clear the console Default: false

--noClear       #Don't clear the console Default: false

-d, --debug     #Print debug info Default: false

-v, --version   #Print CLI version Default: false
```

Congratulations!! Now it has been added to your path and can be run as a CLI.
