pipeline {
    agent any
    
    tools {
        nodejs "node"
    }
    
    triggers {
        githubPush()
    }
    
    stages {
        stage('Cloning Git') {
            steps {
                git url: "https://github.com/c-kiplimo/gallery", branch: "master"
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        //start server using node server.js
        stage('Start Server') {
            steps {
                sh 'node server.js'
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
