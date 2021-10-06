# codeforces-contest

Provides you with sample inputs and outputs for a codechef contest

![GitHub package.json version](https://img.shields.io/github/package-json/v/theninza/codeforces-contest?style=for-the-badge)&nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/theninza/codeforces-contest?logo=github&style=for-the-badge)
![npm](https://img.shields.io/npm/dt/codeforces-contest?style=for-the-badge&logo=npm)

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

```sh
codeforces-contest <command> [option]
```

> Note: If globally installed you can also use `cfc-cli` instead of `codeforces-contest`

```sh
cfc-cli <command> [option]
```

or run it directly using npx

```sh
npx codeforces-contest <command> [option]
```

> I have also created a kind of npx alias called `cfcio` [https://www.npmjs.com/package/cfcio] for convinience

```sh
npx cfcio <command> [option]
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

## examples

Command

```sh
codeforces-contest -u https://codeforces.com/contest/159 -f myfolder -l cpp
```

output

```sh
codeforces-contest  v1.0.3 by Nikhil Gupta
Provides you with sample inputs and outputs for a codechef contest
Type codeforces-contest --help for more info


Creating Folder

✔ Fetched Friends or Not
✔ Fetched Matchmaker
✔ Fetched String Manipulation 1.0
✔ Fetched Palindrome pairs
✔ Fetched Zebra Tower

✔  Completed  Created folder 'myfolder'


ℹ  Give a star  https://github.com/TheNinza/codeforces-contest
```
