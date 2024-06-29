pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Cloning Git') {
            steps {
                 git url: "https://github.com/c-kiplimo/gallery", branch: "master"
            }
        }
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        // stage ('Test') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
    }
}