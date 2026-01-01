# This is a Tutorial written by author Gilbert to show how a electron app is create with flask especially in Rasperry Pi

<p>Main Folder structure</p>

```
App
'--> electron
'--> flask_app
```

## Flask App Structure

```
flask_app
'-> static
'-> templates
'-> python files
'-> requirements.txt
```

<p> static contains the CSS files </p>
<p> template contains the HTML files </p>
<p> requirement.txt contains the name of required module</p>


<h3>First we are preparing the Flask app using these commands:</h3>

<p>Make sure to install the pyinstaller first</p>

```$ pip install pyinstaller```

```$ pyinstaller   --onefile   --add-data "templates:templates"   --add-data "static:static"   main.py```

<h3>Now we can prepare the electron app:</h3>

```$ npm init -y```


<p>This folder structure for electron is like this:</p>

```
electron
'--> node module (created automatically) 
'--> package.json (created automatically)
'--> package-lock.json (created automatically)
'--> main.js
'--> preload.js
'--> scipt.js
'--> resource
    '--> flask
       '--> main 
```
    
<p>main (It is the binary app created after running the pyinstaller command, You can find it in the dist folder)</p>

<p><em>Move the flask app to resource->flask</em></p>

**in package.json paste this**
```
{
  "name": "Your App Name",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "build": {
    "appId": "com.chronosphere.app",
    "files": [
      "**/*"
    ],
    "extraResources": [
      {
        "from": "resources/flask",
        "to": "flask"
      }
    ],
    "linux": {
      "target": "AppImage"
    },
    "win": {
      "target": "nsis"
    }
  }
}
```

***Install npm bilder using node's npm***

>While running commands below you must have to be in electron folder not in the flask_app

```$ npm install --save-dev electron-builder```

```$ npm build```

**You are ready to go, The appimage should be in the dist folder with name (Your App Name-1.0.0-arm64.appimage)**