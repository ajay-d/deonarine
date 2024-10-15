---
title: "Python Disable Gil"
date: 2024-10-15T13:52:18-04:00
draft: false
---

Python 3.13 allows users to diable the GIL and experiment with free-threading.  Performance aside, here's how to install it with the GIL disabled (which it isn't by default).

If you just `pyenv install 3.13.0`, the GIL will be enabled

```console
ajay@Ajays-MacBook-Pro deonarine % python -VV
Python 3.13.0 (main, Oct 15 2024, 14:25:57) [Clang 16.0.0 (clang-1600.0.26.3)]

ajay@Ajays-MacBook-Pro deonarine % python
```

```
Python 3.13.0 (main, Oct 15 2024, 14:25:57) [Clang 16.0.0 (clang-1600.0.26.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import sys
>>> sys._is_gil_enabled()
True
```

You can install with the experimental JIT enabled and disable the GIL with this build flag:
```bash
env PYTHON_CONFIGURE_OPTS='--disable-gil' pyenv install 3.13.0
```

```console
ajay@Ajays-MacBook-Pro deonarine % python -VV
Python 3.13.0 experimental free-threading build (main, Oct 15 2024, 14:32:46) [Clang 16.0.0 (clang-1600.0.26.3)]

ajay@Ajays-MacBook-Pro deonarine % python
```

```console
Python 3.13.0 experimental free-threading build (main, Oct 15 2024, 14:32:46) [Clang 16.0.0 (clang-1600.0.26.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import sys
>>> sys._is_gil_enabled()
False
```

You can put is all together with performance build:
```bash
env PYTHON_CONFIGURE_OPTS='--enable-optimizations --with-lto --disable-gil' PYTHON_CFLAGS='-march=native -mtune=native' pyenv install 3.13.0
```

```console
ajay@Ajays-MacBook-Pro deonarine % python -VV
Python 3.13.0 experimental free-threading build (main, Oct 15 2024, 14:43:36) [Clang 16.0.0 (clang-1600.0.26.3)]

ajay@Ajays-MacBook-Pro deonarine % python

Python 3.13.0 experimental free-threading build (main, Oct 15 2024, 14:43:36) [Clang 16.0.0 (clang-1600.0.26.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import sys
>>> sys._is_gil_enabled()
False
```