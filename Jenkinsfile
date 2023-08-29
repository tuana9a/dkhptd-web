pipeline {
    agent any
    triggers {
        githubPush()
    }
    environment {
        DESTINATION = credentials('destination')
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:16.20-bullseye'
                    // Run the container on the node specified at the
                    // top-level of the Pipeline, in the same workspace,
                    // rather than on a new node entirely:
                    reuseNode true
                }
            }
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build:prod'
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    withCredentials([file(credentialsId: 'ssh-key', variable: 'sshKey')]) {
                        // do something with the file, for instance 
                        sh 'scp -q -o "StrictHostKeyChecking no" -i $sshKey -r dist/* $DESTINATION'
                    }
                }
            }
        }
    }
}