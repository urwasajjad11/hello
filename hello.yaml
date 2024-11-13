name: C++ CI Pipeline

on:
  push:
    branches:
      - master
      pull_request:
      branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Check out code
        uses: actions/checkout@v2

      - name: install GCC
        uses: sudo apt-get update && sudo apt-get install -y g++

      - name: verify GCC installations
        run: g++ --version

      - name: Build the c++ file
        run: 
         g++ hello.cpp -o hello
         ./hello
         continue-on-error: true # this allows the error to show without stopping the process
      
      -name: display the output (If it fails)
       run: 
         if[ -f hello ]; then
         ./hello
         else 
         echo "builed failed : hello.cpp didn't compile."
          fi
