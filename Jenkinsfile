// This Jenkinsfile uses the declarative syntax. If you need help, check:
// Overview and structure: https://jenkins.io/doc/book/pipeline/syntax/
// For plugins and steps:  https://jenkins.io/doc/pipeline/steps/
// For Github integration: https://github.com/jenkinsci/pipeline-github-plugin
// For credentials:        https://jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials
// For credential IDs:     https://ci.ts.sv/credentials/store/system/domain/_/
// Docker:                 https://jenkins.io/doc/book/pipeline/docker/
// Custom commands:        https://github.com/Tradeshift/jenkinsfile-common/tree/master/vars
// Environment variables:  env.VARIABLE_NAME

pipeline {
    agent any // Or you could make the whole job or certain stages run inside docker
    triggers {
        issueCommentTrigger('^retest$')
    }

    stages {
        stage('Initialise PR') {
            when { changeRequest() }
            steps {
                // We need to reset the SonarQube status in the beginning
                githubNotify(status: 'PENDING', context: 'sonarqube', description: 'Not analysed')
            }
        }
        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Sonarqube') {
            when {
                anyOf {
                    branch 'master' // Only run Sonarqube on master...
                    changeRequest() // ... and PRs
                }
            }
            steps {
                sonarqube()
            }
        }
    }
}

