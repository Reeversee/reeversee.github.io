import git

choice = input("Publish a commit on GitHub? (y/n) : ")

if choice == "y":

    repo = git.Repo("../.git/")

    commit = repo.commit()

    print(f"Latest commit:\n{commit.author}, {commit.message}")

    if repo.is_dirty():
        user_commit_message = input('Enter Git commit message: ')
        commit_message = "[AUTO] " + user_commit_message

        repo.git.add('-A')
        print('All files are added to the commit')

        committed = repo.index.commit(commit_message)

        print('Publishing a commit')
        origin = repo.remote('origin')
        origin.push('main')
        print('Commit published')
    else:
        print('The repository is clean, no changes for the commit')
elif choice == "n":
    exit()
else:
    print("Invalid input. Please enter 'y' or 'n'.")
