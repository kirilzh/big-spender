# README

```sh
# for installing packages
docker container run --name node --rm -v "$PWD:/app" --init --workdir /app --entrypoint npm -it node:latest i <package>
```