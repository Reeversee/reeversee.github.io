@echo off
cd C:\
cd C:\Users\mtomi\GitHub\reeversee.github.io\Python
call python GenerateVersion.py
call python PrepareAndPublishGitCommit.py
call python PublishGitRelease.py