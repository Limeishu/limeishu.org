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

		echo 'Packing files.'
		sh "zip -r package.zip ."
    sh "cp -f $WORKSPACE/package.zip /home/www/webserver/v2/webroot/"
	}

	stage('Deploy'){
		echo 'Building...'
		sh "
				cd /home/www/webserver/v2/webroot; \
				ls | grep -v package.zip | xargs rm;\
				unzip -o package.zip;\
				yarn;\
				yarn run build;\
				pm2 restart startup.json;\
				rm package.zip;\
				ls; \
			"
	}

	stage('Clean'){
		echo 'Cleaning old files.'
		sh "rm -rf package.zip"
	}
}