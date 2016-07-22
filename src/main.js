var Vue = require('./utils/vue.js'),
	VueRouter = require('./utils/vue-router.js'),
	VueResource = require('./utils/vue-resource.js'),
	$ = require('./utils/jquery.js');

Vue.use(VueRouter);
Vue.use(VueResource);

import AppHeader from './AppHeader.vue';
import Article from './Article.vue';

var router = new VueRouter();
var PerkApp = Vue.extend(AppHeader);
router.map({
	'/': {
		component: Article
	},
	'/article': {
		component: Article
	}
});

router.start(PerkApp, '#PerkApp');

$(window).scroll(function(){
	var top = $(window).scrollTop();
	var $AppHeader = $('#AppHeader');
	if(top > 5){
		$AppHeader.addClass('nail');
	}else{
		$AppHeader.removeClass('nail');
	}
});

