FROM gcr.io/electrious-platform/pb:latest

RUN wget https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64 &&\
    mv protoc-gen-grpc-web-1.0.7-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web &&\
    chmod a+x /usr/local/bin/protoc-gen-grpc-web

