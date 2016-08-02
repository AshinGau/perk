var Vue = require('./utils/vue.js'),
	VueRouter = require('./utils/vue-router.js'),
	Ajaxop = require('./ajax.js');
window.Vue = Vue;
window.VueRouter = VueRouter;
window.Ajaxop = Ajaxop;
//服务器地址
window._server_url = 'http://120.24.244.99:8000/';
//cookie expires days
window._expires = 7;
Vue.use(VueRouter);

import Skeleton from './Skeleton.vue';
import Article from './Article.vue';
import Message from './Message.vue';
import User from './User.vue';
import Comment from './Comment.vue';
import Login from './Login.vue';
import Regist from './Regist.vue';
import CommentTemplate from './CommentTemplate.vue';

Vue.component('perk-comment', Comment);
Vue.component('comment-template', CommentTemplate);

var router = new VueRouter();
var PerkApp = Vue.extend(Skeleton);
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
	'/user/login': {
		component: Login,
		name: 'login'
	},
	'/user/regist': {
		component: Regist,
		name: 'regist'
	}
});

//网站初始化验证
window.Ajaxop.INIT_AUTH();

router.beforeEach(function (transition) {
	if (transition.to.path == '/user' && !window.$.cookie('user')) {
		window._preAction = 'user';
		router.go({ path: '/user/login' });
	} else if (transition.to.path == '/message' && !window.$.cookie('user')) {
		window._preAction = 'message';
		router.go({ path: '/user/login' });
	} else {
		transition.next();
	}
})

router.start(PerkApp, '#PerkApp');

window._MESSAGE = function (msg) {
	$('#PerkMessageInfo').html(msg);
	var $msg = $('#PerkMessage').removeClass('up');
	setTimeout(function () {
		$msg.addClass('up');
	}, 50);
}