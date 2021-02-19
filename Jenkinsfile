pipeline {
    agent { dockerfile true }
    environment {
        HOME = '.'
    }
    stages {
        stage('Prep') {
            steps {
                sh 'node -v'
                sh 'npm install'
                sh 'npm start &'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
