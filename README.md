# README

```sh
# for installing packages
docker container run --name node --rm -v "$PWD:/app" --init --workdir /app --entrypoint npm -it node:latest i <package>
```

```shell
# for creating table from file
docker container run --rm -v "$PWD:/aws" -e AWS_ACCESS_KEY_ID=xxx -e AWS_SECRET_ACCESS_KEY=xxx amazon/aws-cli dynamodb create-table --cli-input-json file://users.json --endpoint-url http://172.24.0.1:8000 --region local
```