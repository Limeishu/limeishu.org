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
		sh "cd /home/www/webserver/v2/webroot"
		sh "ls | grep -v package.zip | xargs rm"
		sh "unzip -o package.zip"
		sh "npm install"
		sh "npm run build"
		sh "pm2 restart startup.json"
		sh "rm package.zip"
		sh "ls"
	}

	stage('Clean'){
		echo 'Cleaning old files.'
		sh "rm -rf package.zip"
	}
}