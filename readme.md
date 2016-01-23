# cown

Qiniu bucket manager && upload tool

## Install

```bash
$ npm install -g cown
```

## Quick start

Configure a new bucket:

```bash
$ cown add
```

Upload file:

```bash
$ cown upload path/to/my.png
```

List all buckets:

```bash
$ cown ls
```

Use another bucket:

```bash
$ cown use <bucket name>
```

Remove a bucket:

```bash
$ cown rm <bucket name>
```

## Usage

### Mode

There are two modes in `cown`, one is `bucket mode`, the other is `account mode`. Using `-a` option to run in `account mode`.

`cown` is running on `bucket mode` by default. Because we always operate bucket instead of account. 

For example, when we run `$ cown add`, you will add a new bucket. But if you run it with a `-a` option (`$ cown add -a`), you will be going to add a new account instead. 

All action can be run in `account mode` except `upload` action.

### Commands

```bash
Commands:

    add [options]              Add new bucket.
    ls [options]               List all buckets.
    use [options] <name>       Checkout bucket.
    rm [options] <name>        Remove bucket.
    upload [options] <source>  Upload file

   "-a" option for account mode.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

# License

MIT License

