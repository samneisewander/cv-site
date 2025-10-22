#!/usr/bin/env python3
import sys
import os
import json
import shutil

"""
Markdown files compiled by this script should have the following metadata in the first few lines:

    title
    subtitle (if omitted, leave as blank line)
    authors (comma delineated) ex: Sam Neisewander, Henry Jochaniewicz
    tags (comma delineated) ex: cooking, programming, fitness
    datePublished [mm/dd/yyyy]
    dateModified [mm/dd/yyyy]

    [ACTUAL MD CONTENT]

The shortTitle is assigned the portion of the filename that precedes the file extension.
ex: cookies-recipe.md -> shortTitle: 'cookies-recipe'
"""
outFileName = 'blogData.json'

if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise ValueError("usage: ./compileBlogMd.py [name_of_file/dir] [dir_to_write_to]")

    if not os.path.exists(sys.argv[1]):
        raise FileNotFoundError
    
    blogEntries = []
    
    for i, file in enumerate(os.listdir(sys.argv[1])):
        print(f'  {file}')
        if file.endswith('.md'):
            with open(f'{sys.argv[1]}/{file}') as f:
                entry = {"id": i}
                entry["shortTitle"] = file.split('.')[0]
                entry["title"] = f.readline().strip()
                entry["subtitle"] = f.readline().strip()
                entry["authors"] = f.readline().strip().split(', ')
                entry["tags"] = f.readline().strip().split(', ')
                entry["datePublished"] = f.readline().strip()
                entry["dateModified"] = f.readline().strip()
                f.readline()
                entry["data"] = f.read()
                blogEntries.append(entry)
        else:
            raise ValueError("Expected .md file but found other.")

    with open(f'{sys.argv[2]}/{outFileName}', 'w') as f:
        json.dump(blogEntries, f, indent=4)
