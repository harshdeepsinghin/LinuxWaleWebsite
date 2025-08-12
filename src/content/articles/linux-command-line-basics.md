---
title: "Linux Command Line Basics"
description: "Master the essential Linux commands every user should know"
date: "2024-01-20"
author: "LinuxWale Team"
tags: ["command-line", "terminal", "basics"]
featured: true
---

# Linux Command Line Basics

The command line is the heart of Linux. While it might seem intimidating at first, mastering these basic commands will unlock the true power of your system.

## Essential Commands

### Navigation

```bash
pwd         # Print working directory
ls          # List files and directories
cd          # Change directory
cd ..       # Go up one directory
cd ~        # Go to home directory
```

### File Operations

```bash
touch file.txt    # Create empty file
mkdir folder      # Create directory
cp file1 file2    # Copy file
mv file1 file2    # Move/rename file
rm file.txt       # Remove file
rm -rf folder     # Remove directory recursively
```

### File Viewing

```bash
cat file.txt      # Display file content
less file.txt     # View file page by page
head file.txt     # Show first 10 lines
tail file.txt     # Show last 10 lines
grep "text" file  # Search for text in file
```

### System Information

```bash
whoami           # Current username
date             # Current date and time
uptime           # System uptime
df -h            # Disk usage
free -h          # Memory usage
ps aux           # Running processes
```

## Tips for Beginners

1. **Use Tab Completion**: Press Tab to auto-complete commands and filenames
2. **Command History**: Use arrow keys to navigate through previous commands
3. **Manual Pages**: Use `man command` to read documentation
4. **Practice Safely**: Start in your home directory to avoid system damage

## Advanced Tips

- Use `&&` to chain commands: `mkdir test && cd test`
- Use `|` to pipe output: `ls -la | grep "txt"`
- Use `>` to redirect output: `ls > files.txt`
- Use `ctrl+c` to stop running commands

# heading1

## heading2

### heading3

#### heading4

##### heading 5

The command line becomes second nature with practice. Start with these basics and gradually explore more advanced features! 💻
