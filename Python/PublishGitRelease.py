import os

def get_version():
    with open('../Config/Version.ini', 'r') as f:
        return f.read().strip()

USERNAME = "cherryymerryy"
REPO_NAME = "reeversee.github.io"
RELEASE_VERSION = get_version()

choice = input("Publish a release on Github? (y/n) : ")

if choice == "y":
    os.system(f'git tag {RELEASE_VERSION}')
    print(f'Created Git tag({RELEASE_VERSION})')
    os.system(f'git push origin {RELEASE_VERSION}')
    print(f'Pushed origin')
    os.system(f'gh release create {RELEASE_VERSION} --title "{RELEASE_VERSION}" --generate-notes --latest')
    print('Release created')
elif choice == "n":
    exit()
else:
    print("Invalid input. Please enter 'y' or 'n'.")
