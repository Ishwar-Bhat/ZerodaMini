from distutils.dir_util import copy_tree
from distutils.file_util import copy_file


def copy_files():
    try:
        print("Copying static files to webapp static folder")
        static_list = copy_tree("dist/static", "../home/static/")
        print("Copied files are:")
        for f in static_list:
            print(f) 

        print("\nCopying index.html to webapp templates")
        res = copy_file("dist/index.html", "../home/templates/")
        print(f"Copied index.html successfully: {res}")

    except Exception as e:
        print("Error copying files")
        print(e)
    else:
        print("\nFiles copied successfully")


if __name__ == '__main__':
    copy_files()
