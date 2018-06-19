node {
	def app
	def project_name = 'LMS-Website'

	stage('Clone repo'){
		checkout scm
	}
  
  stage('Generate Config'){
    sh "node /home/limeishu/prerender-autoconfig/serve/app.js"
  }

	stage('Build'){
		echo 'Cleaning old files.'
		sh "cp -f /home/limeishu/jenkins/limeishu.org/config.json ./server/"
    sh "rm -rf .git"
		sh "ls -lah"
		sh "yarn"
		sh "yarn run build"
		echo 'Packing files.'
		sh "zip -r package.zip ."
	}

  stage('Push to Remote Server'){
		echo 'Connecting to the server.'
		sh "scp -r -P 2047 $WORKSPACE/package.zip www@ssh.limeishu.org.tw:/home/www/webserver/v2/webroot"
	}

	stage('Active Service'){
    echo 'Connecting to the server.'
    sh "ssh www@ssh.limeishu.org.tw -p 2047 '\
          cd /home/www/webserver/v2/webroot; \
          unzip -o package.zip; \
          ls -lah; \
          pm2 restart startup.json; \
          rm package.zip; \
          ls -lah; \
      '"
	}

	stage('Clean'){
		echo 'Cleaning old files.'
		sh "rm -rf package.zip"
	}
}
