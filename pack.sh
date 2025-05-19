set -e
cd src
pnpm :build
cp CNAME ../docs
