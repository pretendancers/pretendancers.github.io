#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm :build

# 生成CNAME
cp CNAME ../docs

cd ..
git add .
git commit -m "new deploy"
git push
