pipeline {
    agent any
    
    environment {
        RENDER_TOKEN = credentials('rnd_Pjy5ag8cLev5MX0hC4vzq7E6xPfC')
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/c-kiplimo/gallery.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Render') {
            steps {
                script {
                    def renderAuthToken = "Bearer ${env.RENDER_TOKEN}"
                    def response = sh(script: "render deploy -- --build-command 'npm install && npm run build'", returnStdout: true)
                    echo response
                }
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
