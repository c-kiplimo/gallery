pipeline {
    agent any
    
    environment {
        NPM_CONFIG_LOGLEVEL = 'warn'
        NGROK_URL = 'https://67d2-41-90-179-216.ngrok-free.app'
    }
    
    stages {
        stage('Setup') {
            steps {
                script {
                    sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'
                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }

        stage('Start Server and Expose via Ngrok') {
            steps {
                script {
                    echo "Ngrok URL: ${env.NGROK_URL}"
                    sh 'nohup node server.js &'
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
