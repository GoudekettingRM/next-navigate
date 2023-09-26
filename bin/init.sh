#!/bin/bash
# This script is used to initialize the environment
# It will create the necessary directories and files
# and set the correct permissions

echo -e "NextNavigate will store the route information in /tmp/next-navigate.\n"

pageFolder=''
if [ -d "pages/" ]; then
  pageFolder="pages"
elif [ -d "app/" ]; then
  pageFolder="app"
elif [ -d "src/app/" ]; then
  pageFolder="src/app"
elif [ -d "src/pages/" ]; then
  pageFolder="src/pages"
fi

while true; do
  read -p "Are your pages located in $pageFolder? (y/n): " pageFolderCorrect

  answer=$(echo "$pageFolderCorrect" | tr '[:upper:]' '[:lower:]')
  case "$answer" in
    y|yes)
      echo "Great! We'll use $pageFolder as the folder for your pages."
      break
      ;;
    n|no)
      read -p "Enter the folder where your pages are located: " pageFolder
      break
      ;;
    "")
      echo "You didn't enter anything. Please use Y/y/N/n."
      ;;
    *)
      echo "Invalid option. Please use Y/y/N/n."
      ;;
  esac
done

echo -e "NextNavigate will find your routes in $pageFolder.\n"

node ./node_modules/next-navigate/dist/bin/setup/init.js $pageFolder
