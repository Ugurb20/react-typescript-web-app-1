#!/bin/bash

# Check if the directory path is provided
if [ -z "$1" ]; then
  echo "Error: Please provide a relative directory path as an argument."
  exit 1
fi

# Create the directory if it doesn't exist
mkdir -p "$1"

# Create the files in the specified directory
touch "$1/index.tsx"
touch "$1/index.dumb.tsx"
touch "$1/index.stories.tsx"
touch "$1/index.module.scss"
touch "$1/index.spec.tsx"

echo "Files created successfully in the $1 directory."