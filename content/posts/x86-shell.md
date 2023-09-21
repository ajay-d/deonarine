---
title: "x86 Shell"
date: 2023-09-21T10:31:38-04:00
draft: false
---

## Setup shell shortcuts

You can easily switch to an x86 shell on apple silicon by
```bash
arch -x86_64 zsh
```

Then check the arch
```console
ajay@Ajays-MacBook-Pro ~ % arch -x86_64 zsh
ajay@Ajays-MacBook-Pro ~ % arch
i386
```

As a shortcut, I can switch between x86 or apple silicon terminal editing .zshrc
```bash
alias arm="env /usr/bin/arch -arm64 /bin/zsh --login"
alias intel="env /usr/bin/arch -x86_64 /bin/zsh --login"
```

Then run arch specifc versions of homebrew or pyenv
```bash
alias brew86="/usr/local/bin/brew"
alias pyenv86="arch -x86_64 pyenv"
```

You may need to resource the shell after changing `source ~/.zshrc`

Now you can quickly switch shell architectures

```console
ajay@Ajays-MacBook-Pro ~ % arm
ajay@Ajays-MacBook-Pro ~ % /usr/bin/uname -m
arm64
ajay@Ajays-MacBook-Pro ~ % intel
ajay@Ajays-MacBook-Pro ~ % /usr/bin/uname -m
x86_64
ajay@Ajays-MacBook-Pro ~ %
```