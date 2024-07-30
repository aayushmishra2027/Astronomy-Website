/your-project
    /index.html
    /styles.css
    /script.js
    /images
        /blackhole1.jpg
        /blackhole2.jpg
        /neutronstar1.jpg
        /neutronstar2.jpg
        /stars.jpg
        cd /path/to/your-project
        mkdir images
        mv /path/to/blackhole1.jpg images/
        mv /path/to/blackhole2.jpg images/
        mv /path/to/neutronstar1.jpg images/
        mv /path/to/neutronstar2.jpg images/
        mv /path/to/stars.jpg images/
        git init
        git add .
        git commit -m "Add images and update project structure"
        git remote add origin https://github.com/yourusername/your-repo-name.git
        git branch -M main
        git push -u origin main

