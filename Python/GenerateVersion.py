import os

def get_version():
    print("Checking the existing version of the file...")
    if not os.path.exists('../Config/Version.ini'):
        print("The version file was not found")
        with open('/Config/Version.ini', 'w') as f:
            f.write('1.0.0')
            print("The version file has been created")
    with open('../Config/Version.ini', 'r') as f:
        return f.read().strip()


def write_version(version):
    with open('../Config/Version.ini', 'w') as f:
        f.write(version)


choice = input("Update website version? (y/n) : ")

if choice == "y":
    version = get_version()
    print(f"Current version: {version}")
    print("Version types: Major (0), middle (1), minor (2)")
    version_type = input('Select a version type: ')

    if version_type == 'major' or version_type == '0':
        version_parts = version.split('.')
        version_parts[0] = str(int(version_parts[0]) + 1)
        version_parts[1] = '0'
        version_parts[2] = '0'
        version = '.'.join(version_parts)
    elif version_type == 'middle' or version_type == '1':
        version_parts = version.split('.')
        version_parts[1] = str(int(version_parts[1]) + 1)
        version_parts[2] = '0'
        version = '.'.join(version_parts)
    elif version_type == 'minor' or version_type == '2':
        version_parts = version.split('.')
        version_parts[2] = str(int(version_parts[2]) + 1)
        version = '.'.join(version_parts)
    else:
        print("Invalid input. Please enter 'major', 'middle', or 'minor'.")

    print(f"Version file updated!\nVersion: {version}")
    write_version(version)
elif choice == "n":
    exit()
