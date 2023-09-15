#!/bin/bash
# This script is used to initialize the environment
# It will create the necessary directories and files
# and set the correct permissions

echo "By default, next-navigate creates a top level folder to store route and route type data."
echo "This folder is called 'navigation' and is located in the root of your project, or in src/ if you're using that."
read -p "Enter the folder where you want to store the generated routes (leave empty for default): " folder

if [ -z "$folder" ]
then
  if [ -d "src" ]
  then
    folder="src/navigation"
  else
    folder="navigation"
  fi
fi
echo $folder

node ./node_modules/next-navigate/dist/init.js $folder
