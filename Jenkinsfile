pipeline {
  agent {
    node {
      label 'MacMini'
    }
  }

  triggers {
    gitlab(
      triggerOnPush: true,
      triggerOnMergeRequest: true
    )
  }

  stages {
    stage('install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('run eslint') {
      steps {
        sh 'npm run eslint'
      }
    }

    stage('build app') {
      steps {
        sh 'npm run hyperion:build'
        sh 'npm run web:build'
      }
    }

    stage('deliver for development') {
      when {
        branch 'development'
      }
      steps {
        sh './jenkins/scripts/deliver-for-development.sh'
      }
    }

    stage('deliver for homologation') {
      when {
        tag pattern: "v\\d+\\.\\d+\\.\\d+-rc\\.\\d+",
        comparator: "REGEXP"
      }
      steps {
        sh './jenkins/scripts/deliver-for-homologation.sh'
      }
    }

    stage('deploy for production') {
      when {
        branch 'master'
      }
      steps {
        sh './jenkins/scripts/deploy-for-production.sh'
      }
    }
  }
}
