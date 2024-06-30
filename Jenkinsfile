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
        
        stage('Deploy to Render') {
            steps {
                sh 'render deploy -- --build-command "npm install && npm run build"'
            }
        }
    }
    
    post {
        always {
            node('any') {
                echo 'Cleaning up workspace...'
                cleanWs()
            }
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
