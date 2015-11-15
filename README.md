# spring-boot-bower-grunt

- Simple [Spring Boot](http://projects.spring.io/spring-boot/) application using [Spring MVC](https://spring.io/guides/gs/serving-web-content/) and [Thymeleaf](http://www.thymeleaf.org/)
- Frontend dependencies are managed using [Bower](http://bower.io/)
- Frontend resources are packaged/minified/... using [Grunt](http://gruntjs.com/)
- Frontend build is managed with [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) (downloads npm and has m2e support!)
- Only the frontend resources really needed are packaged with the application
- Profiles 'debug' and 'production' can be used to switch between original and minified frontend resources
