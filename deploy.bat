
@echo off

cd /d %~dp0
@REM 
SET public_path=%cd%\public
SET node_module=%cd%\node_modules
SET dot_git=%cd%\public\.git

if not exist %node_module% (
    echo %node_module%
    pnpm install
)
if not exist %public_path% (
    pnpm hexo clean
    pnpm hexo g
)
cd /d public

git add .
git commit -m "force update blog"
git push -f 

cd ..
