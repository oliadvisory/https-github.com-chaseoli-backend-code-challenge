# mocha -r ts-node/register --timeout 999999 --colors --exit src/spec/**/*.spec.ts
_db_uri=$1
_GOOGLE_APPLICATION_CREDENTIALS=$2
_build=$3
_firebase_database_url=$4


# set default to locally defined env var
if [ -z "$_db_uri" ] && [ "${_db_uri+xxx}" = "xxx" ]; then _db_uri="$POKEMON_PASSPHRASE"; fi
if [ -z "$_GOOGLE_APPLICATION_CREDENTIALS" ] && [ "${_GOOGLE_APPLICATION_CREDENTIALS+xxx}" = "xxx" ]; then _GOOGLE_APPLICATION_CREDENTIALS="$POKEMON_PASSPHRASE"; fi
if [ -z "$_build" ] && [ "${_build+xxx}" = "xxx" ]; then _build="$POKEMON_PASSPHRASE"; fi
if [ -z "$_firebase_database_url" ] && [ "${_firebase_database_url+xxx}" = "xxx" ]; then _firebase_database_url="$POKEMON_PASSPHRASE"; fi

rm -rf spec-lib
mkdir spec-lib

cp package.json spec-lib/
cp package-lock.json spec-lib/
npm i --prefix spec-lib

tsc -p ./tsconfig.spec.json

env  db_uri: $_db_uri \ 
GOOGLE_APPLICATION_CREDENTIALS: $_GOOGLE_APPLICATION_CREDENTIALS \ 
build: $_build \ 
firebase_database_url: $_firebase_database_url \ 
mocha --timeout 999999  --exit --colors spec-lib/spec/**/*.spec.js