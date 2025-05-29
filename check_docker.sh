#!/bin/bash

# Check if Docker is running
if ! systemctl is-active --quiet docker; then
    echo "Docker is not running. Starting Docker..."
    sudo systemctl start docker
    echo "Docker started."
else
    echo "Docker is already running."
fi