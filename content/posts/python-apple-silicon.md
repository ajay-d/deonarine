---
title: "Python Apple Silicon"
date: 2023-09-21T11:28:31-04:00
draft: false
---

## Install x86 dependencies

Once you have the shell shortcuts, we can brew install x86 or arm libraries, since they reside in different locations

Switch to the `intel` shell and `brew86 install` the required libraries
```bash
libs="openssl readline sqlite3 xz zlib gettext"

for lib in ${=libs}; do
brew86 install $lib
done
```

Next, set the compiler and linker flags
realine is keg only `brew86 info readline`

For compilers to find readline you may need to set:
  `export LDFLAGS="-L/usr/local/opt/readline/lib"`
  `export CPPFLAGS="-I/usr/local/opt/readline/include"`

For pkg-config to find readline you may need to set:
  `export PKG_CONFIG_PATH="/usr/local/opt/readline/lib/pkgconfig"`

Here we set all the flags:
```bash
libs="openssl readline sqlite3 xz zlib gettext"

for lib in ${=libs}; do
    prefix="$(brew86 --prefix $lib)"
    export CFLAGS="$CFLAGS -I$prefix/include"
    export LDFLAGS="$LDFLAGS -L$prefix/lib"
done
```

Alternately, you can just use (and not install the x86 packages above):
`export PYTHON_BUILD_SKIP_HOMEBREW="1"`

```console
ajay@Ajays-MacBook-Pro ~ % intel
ajay@Ajays-MacBook-Pro ~ % /usr/bin/uname -m
x86_64
ajay@Ajays-MacBook-Pro ~ % export PYTHON_BUILD_SKIP_HOMEBREW="1"
ajay@Ajays-MacBook-Pro ~ % pyenv86 install 3.11.4
Downloading openssl-1.1.1s.tar.gz...
-> https://www.openssl.org/source/openssl-1.1.1s.tar.gz
Installing openssl-1.1.1s...
Installed openssl-1.1.1s to /Users/ajay/.pyenv/versions/3.11.4
Downloading readline-8.2.tar.gz...
-> https://ftpmirror.gnu.org/readline/readline-8.2.tar.gz
Installing readline-8.2...
Installed readline-8.2 to /Users/ajay/.pyenv/versions/3.11.4
Downloading Python-3.11.4.tar.xz...
-> https://www.python.org/ftp/python/3.11.4/Python-3.11.4.tar.xz
Installing Python-3.11.4...
python-build: use zlib from xcode sdk
Installed Python-3.11.4 to /Users/ajay/.pyenv/versions/3.11.4
ajay@Ajays-MacBook-Pro ~ % pyenv shell 3.11.4
ajay@Ajays-MacBook-Pro ~ % python
Python 3.11.4 (main, Sep 21 2023, 12:25:56) [Clang 15.0.0 (clang-1500.0.40.1)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import platform
>>> platform.machine()
'x86_64'
>>> platform.platform()
'macOS-13.5.2-x86_64-i386-64bit'
>>> 
```

of course I have a regular arm python environment, built for [Maximum Performance](https://github.com/pyenv/pyenv/blob/master/plugins/python-build/README.md#building-for-maximum-performance)
`env PYTHON_CONFIGURE_OPTS='--enable-optimizations --with-lto' PYTHON_CFLAGS='-march=native -mtune=native' pyenv install 3.11.5`