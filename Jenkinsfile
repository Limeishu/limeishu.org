node {
	def app
	def project_name = 'Beta-Limeishu-Website'

	stage('Clone repo'){
		checkout scm
	}

	stage('Prepare'){
		echo 'Cleaning old files.'
		sh "rm -rf package.zip"
		sh "rm -rf node_modules"
    sh "rm -rf .git"

		echo 'Packing files.'
		sh "zip -r package.zip ."
	}

  stage('Push'){
		echo 'Connecting to the server.'
		sh "scp -r -P 2047 $WORKSPACE/package.zip www@172.104.117.236:/home/www/webserver/v2/webroot"
	}

	stage('Deploy'){
    echo 'Connecting to the server.'
    sh "ssh www@172.104.117.236 -p 2047 '\
          cd /home/www/webserver/v2/webroot; \
          unzip -o package.zip; \
          ls -lah; \
          npm install; \
          npm run build; \
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