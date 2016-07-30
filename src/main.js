var Vue = require('./utils/vue.js'),
	VueRouter = require('./utils/vue-router.js');
window.Vue = Vue;
window.VueRouter = VueRouter;
window._server_url = 'http://120.24.244.99:8000/';
Vue.use(VueRouter);

import Skeleton from './Skeleton.vue';
import Article from './Article.vue';
import Message from './Message.vue';
import User from './User.vue';
import Comment from './Comment.vue';
import Reply from './Reply.vue';
import Login from './Login.vue';
import Regist from './Regist.vue';
import Edit from './Edit.vue';
import CommentTemplate from './CommentTemplate.vue';

Vue.component('perk-comment', Comment);
Vue.component('comment-template', CommentTemplate);

var router = new VueRouter();
var PerkApp= Vue.extend(Skeleton);
router.map({
	'/article/:page': {
		component: Article,
		name: 'article'
	},
	'/message': {
		component: Message,
		name: 'message'
	},
	'/user': {
		component: User,
		name: 'user'
	},
	'/article/:page/reply': {
		component: Reply,
		name: 'reply'
	},
	'/user/login': {
		component: Login,
		name: 'login'
	},
	'/user/regist': {
		component: Regist,
		name: 'regist'
	},
	'/user/edit': {
		component: Edit,
		name: 'edit'
	}
});

if(window.$.cookie('auth')){
	var auth = window.$.cookie('auth');
	window.$.ajax({
		dataType: 'json',
		url: window._server_url + 'user/',
		type: 'GET',
		beforeSend: function(request) {
			request.setRequestHeader("Authorization", 'Token ' + auth);
		},
		success: function(res){
			console.log(res);
		},
		error: function(){
			console.log('inner ajax error');
		}
	});
}

router.beforeEach(function (transition) {
	if (transition.to.path == '/user' && !window.$.cookie('user')) {
		router.go({ path: '/user/login' });
	}else{
		transition.next();
	}
})

router.start(PerkApp, '#PerkApp');