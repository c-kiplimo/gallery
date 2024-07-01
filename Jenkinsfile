pipeline {
    agent any
    
    tools {
        nodejs "node"
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
        stage('Run Tests') {
            steps {
                echo 'Running Tests on test'
                sh 'npm test'
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
            echo 'Pipeline failed. Sending email notification...'
            emailext (
                subject: "Pipeline Failed: Gallery Project",
                body: "The Jenkins pipeline for Gallery project has failed. Please check the build logs for details.",
                to: "kevin.kipkemei@student.moringaschool.com",
            )
        }
    }
}